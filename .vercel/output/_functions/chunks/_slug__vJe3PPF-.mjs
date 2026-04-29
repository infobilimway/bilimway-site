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
  const query = `*[_type == "service" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  shortDescription,
  fullDescription[]{
    ...,
    _type == "image" => {
      ...,
      asset->,
      alt,
      caption
    }
  },
  features,
  price,
  isPopular,
  category,
  icon,
  coverImage{
    ...,
    asset->,
    alt
  },
  publishedAt
}`;
  const service = await sanityClient.fetch(query, { slug });
  if (!service) {
    return Astro2.redirect("/404");
  }
  const coverUrl = service?.coverImage?.asset ? urlFor(service.coverImage).width(1200).height(650).fit("crop").auto("format").url() : null;
  const coverAlt = service?.coverImage?.alt || service?.title || "";
  const hasFullDescription = Array.isArray(service?.fullDescription) && service.fullDescription.length > 0;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${service.title} — BilimWay`, "description": service.shortDescription || "Услуга BilimWay" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="site-main uni-single"> <div class="container"> <header class="uni-single__header"> <div class="uni-single__breadcrumbs"> <a href="/">Главная</a> <span class="sep">/</span> <a href="/services">Услуги</a> <span class="sep">/</span> <span class="current">${service.title}</span> </div> <div class="uni-single__title-wrap"> <h1 class="uni-single__title">${service.title}</h1> ${service.isPopular && renderTemplate`<span class="uni-single__badge">Популярный пакет</span>`} </div> </header> <div class="uni-single__layout"> <article class="uni-single__content"> ${coverUrl && renderTemplate`<div class="uni-single__cover"> <img${addAttribute(coverUrl, "src")}${addAttribute(coverAlt, "alt")} loading="eager"> </div>`} <div class="uni-single__prose"> ${service.shortDescription && renderTemplate`<p class="uni-single__lead"> <strong>${service.shortDescription}</strong> </p>`} <div class="post-body prose"> ${hasFullDescription ? renderTemplate`${renderComponent($$result2, "PortableTextContent", $$PortableTextContent, { "value": service.fullDescription })}` : renderTemplate`<p>Полное описание услуги пока не добавлено.</p>`} </div> ${service.features && service.features.length > 0 && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <h2>Что входит в пакет</h2> <ul class="uni-single__list"> ${service.features.map((item) => renderTemplate`<li> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"> <polyline points="20 6 9 17 4 12"></polyline> </svg> ${item} </li>`)} </ul> ` })}`} </div> </article> <aside class="uni-single__sidebar"> <div class="uni-single__widget"> <div class="uni-single__widget-head"> <h3>${service.title}</h3> <p>Информация по услуге</p> </div> <ul class="uni-single__facts"> ${service.price && renderTemplate`<li> <span class="label">Стоимость</span> <span class="value">${service.price}</span> </li>`} ${service.category && renderTemplate`<li> <span class="label">Категория</span> <span class="value">${service.category}</span> </li>`} </ul> <div class="uni-single__widget-action"> <button class="btn btn-primary btn-block js-open-lead-modal" type="button"${addAttribute(service.title, "data-service")}>
Заказать пакет
</button> <p class="note">
Оставьте заявку, и мы расскажем, подойдёт ли вам этот пакет и что входит в сопровождение.
</p> </div> </div> </aside> </div> </div> <section class="uni-cta"> <div class="container"> <div class="uni-cta__box"> <div class="uni-cta__glow" aria-hidden="true"></div> <div class="uni-cta__content"> <h2>Готовы начать?</h2> <p>
Мы составим для вас удобный план поступления и подберём оптимальный пакет услуг.
</p> <button class="btn btn-primary js-open-lead-modal" type="button"${addAttribute(service.title, "data-service")}>
Оставить заявку
</button> </div> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ${renderComponent($$result2, "LeadModal", $$LeadModal, {})} ` })}`;
}, "D:/Sir_isleri/sayt/belstudy/site/src/pages/services/[slug].astro", void 0);

const $$file = "D:/Sir_isleri/sayt/belstudy/site/src/pages/services/[slug].astro";
const $$url = "/services/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
