import { createClient } from '@sanity/client';

const prerender = false;
const sanityProjectId = "3ye18fdx";
const sanityDataset = "production";
const sanityToken = "skDkS2MYModLVRR4RMm84c0XhBEE9V0KsNHLI3c4lnioDIplclZyou1JNtZiVGT6NA5tD62hCcq3S2txJF3dIoxAR1nFG0slxkz1YaGoYwoUtdIYrkgm5Trt6xkSb86xyOUHBJaTnu7lbnJlviEzkRBAVBAd0FBGVxu7Fdzj7vNiqVsVHmo6";
const googleScriptUrl = "https://script.google.com/macros/s/AKfycbwY9qLoYqkUW893O7emEsuMKdA_W7v9RfqjNnp06He2A_qz5iit-FmIqlAuSQpO22u8/exec";
const sanityWriteClient = createClient({
  projectId: sanityProjectId,
  dataset: sanityDataset,
  apiVersion: "2025-01-01",
  token: sanityToken,
  useCdn: false
}) ;
const POST = async ({ request }) => {
  try {
    let body = {};
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ ok: false, message: "Некорректный JSON" }), { status: 400 });
    }
    const name = String(body.name || "").trim();
    const citizenship = String(body.citizenship || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const targetUniversity = String(body.targetUniversity || body.university || "").trim();
    const comment = String(body.comment || body.message || "").trim();
    const sourcePage = String(body.sourcePage || body.page || "").trim();
    if (!name || !citizenship || !email) {
      return new Response(JSON.stringify({ ok: false, message: "Заполните обязательные поля" }), { status: 400 });
    }
    const submittedAt = (/* @__PURE__ */ new Date()).toISOString();
    if (googleScriptUrl) {
      await fetch(googleScriptUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          citizenship,
          phone,
          email,
          university: targetUniversity,
          comment,
          page: sourcePage
        })
      }).catch((err) => console.error("Google Script Error:", err));
    }
    if (sanityWriteClient) {
      await sanityWriteClient.create({
        _type: "lead",
        name,
        citizenship,
        email,
        phone,
        university: targetUniversity,
        message: comment,
        sourcePage,
        submittedAt,
        status: "new"
      }).catch((err) => console.error("Sanity Error:", err));
    }
    return new Response(JSON.stringify({ ok: true, message: "Заявка отправлена" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ ok: false, message: "Внутренняя ошибка сервера" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
