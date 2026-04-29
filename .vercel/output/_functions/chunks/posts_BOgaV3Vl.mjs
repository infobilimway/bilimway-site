import { s as sanityClient, $ as $$BaseLayout, a as $$Header, b as $$Footer, c as $$LeadModal, r as renderScript } from './LeadModal_BlCvHPUN.mjs';
import { c as createComponent } from './_astro_assets_VsroAdi8.mjs';
import 'piccolore';
import { r as renderComponent, b as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_DB4tVXJJ.mjs';
import { u as urlFor } from './image_CoawgneK.mjs';

const heroPhoto = new Proxy({"src":"/_astro/posts-hero.BW95FD7l.jpg","width":1280,"height":853,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Sir_isleri/sayt/belstudy/site/src/assets/posts-hero.jpg";
							}
							
							return target[name];
						}
					});

const $$Posts = createComponent(async ($$result, $$props, $$slots) => {
  const query = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  excerpt,
  "slug": slug.current,
  publishedAt,
  coverImage,
  category,
  readTime
}`;
  const posts = await sanityClient.fetch(query);
  const featuredPost = posts?.[0] ?? null;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Полезные посты — BilimWay", "description": "Полезные статьи, новости и советы для поступления в университеты Беларуси." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="site-main"> <!-- HERO --> <section class="posts-hero"> <div class="posts-hero__decor" aria-hidden="true"> <div class="posts-hero__blob posts-hero__blob--1"></div> <div class="posts-hero__blob posts-hero__blob--2"></div> <div class="posts-hero__grid"></div> <div class="posts-hero__ring posts-hero__ring--1"></div> <div class="posts-hero__ring posts-hero__ring--2"></div> </div> <div class="container"> <div class="posts-hero__layout"> <div class="posts-hero__content"> <div class="posts-hero__badge posts-reveal"> <span class="posts-hero__badge-dot"></span>
Блог BilimWay
</div> <h1 class="posts-hero__title posts-reveal">
Полезные <span>посты</span><br>
для поступления
</h1> <p class="posts-hero__text posts-reveal">
Советы, новости, разборы документов, жизнь студентов и всё, что поможет вам уверенно поступить в университет Беларуси.
</p> <div class="posts-hero__actions posts-reveal"> <a href="#posts-list" class="btn btn-primary posts-hero__btn">
Смотреть статьи
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <path d="M12 5v14"></path> <path d="M5 12l7 7 7-7"></path> </svg> </a> <button class="btn btn-secondary js-open-lead-modal" type="button">
Получить консультацию
</button> </div> <div class="posts-hero__mini-stats posts-reveal"> <div class="posts-hero__mini-stat"> <strong>${posts.length}</strong> <span>постов</span> </div> <div class="posts-hero__mini-sep"></div> <div class="posts-hero__mini-stat"> <strong>2026</strong> <span>актуально</span> </div> <div class="posts-hero__mini-sep"></div> <div class="posts-hero__mini-stat"> <strong>BilimWay</strong> <span>эксперты</span> </div> </div> </div> <div class="posts-hero__visual posts-reveal"> <div class="posts-hero__photo-wrap"> <div class="posts-hero__photo-glow"></div> <img${addAttribute(heroPhoto.src, "src")} alt="Студенты BilimWay"${addAttribute(heroPhoto.width, "width")}${addAttribute(heroPhoto.height, "height")} loading="eager" decoding="async" class="posts-hero__photo"> <div class="posts-hero__floating-card posts-hero__floating-card--top"> <span class="posts-hero__floating-label">Новые статьи</span> <strong>Поступление 2026</strong> </div> <div class="posts-hero__floating-card posts-hero__floating-card--bottom"> <span class="posts-hero__floating-label">Популярно</span> <strong>Документы и визы</strong> </div> </div> </div> </div> </div> </section> <!-- FEATURED --> ${featuredPost && renderTemplate`<section class="posts-featured"> <div class="container"> <a${addAttribute(`/posts/${featuredPost.slug}`, "href")} class="posts-featured__card posts-reveal"> <div class="posts-featured__media"> ${featuredPost.coverImage ? renderTemplate`<img${addAttribute(urlFor(featuredPost.coverImage).width(1200).height(720).fit("crop").url(), "src")}${addAttribute(featuredPost.title, "alt")} loading="lazy" width="1200" height="720">` : renderTemplate`<div class="posts-featured__stub"> <span>BilimWay Post</span> </div>`} </div> <div class="posts-featured__body"> <span class="posts-featured__eyebrow">Рекомендуем прочитать</span> <h2>${featuredPost.title}</h2> ${featuredPost.excerpt && renderTemplate`<p>${featuredPost.excerpt}</p>`} <div class="posts-featured__meta"> ${featuredPost.category && renderTemplate`<span>${featuredPost.category}</span>`} ${featuredPost.readTime && renderTemplate`<span>${featuredPost.readTime}</span>`} </div> <span class="posts-featured__link">
Читать статью
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <path d="M5 12h14"></path> <path d="M12 5l7 7-7 7"></path> </svg> </span> </div> </a> </div> </section>`} <!-- POSTS GRID --> <section id="posts-list" class="posts-list"> <div class="container"> <div class="posts-list__head posts-reveal"> <span class="posts-list__eyebrow">Все материалы</span> <h2 class="posts-list__title">Последние посты</h2> <p class="posts-list__sub">
Подборка актуальных статей и советов для абитуриентов.
</p> </div> ${posts.length > 0 ? renderTemplate`<div class="posts-grid"> ${posts.map((post, index) => renderTemplate`<article class="post-card posts-reveal"${addAttribute(`--reveal-delay:${index * 0.08}s;`, "style")}> <a${addAttribute(`/posts/${post.slug}`, "href")} class="post-card__media"> ${post.coverImage ? renderTemplate`<img${addAttribute(urlFor(post.coverImage).width(900).height(560).fit("crop").url(), "src")}${addAttribute(post.title, "alt")} loading="lazy" width="900" height="560">` : renderTemplate`<div class="post-card__stub"> <span>${post.category || "Post"}</span> </div>`} </a> <div class="post-card__body"> <div class="post-card__meta"> ${post.category && renderTemplate`<span>${post.category}</span>`} ${post.readTime && renderTemplate`<span>${post.readTime}</span>`} </div> <h3 class="post-card__title"> <a${addAttribute(`/posts/${post.slug}`, "href")}>${post.title}</a> </h3> ${post.excerpt && renderTemplate`<p class="post-card__excerpt">${post.excerpt}</p>`} <a${addAttribute(`/posts/${post.slug}`, "href")} class="post-card__link">
Читать подробнее
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"> <path d="M5 12h14"></path> <path d="M12 5l7 7-7 7"></path> </svg> </a> </div> </article>`)} </div>` : renderTemplate`<div class="posts-empty posts-reveal"> <p>Посты скоро появятся. Сейчас вы можете получить консультацию у BilimWay.</p> <button class="btn btn-primary js-open-lead-modal" type="button">Связаться с нами</button> </div>`} </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ${renderComponent($$result2, "LeadModal", $$LeadModal, {})} ${renderScript($$result2, "D:/Sir_isleri/sayt/belstudy/site/src/pages/posts.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "D:/Sir_isleri/sayt/belstudy/site/src/pages/posts.astro", void 0);

const $$file = "D:/Sir_isleri/sayt/belstudy/site/src/pages/posts.astro";
const $$url = "/posts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Posts,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
