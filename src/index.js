import NAMES from "./names.js";

// /r/<악기id> 로 들어온 공유 링크는 그 악기에 맞는 미리보기(OG)로 바꿔서 index.html을 돌려준다.
// 실제 결과 복원은 주소의 # 뒤 데이터로 브라우저가 처리하므로, 여기서는 미리보기만 손대면 된다.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const m = url.pathname.match(/^\/r\/([A-Za-z0-9_-]+)\/?$/);
    if (!m) return env.ASSETS.fetch(request);

    const id = m[1];
    const page = await env.ASSETS.fetch(new Request(new URL("/index.html", url), request));
    const name = NAMES[id];
    if (!name) return new Response(page.body, page); // 모르는 id면 기본 페이지 그대로

    const title = `나에게 맞는 악기는 ${name}!`;
    const desc = "살면서 악기 하나쯤은 다룰 줄 알아야지 — 3분 테스트로 나온 결과예요. 당신의 악기는 뭘까요?";
    const image = `${url.origin}/og/${id}.png`;
    const pageUrl = `${url.origin}/r/${id}`;

    const setContent = (v) => ({ element(e) { e.setAttribute("content", v); } });
    return new HTMLRewriter()
      .on("title", { element(e) { e.setInnerContent(`${title} · 살면서 악기 하나쯤은 다룰 줄 알아야지`); } })
      .on('meta[property="og:title"]', setContent(title))
      .on('meta[property="og:description"]', setContent(desc))
      .on('meta[property="og:image"]', setContent(image))
      .on('meta[property="og:url"]', setContent(pageUrl))
      .on('meta[name="twitter:image"]', setContent(image))
      .on('meta[name="description"]', setContent(desc))
      .transform(new Response(page.body, {
        status: 200,
        headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=300" },
      }));
  },
};
