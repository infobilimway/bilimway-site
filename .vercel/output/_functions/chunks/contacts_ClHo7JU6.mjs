import { $ as $$BaseLayout, a as $$Header, b as $$Footer, c as $$LeadModal, r as renderScript } from './LeadModal_BlCvHPUN.mjs';
import { c as createComponent } from './_astro_assets_VsroAdi8.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_DB4tVXJJ.mjs';

const contactHero = new Proxy({"src":"/_astro/contact-hero.R99250q0.jpg","width":1280,"height":853,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Sir_isleri/sayt/belstudy/site/src/assets/contact-hero.jpg";
							}
							
							return target[name];
						}
					});

const $$Contacts = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Контакты — BilimWay", "description": "Свяжитесь с BilimWay для консультации по поступлению в университеты Беларуси." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="site-main"> <section class="contact-hero"> <div class="contact-hero__bg" aria-hidden="true"> <div class="contact-hero__grid"></div> <div class="contact-hero__pulse-zone"> <div class="contact-hero__glow contact-hero__glow--blue"></div> <div class="contact-hero__glow contact-hero__glow--green"></div> <div class="contact-hero__radar"> <span></span> <span></span> <span></span> <span></span> <span></span> </div> <div class="contact-hero__signal contact-hero__signal--1"></div> <div class="contact-hero__signal contact-hero__signal--2"></div> <div class="contact-hero__signal contact-hero__signal--3"></div> </div> </div> <div class="container contact-hero__container"> <div class="contact-hero__layout"> <div class="contact-hero__content"> <div class="contact-hero__badge contact-reveal"> <span class="contact-hero__badge-dot"></span>
Служба заботы BilimWay
</div> <h1 class="contact-hero__title contact-reveal">
Мы всегда <br> <span class="contact-hero__title-accent">на связи с вами</span> </h1> <p class="contact-hero__text contact-reveal">
Отвечаем на любые вопросы о поступлении, визах, документах и жизни в Беларуси.
              Выберите удобный канал связи или приезжайте в офис.
</p> <div class="contact-hero__actions contact-reveal"> <a href="#contact-cards" class="btn btn-primary contact-hero__btn">
Выбрать способ связи
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <path d="M12 5v14"></path> <path d="M5 12l7 7 7-7"></path> </svg> </a> <button class="btn btn-secondary js-open-lead-modal" type="button">
Заказать звонок
</button> </div> </div> <div class="contact-hero__media contact-reveal" style="--reveal-delay:0.1s;"> <div class="contact-hero__circle-wrap"> <div class="contact-hero__circle-ring contact-hero__circle-ring--1"></div> <div class="contact-hero__circle-ring contact-hero__circle-ring--2"></div> <div class="contact-hero__circle-ring contact-hero__circle-ring--3"></div> <div class="contact-hero__image-orb"> <img${addAttribute(contactHero.src, "src")} alt="Команда BilimWay на связи"${addAttribute(contactHero.width, "width")}${addAttribute(contactHero.height, "height")} loading="eager" decoding="async" class="contact-hero__image"> </div> <div class="contact-hero__floating-card contact-hero__floating-card--top"> <span>Поддержка</span> <strong>Быстрый ответ</strong> </div> <div class="contact-hero__floating-card contact-hero__floating-card--bottom"> <span>BilimWay</span> <strong>Контакт 24/7</strong> </div> </div> </div> </div> </div> </section> <section id="contact-cards" class="contact-cards"> <div class="container"> <div class="contact-cards__head contact-reveal"> <span class="contact-cards__eyebrow">Контакты</span> <h2 class="contact-cards__title">Как с нами связаться</h2> <p class="contact-cards__sub">
Пишите или звоните — мы на связи каждый день.
</p> </div> <div class="contact-cards__grid"> <article class="contact-card contact-reveal" style="--reveal-delay:0s;"> <div class="contact-card__icon"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6 6l1.46-1.29a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92z"></path> </svg> </div> <h3>Телефон / Imo</h3> <p>Срочные вопросы и консультация.</p> <a href="tel:+375259178241">+375 25 917 82 41</a> </article> <article class="contact-card contact-reveal" style="--reveal-delay:0.08s;"> <div class="contact-card__icon"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <path d="M21.198 2.433a2 2 0 0 0-2.278-.32L3.913 8.54c-1.514.68-1.43 2.86.133 3.42l3.975 1.43 1.43 3.976c.56 1.562 2.74 1.646 3.42.132L21.518 4.79a2 2 0 0 0-.32-2.357z"></path> <path d="M10.5 13.5 21 3"></path> </svg> </div> <h3>Telegram</h3> <p>Удобный чат для абитуриентов.</p> <a href="https://t.me/bilimway_assistant_bot" target="_blank" rel="noopener noreferrer">@bilimway_assistant_bot</a> </article> <article class="contact-card contact-reveal" style="--reveal-delay:0.16s;"> <div class="contact-card__icon"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <path d="M4 4h16v16H4z"></path> <path d="m22 6-10 7L2 6"></path> </svg> </div> <h3>Email</h3> <p>Для документов и официальных заявок.</p> <a href="mailto:info.bilimway@gmail.com">info.bilimway@gmail.com</a> </article> </div> </div> </section> <section class="contact-offices"> <div class="container"> <div class="contact-offices__head contact-reveal"> <span class="contact-offices__eyebrow">Наши офисы</span> <h2 class="contact-offices__title">Ждём вас в гости</h2> </div> <div class="contact-offices__grid"> <article class="office-card contact-reveal"> <div class="office-card__city">Минск, Беларусь</div> <h3>Головной офис</h3> <p>ул. Городецкая, д. 64, пом. 1, кабинет 9</p> <div class="office-card__time">Пн–Пт: 9:00–18:00</div> </article> <article class="office-card contact-reveal" style="--reveal-delay:0.08s;"> <div class="office-card__city">Мары, Туркменистан</div> <h3>Офис партнёров</h3> <p>Рынок «Гундогор», улица 19 Февраля</p> <div class="office-card__time">Пн–Сб: 9:00–18:00</div> </article> <a href="https://yandex.ru/maps/?text=Минск,+ул.+Городецкая,+64" target="_blank" rel="noopener noreferrer" class="office-card office-card--map contact-reveal" style="--reveal-delay:0.16s;" aria-label="Открыть адрес BilimWay в Яндекс Картах"> <div class="office-card__map-bg"></div> <div class="office-card__map-content"> <div class="office-card__map-pin"> <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"> <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"></path> </svg> </div> <span>Открыть в Яндекс Картах</span> </div> </a> </div> </div> </section> <section class="contact-cta contact-reveal"> <div class="container"> <div class="contact-cta__box"> <div class="contact-cta__glow" aria-hidden="true"></div> <div class="contact-cta__content"> <h2>Не нашли ответ на свой вопрос?</h2> <p>
Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут,
              чтобы бесплатно проконсультировать.
</p> <button class="btn btn-primary js-open-lead-modal" type="button">
Оставить заявку
</button> </div> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ${renderComponent($$result2, "LeadModal", $$LeadModal, {})} ${renderScript($$result2, "D:/Sir_isleri/sayt/belstudy/site/src/pages/contacts.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "D:/Sir_isleri/sayt/belstudy/site/src/pages/contacts.astro", void 0);

const $$file = "D:/Sir_isleri/sayt/belstudy/site/src/pages/contacts.astro";
const $$url = "/contacts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Contacts,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
