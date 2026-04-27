export const prerender = false;

import type { APIRoute } from "astro";
import { createClient } from "@sanity/client";

export const POST: APIRoute = async ({ request }) => {
  try {
    const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
    const dataset = import.meta.env.PUBLIC_SANITY_DATASET || "production";
    const sanityToken = import.meta.env.SANITY_API_WRITE_TOKEN;
    const apiVersion = import.meta.env.SANITY_API_VERSION || "2026-03-01";

    if (!projectId) {
      console.error("PUBLIC_SANITY_PROJECT_ID отсутствует в .env");
      return new Response(
        JSON.stringify({ ok: false, message: "Ошибка конфигурации сервера (projectId)." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!sanityToken) {
      console.error("SANITY_API_WRITE_TOKEN отсутствует в .env");
      return new Response(
        JSON.stringify({ ok: false, message: "Ошибка конфигурации сервера (token)." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const sanity = createClient({
      projectId,
      dataset,
      apiVersion,
      token: sanityToken,
      useCdn: false,
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
          message: "Нужно согласие на обработку данных.",
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
      submittedAt: new Date().toISOString(),
    });

    return new Response(
      JSON.stringify({ ok: true, id: created._id }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("Ошибка при создании отзыва:", error);

    return new Response(
      JSON.stringify({
        ok: false,
        message: error?.message || "Ошибка сервера при сохранении.",
        details: error?.response?.body || null,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};