import { s as sanityClient, $ as $$BaseLayout, a as $$Header, b as $$Footer, c as $$LeadModal, r as renderScript } from './LeadModal_BlCvHPUN.mjs';
import { c as createComponent } from './_astro_assets_VsroAdi8.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_DB4tVXJJ.mjs';
import { u as urlFor } from './image_CoawgneK.mjs';

const studentLeft = new Proxy({"src":"/_astro/student-left.JdnmNjtx.jpg","width":640,"height":960,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Sir_isleri/sayt/belstudy/site/src/assets/student-left.jpg";
							}
							
							return target[name];
						}
					});

const studentRight = new Proxy({"src":"/_astro/student-right.D-WRQ_R_.jpg","width":3839,"height":5758,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Sir_isleri/sayt/belstudy/site/src/assets/student-right.jpg";
							}
							
							return target[name];
						}
					});

const $$Universities = createComponent(async ($$result, $$props, $$slots) => {
  const query = `*[_type == "university"] | order(_createdAt desc) {
  _id,
  name,
  abbr,
  "slug": slug.current,
  category,
  price,
  duration,
  features,
  colorTheme,
  excerpt,
  coverImage
}`;
  const universities = await sanityClient.fetch(query);
  const totalUniversities = universities.length;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Университеты — BilimWay", "description": "Ведущие университеты Беларуси для иностранных абитуриентов" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="site-main"> <!-- HERO --> <section class="uni-hero"> <div class="uni-hero__decor" aria-hidden="true"> <div class="uni-hero__blob uni-hero__blob--1"></div> <div class="uni-hero__blob uni-hero__blob--2"></div> <div class="uni-hero__dots"></div> <div class="uni-hero__ring uni-hero__ring--1"></div> <div class="uni-hero__ring uni-hero__ring--2"></div> <div class="uni-hero__ring uni-hero__ring--3"></div> </div> <div class="container"> <div class="uni-hero__grid"> <!-- Left visual --> <div class="uni-hero__figure uni-hero__figure--left"> <div class="uni-hero__frame"> <div class="uni-hero__orbit uni-hero__orbit--1"></div> <div class="uni-hero__orbit uni-hero__orbit--2"></div> <div class="uni-hero__avatar"> <img${addAttribute(studentLeft.src, "src")} alt="Студент BilimWay"${addAttribute(studentLeft.width, "width")}${addAttribute(studentLeft.height, "height")} loading="eager" decoding="async"> </div> </div> <div class="uni-hero__chip"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <path d="M22 10v6"></path> <path d="M2 10l10-5 10 5-10 5z"></path> <path d="M6 12v5c3 3 9 3 12 0v-5"></path> </svg> <span>Медицина · Инженерия</span> </div> </div> <!-- Center content --> <div class="uni-hero__content"> <div class="uni-hero__badge"> <span class="uni-hero__badge-dot"></span> <span>Высшее образование в Беларуси</span> </div> <h1 class="uni-hero__title">
Выберите <mark>университет</mark><br>
для своего будущего
</h1> <p class="uni-hero__lead">
BilimWay помогает поступить в ведущие университеты Беларуси: от выбора направления и вуза до документов, приезда и адаптации.
</p> <div class="uni-hero__actions"> <a href="#universities-list" class="btn btn-primary uni-hero__scroll-btn"> <span>Смотреть университеты</span> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <path d="M12 5v14"></path> <path d="M5 12l7 7 7-7"></path> </svg> </a> <button class="btn btn-secondary js-open-lead-modal" type="button">
Получить консультацию
</button> </div> </div> <!-- Right visual --> <div class="uni-hero__figure uni-hero__figure--right"> <div class="uni-hero__frame"> <div class="uni-hero__orbit uni-hero__orbit--1 uni-hero__orbit--green"></div> <div class="uni-hero__orbit uni-hero__orbit--2 uni-hero__orbit--green"></div> <div class="uni-hero__avatar uni-hero__avatar--green"> <img${addAttribute(studentRight.src, "src")} alt="Абитуриент BilimWay"${addAttribute(studentRight.width, "width")}${addAttribute(studentRight.height, "height")} loading="eager" decoding="async"> </div> </div> <div class="uni-hero__chip uni-hero__chip--green"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <rect x="3" y="4" width="18" height="14" rx="2"></rect> <path d="M8 20h8"></path> <path d="M12 18v2"></path> </svg> <span>IT · Языки · Бизнес</span> </div> </div> </div> <div class="uni-stats"> <div class="uni-stats__item"> <strong${addAttribute(String(totalUniversities || 6), "data-counter")}>0</strong> <span>вузов в каталоге</span> </div> <div class="uni-stats__sep" aria-hidden="true"></div> <div class="uni-stats__item"> <strong data-counter="4">0</strong> <span>направления</span> </div> <div class="uni-stats__sep" aria-hidden="true"></div> <div class="uni-stats__item"> <strong data-counter="500">0</strong> <span>студентов с нами</span> </div> </div> </div> </section> <!-- LIST --> <section id="universities-list" class="uni-list"> <div class="container"> <div class="uni-list__head"> <span class="uni-list__eyebrow">Каталог</span> <h2 class="uni-list__title">Все университеты</h2> <p class="uni-list__sub">
Вузы ниже подтягиваются из админки Sanity. Добавляйте и редактируйте их без изменений в коде.
</p> </div> ${universities.length > 0 ? renderTemplate`<div class="uni-grid"> ${universities.map((uni, index) => renderTemplate`<article class="uni-card" data-reveal${addAttribute(`--i:${index};`, "style")}> <div class="uni-card__media"> ${uni.coverImage ? renderTemplate`<img${addAttribute(urlFor(uni.coverImage).width(900).height(560).fit("crop").url(), "src")}${addAttribute(uni.abbr || uni.name, "alt")} loading="lazy" width="900" height="560">` : renderTemplate`<div class="uni-card__stub"> <div class="uni-card__stub-bg"></div> <span>${uni.abbr || "UNI"}</span> </div>`} ${uni.category && renderTemplate`<span${addAttribute(`uni-card__badge ${uni.colorTheme === "accent" ? "uni-card__badge--green" : ""}`, "class")}> ${uni.category} </span>`} </div> <div class="uni-card__body"> <div class="uni-card__head"> <h3 class="uni-card__abbr">${uni.abbr || uni.name}</h3> <p class="uni-card__name">${uni.name}</p> </div> ${uni.excerpt && renderTemplate`<p class="uni-card__name">${uni.excerpt}</p>`} ${uni.features && uni.features.length > 0 && renderTemplate`<ul class="uni-card__feats"> ${uni.features.map((feature) => renderTemplate`<li> <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"> <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.4"></circle> <path d="M5 8.1L7.1 10.2L11.2 6.1" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path> </svg> <span>${feature}</span> </li>`)} </ul>`} <div class="uni-card__info"> ${uni.price && renderTemplate`<div class="uni-card__info-row"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"> <line x1="12" y1="1" x2="12" y2="23"></line> <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path> </svg> <span>${uni.price}</span> </div>`} ${uni.duration && renderTemplate`<div class="uni-card__info-row"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"> <circle cx="12" cy="12" r="10"></circle> <polyline points="12 6 12 12 16 14"></polyline> </svg> <span>${uni.duration}</span> </div>`} </div> <a${addAttribute(`/universities/${uni.slug}`, "href")} class="uni-card__link"> <span>Подробнее о вузе</span> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <path d="M5 12h14"></path> <path d="M12 5l7 7-7 7"></path> </svg> </a> </div> </article>`)} </div>` : renderTemplate`<div class="uni-empty"> <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"> <rect x="10" y="16" width="44" height="32" rx="6"></rect> <path d="M20 16V12a12 12 0 0 1 24 0v4"></path> </svg> <p>Сейчас университеты ещё не добавлены в Sanity.</p> </div>`} </div> </section> <!-- CTA --> <section class="uni-cta"> <div class="container"> <div class="uni-cta__wrap"> <div class="uni-cta__shine" aria-hidden="true"></div> <div class="uni-cta__body"> <h2>Поможем выбрать правильный университет</h2> <p>
Если вы не знаете, какой вуз выбрать, оставьте заявку. Мы бесплатно подскажем направление, стоимость и следующий шаг.
</p> <button class="btn btn-primary js-open-lead-modal" type="button">
Оставить заявку
</button> </div> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ${renderComponent($$result2, "LeadModal", $$LeadModal, {})} ${renderScript($$result2, "D:/Sir_isleri/sayt/belstudy/site/src/pages/universities.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "D:/Sir_isleri/sayt/belstudy/site/src/pages/universities.astro", void 0);

const $$file = "D:/Sir_isleri/sayt/belstudy/site/src/pages/universities.astro";
const $$url = "/universities";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Universities,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
