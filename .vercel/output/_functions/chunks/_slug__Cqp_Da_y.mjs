import { s as sanityClient, $ as $$BaseLayout, a as $$Header, b as $$Footer, c as $$LeadModal } from './LeadModal_BlCvHPUN.mjs';
import { c as createComponent } from './_astro_assets_VsroAdi8.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute, F as Fragment } from './entrypoint_DB4tVXJJ.mjs';
import { $ as $$PortableTextContent } from './PortableTextContent_DxpFVI6G.mjs';
import { u as urlFor } from './image_CoawgneK.mjs';

const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (!slug) {
    return Astro2.redirect("/404");
  }
  const query = `*[_type == "university" && slug.current == $slug][0]{
  _id,
  name,
  "slug": slug.current,
  city,
  country,
  shortDescription,
  tuitionFrom,
  faculties,
  publishedAt,
  coverImage{
    ...,
    asset->,
    alt
  },
  fullDescription[]{
    ...
  }
}`;
  const uni = await sanityClient.fetch(query, { slug });
  if (!uni) {
    return Astro2.redirect("/404");
  }
  const coverUrl = uni?.coverImage?.asset ? urlFor(uni.coverImage).width(1200).height(650).fit("crop").auto("format").url() : null;
  const coverAlt = uni?.coverImage?.alt || uni?.name || "";
  const hasFullDescription = Array.isArray(uni?.fullDescription) && uni.fullDescription.length > 0;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${uni.name} — Поступление с BilimWay`, "description": uni.shortDescription || `Узнайте всё о поступлении в ${uni.name}.` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="site-main uni-single"> <div class="container"> <header class="uni-single__header"> <div class="uni-single__breadcrumbs"> <a href="/">Главная</a> <span class="sep">/</span> <a href="/universities">Университеты</a> <span class="sep">/</span> <span class="current">${uni.name}</span> </div> <div class="uni-single__title-wrap"> <h1 class="uni-single__title">${uni.name}</h1> </div> </header> <div class="uni-single__layout"> <article class="uni-single__content"> ${coverUrl && renderTemplate`<div class="uni-single__cover"> <img${addAttribute(coverUrl, "src")}${addAttribute(coverAlt, "alt")} loading="eager"> </div>`} <div class="uni-single__prose"> ${uni.shortDescription && renderTemplate`<p class="uni-single__lead"> <strong>${uni.shortDescription}</strong> </p>`} <div class="post-body prose"> ${hasFullDescription ? renderTemplate`${renderComponent($$result2, "PortableTextContent", $$PortableTextContent, { "value": uni.fullDescription })}` : renderTemplate`<p>Полное описание университета пока не добавлено.</p>`} </div> ${uni.faculties && uni.faculties.length > 0 && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <h2>Факультеты и направления</h2> <div class="uni-single__faculties"> ${uni.faculties.map((fac) => renderTemplate`<div class="uni-single__faculty-card"> <div class="icon"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path> <path d="M6 12v5c3 3 9 3 12 0v-5"></path> </svg> </div> <span>${fac}</span> </div>`)} </div> ` })}`} </div> </article> <aside class="uni-single__sidebar"> <div class="uni-single__widget"> <div class="uni-single__widget-head"> <h3>${uni.name}</h3> <p>Краткая информация о поступлении</p> </div> <ul class="uni-single__facts"> ${uni.city && renderTemplate`<li> <span class="label">Город</span> <span class="value">${uni.city}</span> </li>`} ${uni.country && renderTemplate`<li> <span class="label">Страна</span> <span class="value">${uni.country}</span> </li>`} ${uni.tuitionFrom && renderTemplate`<li> <span class="label">Стоимость</span> <span class="value">${uni.tuitionFrom}</span> </li>`} </ul> <div class="uni-single__widget-action"> <button class="btn btn-primary btn-block js-open-lead-modal" type="button">
Хочу поступить сюда
</button> <p class="note">
Оставьте заявку, и мы расскажем, какие документы нужны и когда лучше подавать в этот вуз.
</p> </div> </div> </aside> </div> </div> <section class="uni-cta"> <div class="container"> <div class="uni-cta__box"> <div class="uni-cta__glow" aria-hidden="true"></div> <div class="uni-cta__content"> <h2>Хотите учиться в этом университете?</h2> <p>
Мы поможем подготовить документы, подать заявку и организовать поступление в Беларусь.
</p> <button class="btn btn-primary js-open-lead-modal" type="button">
Оставить заявку
</button> </div> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ${renderComponent($$result2, "LeadModal", $$LeadModal, {})} ` })}`;
}, "D:/Sir_isleri/sayt/belstudy/site/src/pages/universities/[slug].astro", void 0);

const $$file = "D:/Sir_isleri/sayt/belstudy/site/src/pages/universities/[slug].astro";
const $$url = "/universities/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
