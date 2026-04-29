import { s as sanityClient, $ as $$BaseLayout, a as $$Header, b as $$Footer, c as $$LeadModal, r as renderScript } from './LeadModal_BlCvHPUN.mjs';
import { c as createComponent } from './_astro_assets_VsroAdi8.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_DB4tVXJJ.mjs';

const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const query = `*[_type == "service"] | order(_createdAt asc) {
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
  }
}`;
  const services = await sanityClient.fetch(query);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Услуги и цены — BilimWay", "description": "Комплексная помощь в поступлении в университеты Беларуси: от сбора документов до заселения в общежитие." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="site-main"> <section class="serv-hero"> <div class="serv-hero__aura" aria-hidden="true"> <div class="serv-hero__orb serv-hero__orb--1"></div> <div class="serv-hero__orb serv-hero__orb--2"></div> <div class="serv-hero__orb serv-hero__orb--3"></div> </div> <div class="serv-hero__grid-bg"></div> <div class="container serv-hero__container"> <div class="serv-hero__content"> <div class="serv-hero__badge serv-reveal"> <span class="serv-hero__badge-dot"></span>
Ваш комфорт — наша забота
</div> <h1 class="serv-hero__title serv-reveal">
Пакеты <span class="serv-hero__title-glow">услуг</span><br>
для лёгкого поступления
</h1> <p class="serv-hero__text serv-reveal">
Мы берём на себя всю бюрократию, переводы документов, переговоры с вузом и организацию приезда. Вам остаётся только собрать чемодан.
</p> <div class="serv-hero__actions serv-reveal"> <a href="#services-list" class="btn btn-primary serv-hero__btn">
Выбрать пакет
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"> <path d="M12 5v14M5 12l7 7 7-7"></path> </svg> </a> </div> </div> </div> </section> <section id="services-list" class="serv-list"> <div class="container"> <div class="serv-list__head serv-reveal"> <h2 class="serv-list__title">Тарифы и пакеты</h2> <p class="serv-list__sub">Прозрачные условия без скрытых платежей</p> </div> ${services.length > 0 ? renderTemplate`<div class="serv-grid"> ${services.map((service, index) => renderTemplate`<div${addAttribute(`serv-card serv-reveal ${service.isPopular ? "serv-card--popular" : ""}`, "class")}${addAttribute(`--reveal-delay: ${index * 0.1}s;`, "style")}> <div class="serv-card__glow"></div> <div class="serv-card__inner"> ${service.isPopular && renderTemplate`<div class="serv-card__popular-badge"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"> <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon> </svg>
Хит выбора
</div>`} <h3 class="serv-card__title">${service.title}</h3> ${service.shortDescription && renderTemplate`<p class="serv-card__desc">${service.shortDescription}</p>`} ${service.price && renderTemplate`<div class="serv-card__price-box"> <span class="serv-card__price">${service.price}</span> </div>`} ${service.features && service.features.length > 0 && renderTemplate`<ul class="serv-card__feats"> ${service.features.map((feat) => renderTemplate`<li> <div class="serv-card__check"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"> <polyline points="20 6 9 17 4 12"></polyline> </svg> </div> <span>${feat}</span> </li>`)} </ul>`} <div class="serv-card__actions"> ${service.slug && renderTemplate`<a${addAttribute(`/services/${service.slug}`, "href")} class="btn btn-ghost serv-card__link">
Подробнее
</a>`} <button class="btn btn-secondary serv-card__btn js-open-lead-modal" type="button"${addAttribute(service.title, "data-service")}>
Заказать пакет
</button> </div> </div> </div>`)} </div>` : renderTemplate`<div class="serv-empty serv-reveal"> <p>Пакеты услуг скоро появятся. Вы можете получить индивидуальную консультацию.</p> <button class="btn btn-primary js-open-lead-modal" type="button">Связаться с нами</button> </div>`} </div> </section> <section class="serv-process"> <div class="container"> <div class="serv-process__head serv-reveal"> <span class="serv-process__label">Как мы работаем</span> <h2 class="serv-process__title">4 шага до студенческого билета</h2> </div> <div class="serv-timeline"> <div class="serv-timeline__line" aria-hidden="true"> <div class="serv-timeline__progress js-timeline-progress"></div> </div> ${[
    { step: "01", title: "Бесплатная консультация", text: "Оцениваем ваши шансы, подбираем университет и специальность под ваш бюджет." },
    { step: "02", title: "Сбор документов", text: "Делаем переводы, заверяем у нотариуса, готовим полное досье для подачи в комиссию." },
    { step: "03", title: "Гарантированное зачисление", text: "Подаём документы в вуз, получаем официальное приглашение на обучение." },
    { step: "04", title: "Встреча и заселение", text: "Встречаем в аэропорту, отвозим в общежитие, помогаем с медосмотром и сим-картой." }
  ].map((item) => renderTemplate`<div class="serv-step serv-reveal"> <div class="serv-step__marker">${item.step}</div> <div class="serv-step__card"> <h3>${item.title}</h3> <p>${item.text}</p> </div> </div>`)} </div> </div> </section> <section class="serv-cta serv-reveal"> <div class="container"> <div class="serv-cta__box"> <div class="serv-cta__rings"> <span></span><span></span><span></span> </div> <div class="serv-cta__content"> <h2>Начните путь к образованию мечты</h2> <p>Оставьте заявку сегодня, и мы составим для вас пошаговый план поступления.</p> <button class="btn btn-primary js-open-lead-modal" type="button">
Оставить заявку
</button> </div> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ${renderComponent($$result2, "LeadModal", $$LeadModal, {})} ${renderScript($$result2, "D:/Sir_isleri/sayt/belstudy/site/src/pages/services.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "D:/Sir_isleri/sayt/belstudy/site/src/pages/services.astro", void 0);

const $$file = "D:/Sir_isleri/sayt/belstudy/site/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
