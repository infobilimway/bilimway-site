import { s as sanityClient, $ as $$BaseLayout, a as $$Header, b as $$Footer, c as $$LeadModal } from './LeadModal_BlCvHPUN.mjs';
import { c as createComponent } from './_astro_assets_VsroAdi8.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_DB4tVXJJ.mjs';
import { $ as $$PortableTextContent } from './PortableTextContent_DxpFVI6G.mjs';
import { u as urlFor } from './image_CoawgneK.mjs';

const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (!slug) {
    return Astro2.redirect("/404");
  }
  const query = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  coverImage{
    ...,
    asset->,
    alt
  },
  content[]{
    ...,
    _type == "image" => {
      ...,
      asset->,
      alt,
      caption
    }
  }
}`;
  const post = await sanityClient.fetch(query, { slug });
  if (!post) {
    return Astro2.redirect("/404");
  }
  const coverUrl = post?.coverImage?.asset ? urlFor(post.coverImage).width(1200).height(650).fit("crop").auto("format").url() : null;
  const coverAlt = post?.coverImage?.alt || post?.title || "";
  const hasContent = Array.isArray(post?.content) && post.content.length > 0;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${post.title} — BilimWay`, "description": post.excerpt || "Статья от BilimWay" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="site-main uni-single"> <div class="container"> <header class="uni-single__header"> <div class="uni-single__breadcrumbs"> <a href="/">Главная</a> <span class="sep">/</span> <a href="/posts">Статьи</a> <span class="sep">/</span> <span class="current">${post.title}</span> </div> <div class="uni-single__title-wrap"> <h1 class="uni-single__title">${post.title}</h1> </div> </header> <div class="uni-single__layout"> <article class="uni-single__content"> ${coverUrl && renderTemplate`<div class="uni-single__cover"> <img${addAttribute(coverUrl, "src")}${addAttribute(coverAlt, "alt")} loading="eager"> </div>`} <div class="uni-single__prose"> ${post.excerpt && renderTemplate`<p class="uni-single__lead"> <strong>${post.excerpt}</strong> </p>`} <div class="post-body prose"> ${hasContent ? renderTemplate`${renderComponent($$result2, "PortableTextContent", $$PortableTextContent, { "value": post.content })}` : renderTemplate`<p>Контент статьи пока не добавлен.</p>`} </div> </div> </article> <aside class="uni-single__sidebar"> <div class="uni-single__widget"> <div class="uni-single__widget-head"> <h3>Нужна помощь с поступлением?</h3> <p>Свяжитесь с BilimWay и получите консультацию по вашей ситуации.</p> </div> <div class="uni-single__widget-action"> <button class="btn btn-primary btn-block js-open-lead-modal" type="button">
Оставить заявку
</button> <p class="note">
Заполните короткую форму — мы свяжемся с вами и подскажем, как лучше действовать.
</p> </div> </div> </aside> </div> </div> <section class="uni-cta"> <div class="container"> <div class="uni-cta__box"> <div class="uni-cta__glow" aria-hidden="true"></div> <div class="uni-cta__content"> <h2>Готовы обсудить ваше поступление?</h2> <p>
Оставьте заявку, и мы свяжемся с вами, чтобы бесплатно ответить на вопросы
              по университетам, специальностям и документам.
</p> <button class="btn btn-primary js-open-lead-modal" type="button">
Получить консультацию
</button> </div> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ${renderComponent($$result2, "LeadModal", $$LeadModal, {})} ` })}`;
}, "D:/Sir_isleri/sayt/belstudy/site/src/pages/posts/[slug].astro", void 0);

const $$file = "D:/Sir_isleri/sayt/belstudy/site/src/pages/posts/[slug].astro";
const $$url = "/posts/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
