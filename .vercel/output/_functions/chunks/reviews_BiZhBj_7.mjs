import { createClient } from '@sanity/client';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const projectId = "3ye18fdx";
    const dataset = "production";
    const sanityToken = "skDkS2MYModLVRR4RMm84c0XhBEE9V0KsNHLI3c4lnioDIplclZyou1JNtZiVGT6NA5tD62hCcq3S2txJF3dIoxAR1nFG0slxkz1YaGoYwoUtdIYrkgm5Trt6xkSb86xyOUHBJaTnu7lbnJlviEzkRBAVBAd0FBGVxu7Fdzj7vNiqVsVHmo6";
    const apiVersion = "2026-03-01";
    if (!projectId) ;
    if (!sanityToken) ;
    const sanity = createClient({
      projectId,
      dataset,
      apiVersion,
      token: sanityToken,
      useCdn: false
    });
    const body = await request.json();
    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const role = String(body?.role || "").trim();
    const message = String(body?.message || "").trim();
    const rating = Number(body?.rating);
    const approve = body?.approve === true;
    if (!name || name.length < 2) {
      return new Response(
        JSON.stringify({ ok: false, message: "Введите корректное имя." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return new Response(
        JSON.stringify({ ok: false, message: "Введите корректный e-mail." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    if (!message || message.length < 10) {
      return new Response(
        JSON.stringify({ ok: false, message: "Отзыв слишком короткий." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
      return new Response(
        JSON.stringify({ ok: false, message: "Выберите оценку от 1 до 5." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    if (!approve) {
      return new Response(
        JSON.stringify({
          ok: false,
          message: "Нужно согласие на обработку данных."
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const created = await sanity.create({
      _type: "review",
      name,
      email,
      role,
      rating,
      message,
      approved: false,
      submittedAt: (/* @__PURE__ */ new Date()).toISOString()
    });
    return new Response(
      JSON.stringify({ ok: true, id: created._id }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Ошибка при создании отзыва:", error);
    return new Response(
      JSON.stringify({
        ok: false,
        message: error?.message || "Ошибка сервера при сохранении.",
        details: error?.response?.body || null
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
