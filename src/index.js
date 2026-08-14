import NAMES from "./names.js";
import NAMES_EN from "./names_en.js";
import NAMES_ZH from "./names_zh.js";

/* 이 워커가 하는 일 두 가지
   ① /r/<악기id> 공유 링크 → 그 악기에 맞는 미리보기(OG)로 index.html을 돌려준다.
      실제 결과 복원은 주소의 # 뒤 데이터로 브라우저가 처리하므로 여기서는 메타태그만 손대면 된다.
   ② 홈(/)과 결과 페이지의 언어별 색인 — 언어마다 고유 주소를 주고(ko=파라미터 없음·en=?l=en·zh=?l=zh)
      각 주소가 자기 언어의 html lang·title·description·canonical·hreflang을 갖게 한다.
      이게 없으면 구글은 한 사이트에서 한 언어만 색인한다. */

const ORIGIN = "https://instrumentquiz.org";

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/* 검색·SNS 크롤러는 접속 국가 기반 언어 자동전환에서 제외한다.
   Googlebot은 대부분 미국에서 크롤링하므로 그대로 두면 어느 주소를 주든 영어판만 수집된다.
   크롤러에게는 요청한 주소의 언어를 그대로 고정해서 주고, 언어판 관계는 hreflang으로 알린다. */
const CRAWLER = /(googlebot|google-inspectiontool|bingbot|yeti|daum|duckduckbot|baiduspider|yandex|slurp|applebot|petalbot|bytespider|facebookexternalhit|twitterbot|kakaotalk|telegrambot|whatsapp|linkedinbot|discordbot|gptbot|oai-searchbot|perplexitybot|claudebot|ccbot|amazonbot)/i;

const isCrawler = (req) => CRAWLER.test(req.headers.get("user-agent") || "");

/* html lang 속성값 / hreflang 값 (중국어 간체는 hreflang에서 zh-Hans가 표준) */
const HTML_LANG = { ko: "ko", en: "en", zh: "zh-CN" };
const HREFLANG = { ko: "ko", en: "en", zh: "zh-Hans" };
const OG_LOCALE = { ko: "ko_KR", en: "en_US", zh: "zh_CN" };

/* 홈 화면 메타 — 앱이 실제로 렌더하는 문구와 맞춰 둔다(선언과 내용이 다르면 색인이 흔들린다) */
const HOME = {
  ko: {
    title: "악기핏: 나에게 맞는 악기 찾기 | 악기 추천 테스트",
    desc: "취향·성향·생활환경과 청음·리듬 감각을 함께 살펴 200가지 악기 중 나에게 맞는 악기를 추천합니다. 회원가입 없이 약 5분.",
  },
  en: {
    title: "Instrument Fit: Find the Right Instrument for You",
    desc: "Match your taste, personality, real-life needs, ear and rhythm against 200 instruments. No sign-up, about five minutes.",
  },
  zh: {
    title: "乐器Fit：找到适合你的乐器",
    desc: "结合喜好、性格、生活条件以及听音和节奏感，从200种乐器中找到适合你的那一种。无需注册，约5分钟。",
  },
};

/* 언어별 주소 — 한국어는 파라미터 없는 주소가 대표(canonical) */
function altUrls(path) {
  return {
    ko: ORIGIN + path,
    en: ORIGIN + path + "?l=en",
    zh: ORIGIN + path + "?l=zh",
  };
}

