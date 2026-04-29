import { c as createComponent, $ as $$Image } from './_astro_assets_VsroAdi8.mjs';
import 'piccolore';
import { e as createRenderInstruction, b as renderTemplate, d as renderSlot, f as renderHead, c as addAttribute, m as maybeRenderHead, r as renderComponent } from './entrypoint_DB4tVXJJ.mjs';
import 'clsx';
import { createClient } from '@sanity/client';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const sanityClient = createClient(
            {"apiVersion":"2026-03-01","projectId":"3ye18fdx","dataset":"production","useCdn":false}
          );

globalThis.sanityClient = sanityClient;

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "BilimWay International — Обучение за рубежом",
    description = "Помощь иностранным абитуриентам в поступлении в университеты Беларуси и лучшие вузы мира. Полное сопровождение, визовая поддержка и подбор программ.",
    image = "/og-image.jpg"
    // <-- ВАШ ПУТЬ К КАРТИНКЕ (лежит в public/og-image.jpg)
  } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site || "https://www.bilimway.study");
  const socialImageURL = new URL(image, Astro2.site || "https://www.bilimway.study");
  return renderTemplate(_a || (_a = __template(['<html lang="ru"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', '</title><meta name="description"', '><link rel="canonical"', '><!-- Место для Google Search Console (заполним на следующем шаге) --><!-- <meta name="google-site-verification" content="ВАШ_КОД" /> --><!-- Open Graph / Facebook / Telegram / WhatsApp --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:site_name" content="BilimWay International"><meta property="og:locale" content="ru_RU"><!-- Twitter / X --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:url"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', `><!-- Favicon & Fonts --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet"><!-- Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=G-7M9C33VCWQ"><\/script><script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-7M9C33VCWQ');
    <\/script><!-- Yandex.Metrica counter --><script>
      (function(m,e,t,r,i,k,a){
          m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {
            if (document.scripts[j].src === r) { return; }
          }
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a);
      })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=108980496', 'ym');

      ym(108980496, 'init', {
        ssr: true,
        webvisor: true,
        clickmap: true,
        ecommerce: "dataLayer",
        referrer: document.referrer,
        url: location.href,
        accurateTrackBounce: true,
        trackLinks: true
      });
    <\/script>`, "</head> <body> ", ' <noscript> <div> <img src="https://mc.yandex.ru/watch/108980496" style="position:absolute; left:-9999px;" alt=""> </div> </noscript> </body></html>'])), title, addAttribute(description, "content"), addAttribute(canonicalURL, "href"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(socialImageURL, "content"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(socialImageURL, "content"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "D:/Sir_isleri/sayt/belstudy/site/src/layouts/BaseLayout.astro", void 0);

const logoImg = new Proxy({"src":"/_astro/image.KnwKzneF.png","width":1536,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Sir_isleri/sayt/belstudy/site/src/assets/image.png";
							}
							
							return target[name];
						}
					});

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="site-header" id="top"> <div class="container site-header__inner"> <!-- Логотип-картинка вместо текста --> <a href="/" class="site-logo" aria-label="BilimWay International — Главная"> ${renderComponent($$result, "Image", $$Image, { "src": logoImg, "alt": "BilimWay International", "class": "site-logo__image", "width": 260, "height": 80, "quality": "high" })} </a> <nav class="site-nav" aria-label="Основная навигация"> <a href="/">Главная</a> <a href="/universities">Университеты</a> <a href="/services">Услуги</a> <a href="/posts">Посты</a> <a href="/about">О нас</a> <a href="/contacts">Контакты</a> </nav> <div class="site-header__actions"> <button class="btn btn-secondary js-open-lead-modal" type="button">
Оставить заявку
</button> <button class="burger" type="button" aria-label="Открыть меню" aria-expanded="false" aria-controls="mobile-menu" data-burger> <span></span> <span></span> <span></span> </button> </div> </div> <div class="mobile-menu" id="mobile-menu" data-mobile-menu hidden> <div class="container mobile-menu__inner"> <nav class="mobile-menu__nav" aria-label="Мобильная навигация"> <a href="/">Главная</a> <a href="/universities">Университеты</a> <a href="/services">Услуги</a> <a href="/posts">Посты</a> <a href="/about">О нас</a> <a href="/contacts">Контакты</a> </nav> <button class="btn btn-secondary js-open-lead-modal" type="button">
Подать заявку
</button> </div> </div> </header> ${renderScript($$result, "D:/Sir_isleri/sayt/belstudy/site/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Sir_isleri/sayt/belstudy/site/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const productLinks = [
    { href: "/services", label: "Услуги" },
    { href: "/universities", label: "Университеты" },
    { href: "/posts", label: "Посты" },
    { href: "/#faq", label: "FAQ" }
  ];
  const companyLinks = [
    { href: "/about", label: "О нас" },
    { href: "/posts", label: "Новости" },
    { href: "/contacts", label: "Контакты" },
    { href: "/services", label: "Сотрудничество" }
  ];
  const helpLinks = [
    { href: "/services", label: "Поступление в Беларусь" },
    { href: "/universities", label: "Подбор вуза" },
    { href: "/contacts", label: "Консультация" },
    { href: "/about", label: "Для родителей и школ" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="site-footer"> <div class="container"> <div class="site-footer__top"> <a href="/" class="site-footer__brand" aria-label="BilimWay — Главная"> ${renderComponent($$result, "Image", $$Image, { "src": logoImg, "alt": "BilimWay", "class": "site-footer__logo", "width": 164, "height": 52, "quality": "high" })} </a> <p class="site-footer__copyright">
BilimWay © 2026. Все права защищены.
</p> </div> <div class="site-footer__divider"></div> <div class="site-footer__grid"> <div class="site-footer__column"> <h3>Навигация</h3> <ul> ${productLinks.map((link) => renderTemplate`<li><a${addAttribute(link.href, "href")}>${link.label}</a></li>`)} </ul> </div> <div class="site-footer__column"> <h3>Компания</h3> <ul> ${companyLinks.map((link) => renderTemplate`<li><a${addAttribute(link.href, "href")}>${link.label}</a></li>`)} </ul> </div> <div class="site-footer__column"> <h3>Помощь</h3> <ul> ${helpLinks.map((link) => renderTemplate`<li><a${addAttribute(link.href, "href")}>${link.label}</a></li>`)} </ul> </div> <div class="site-footer__column site-footer__column--contact"> <div class="site-footer__socials"> <a href="https://t.me/bilimway_assistant_bot" target="_blank" rel="noopener noreferrer" aria-label="Telegram" class="site-footer__social"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <line x1="22" y1="2" x2="11" y2="13"></line> <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon> </svg> </a> <a href="https://instagram.com/bilimway.study" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="site-footer__social"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect> <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path> <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line> </svg> </a> <a href="https://www.tiktok.com/@bilimway.study" target="_blank" rel="noopener noreferrer" aria-label="TikTok" class="site-footer__social"> <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"> <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.24V2h-3.12v13.18a2.67 2.67 0 1 1-2.67-2.67c.23 0 .45.03.67.08V9.43a5.8 5.8 0 0 0-.67-.04A5.79 5.79 0 1 0 15.82 15V8.33a7.9 7.9 0 0 0 4.61 1.48V6.69h-.84z"></path> </svg> </a> </div> <div class="site-footer__contact"> <p>+375 25 917 82 41</p> <p>info.bilimway@gmail.com</p> <p>г. Минск, ул. Городецкая, д. 64, пом. 1, каб. 9</p> <p>г. Мары, на рынке “Гундогор”, расположенный на улице 19 Февраля в городе Мары</p> </div> </div> </div> </div> </footer>`;
}, "D:/Sir_isleri/sayt/belstudy/site/src/components/Footer.astro", void 0);

const $$LeadModal = createComponent(async ($$result, $$props, $$slots) => {
  const query = `*[_type == "university"] | order(name asc) {
  name,
  abbr
}`;
  const universities = await sanityClient.fetch(query);
  return renderTemplate`${maybeRenderHead()}<div class="lead-modal" id="lead-modal" hidden> <div class="lead-modal__overlay" id="lead-modal-overlay"></div> <div class="lead-modal__dialog" id="lead-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="lead-modal-title"> <button class="lead-modal__close" type="button" aria-label="Закрыть форму" id="lead-modal-close">
×
</button> <div class="lead-modal__content"> <div class="lead-modal__intro"> <span class="eyebrow">BilimWay International</span> <h2 id="lead-modal-title">Оставьте заявку</h2> <p>Подберём университет и подскажем все следующие шаги поступления.</p> </div> <form class="lead-form" id="lead-form" novalidate> <input type="hidden" name="service" id="lead-service"> <div class="lead-form__grid"> <label class="lead-form__field"> <span>Имя и фамилия *</span> <input type="text" name="name" placeholder="Введите имя" required> <small id="lead-error-name"></small> </label> <label class="lead-form__field"> <span>Гражданство *</span> <input type="text" name="citizenship" placeholder="Например, Туркменистан" required> <small id="lead-error-citizenship"></small> </label> <label class="lead-form__field"> <span>Email *</span> <input type="email" name="email" placeholder="example@mail.com" required> <small id="lead-error-email"></small> </label> <label class="lead-form__field"> <span>Телефон</span> <input type="text" name="phone" placeholder="+375 ..."> <small id="lead-error-phone"></small> </label> <div class="lead-form__field lead-form__field--full"> <span>Интересующий университет</span> <div class="custom-select" id="lead-select"> <input type="hidden" name="targetUniversity" id="lead-select-value"> <button type="button" class="custom-select__trigger" id="lead-select-trigger" aria-expanded="false"> <span id="lead-select-label">Выберите университет</span> <span class="custom-select__arrow"></span> </button> <div class="custom-select__dropdown" id="lead-select-dropdown" hidden> <button type="button" class="custom-select__option" data-value="">
Выберите университет
</button> ${universities.map((uni) => renderTemplate`<button type="button" class="custom-select__option"${addAttribute(uni.name, "data-value")}> ${uni.name} </button>`)} </div> </div> <small id="lead-error-targetUniversity"></small> </div> <label class="lead-form__field lead-form__field--full"> <span>Комментарий</span> <textarea name="comment" rows="3" placeholder="Коротко напишите, что вас интересует"></textarea> <small id="lead-error-comment"></small> </label> </div> <div class="lead-form__actions"> <button type="submit" class="btn btn-secondary" id="lead-submit-button">
Отправить заявку
</button> <p class="lead-form__status" id="lead-form-status"></p> </div> </form> <div class="lead-success" id="lead-success" hidden> <div class="lead-success__icon">✓</div> <h3>Заявка отправлена</h3> <p>Спасибо. Мы скоро свяжемся с вами.</p> <button class="btn btn-primary" type="button" id="lead-success-close">
Закрыть
</button> </div> </div> </div> </div> ${renderScript($$result, "D:/Sir_isleri/sayt/belstudy/site/src/components/LeadModal.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Sir_isleri/sayt/belstudy/site/src/components/LeadModal.astro", void 0);

export { $$BaseLayout as $, $$Header as a, $$Footer as b, $$LeadModal as c, renderScript as r, sanityClient as s };
