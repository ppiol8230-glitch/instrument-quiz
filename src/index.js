import NAMES from "./names.js";
import NAMES_EN from "./names_en.js";
import NAMES_ZH from "./names_zh.js";

// /r/<악기id> 로 들어온 공유 링크는 그 악기에 맞는 미리보기(OG)로 바꿔서 index.html을 돌려준다.
// 실제 결과 복원은 주소의 # 뒤 데이터로 브라우저가 처리하므로, 여기서는 미리보기 메타태그만 손대면 된다.
const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const m = url.pathname.match(/^\/r\/([A-Za-z0-9_-]+)\/?$/);
    if (!m) return env.ASSETS.fetch(request);

    // 원본 요청 헤더(accept-encoding 등)를 넘기지 않는다 — 압축된 본문을 그대로 다시 감싸면 빈 페이지가 된다
    const page = await env.ASSETS.fetch(new Request(new URL("/index.html", url).toString()));
    let html = await page.text();

    // 공유 링크의 ?l=en / ?l=zh 이면 그 언어 미리보기로 (해시 뒤 결과 데이터는 서버로 오지 않으므로 언어만 쿼리로 받는다)
    const lang = url.searchParams.get("l");
    const en = lang === "en", zh = lang === "zh";
    const name = en ? NAMES_EN[m[1]] : zh ? NAMES_ZH[m[1]] : NAMES[m[1]];
    if (name) {
      const title = en ? `My instrument is the ${name}!`
                  : zh ? `适合我的乐器是${name}!`
                  : `나에게 맞는 악기는 ${name}!`;
      const desc = en
        ? "Everyone should be able to play one instrument — here's what a 3-minute test picked for me. What would yours be?"
        : zh
        ? "这辈子总得会一样乐器 — 3分钟测试给我的结果。你的会是什么呢?"
        : "살면서 악기 하나쯤은 다룰 줄 알아야지 — 3분 테스트로 나온 결과예요. 당신의 악기는 뭘까요?";
      const image = `${url.origin}/og/${zh ? "zh/" : ""}${m[1]}.png`;
      const pageUrl = `${url.origin}/r/${m[1]}${en ? "?l=en" : zh ? "?l=zh" : ""}`;
      const setMeta = (attr, key, val) => {
        html = html.replace(
          new RegExp(`(<meta ${attr}="${key}" content=")[^"]*(")`),
          `$1${esc(val)}$2`
        );
      };
      html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`);
      setMeta("property", "og:title", title);
      setMeta("property", "og:description", desc);
      setMeta("property", "og:image", image);
      setMeta("property", "og:url", pageUrl);
      setMeta("name", "twitter:image", image);
      setMeta("name", "description", desc);
    }

    return new Response(html, {
      headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=300" },
    });
  },
};