/* head 안의 태그를 언어에 맞게 갈아끼운다 */
function localize(html, { lang, path, title, desc, image }) {
  const alt = altUrls(path);
  const canonical = alt[lang];

  const set = (attr, key, val) => {
    html = html.replace(
      new RegExp(`(<meta ${attr}="${key}" content=")[^"]*(")`),
      `$1${esc(val)}$2`
    );
  };

  html = html.replace(/<html lang="[^"]*"/, `<html lang="${HTML_LANG[lang]}"`);
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`);
  set("name", "description", desc);
  set("property", "og:title", title);
  set("property", "og:description", desc);
  set("property", "og:url", canonical);
  set("name", "twitter:title", title);
  set("name", "twitter:description", desc);
  if (image) {
    set("property", "og:image", image);
    set("name", "twitter:image", image);
  }

  /* canonical 교체 + 바로 뒤에 hreflang·og:locale 삽입.
     x-default = 접속 국가로 언어를 자동 판별하는 파라미터 없는 주소 */
  const links = [
    `<link rel="canonical" href="${canonical}">`,
    `<link rel="alternate" hreflang="${HREFLANG.ko}" href="${alt.ko}">`,
    `<link rel="alternate" hreflang="${HREFLANG.en}" href="${alt.en}">`,
    `<link rel="alternate" hreflang="${HREFLANG.zh}" href="${alt.zh}">`,
    `<link rel="alternate" hreflang="x-default" href="${alt.ko}">`,
    `<meta property="og:locale" content="${OG_LOCALE[lang]}">`,
  ].join("\n");
  html = html.replace(/<link rel="canonical"[^>]*>/, links);

  /* 브라우저가 이 주소의 언어를 그대로 쓰게 고정한다.
     (이게 없으면 저장된 선택이나 접속 국가가 이겨서, 선언한 언어와 화면이 어긋난다) */
  html = html.replace(
    /<\/title>/,
    `</title>\n<script>window.__IQ_LANG__=${JSON.stringify(lang)};</script>`
  );

  return html;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;
    const isHome = path === "/" || path === "/index.html";
    const m = path.match(/^\/r\/([A-Za-z0-9_-]+)\/?$/);

    if (!isHome && !m) return env.ASSETS.fetch(request);

    // 원본 요청 헤더(accept-encoding 등)를 넘기지 않는다 — 압축된 본문을 그대로 다시 감싸면 빈 페이지가 된다
    const page = await env.ASSETS.fetch(new Request(new URL("/index.html", url).toString()));
    let html = await page.text();

    /* 언어 결정: 주소의 ?l= 이 최우선.
       파라미터가 없으면 — 크롤러는 한국어(대표 주소)로 고정, 사람은 브라우저가 알아서 판별하게 둔다. */
    const q = url.searchParams.get("l");
    const explicit = q === "ko" || q === "en" || q === "zh" ? q : null;
    const lang = explicit || (isCrawler(request) ? "ko" : null);

    if (m) {
      /* 결과 공유 링크 — 악기 이름을 넣은 미리보기 */
      const rl = lang || "ko";
      const name = rl === "en" ? NAMES_EN[m[1]] : rl === "zh" ? NAMES_ZH[m[1]] : NAMES[m[1]];
      if (name) {
        const title =
          rl === "en" ? `My instrument is the ${name}!`
          : rl === "zh" ? `适合我的乐器是${name}!`
          : `나에게 맞는 악기는 ${name}!`;
        const desc =
          rl === "en"
            ? "Instrument Fit matched me with this instrument after a short test. What would yours be?"
            : rl === "zh"
            ? "乐器Fit用一个简短测试为我找到了这件乐器。你的会是什么呢？"
            : "악기핏의 짧은 테스트로 나온 결과예요. 당신에게 맞는 악기는 무엇일까요?";
        html = localize(html, {
          lang: rl,
          path: `/r/${m[1]}`,
          title,
          desc,
          image: `${ORIGIN}/og/${rl === "zh" ? "zh/" : ""}${m[1]}.png`,
        });
        /* 결과 페이지는 언어를 명시한 링크로 들어온 게 아니면 브라우저 판별에 맡긴다 */
        if (!explicit && !isCrawler(request)) html = html.replace(/<script>window\.__IQ_LANG__=[^<]*<\/script>\n?/, "");
      }
    } else if (lang) {
      const h = HOME[lang];
      html = localize(html, { lang, path: "/", title: h.title, desc: h.desc });
    } else {
      /* 파라미터 없는 홈을 사람이 열었을 때 — 언어는 브라우저가 정하되, hreflang은 그대로 실어 보낸다 */
      html = localize(html, { lang: "ko", path: "/", title: HOME.ko.title, desc: HOME.ko.desc });
      html = html.replace(/<script>window\.__IQ_LANG__=[^<]*<\/script>\n?/, "");
    }

    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=300",
        vary: "User-Agent",
      },
    });
  },
};
