import type { APIRoute } from 'astro'
import { createClient } from '@sanity/client'

export const prerender = false

const sanityProjectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID
const sanityDataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production'
const sanityToken = import.meta.env.SANITY_API_WRITE_TOKEN
const googleScriptUrl = import.meta.env.GOOGLE_SCRIPT_WEBAPP_URL

const sanityWriteClient =
  sanityProjectId && sanityToken
    ? createClient({
        projectId: sanityProjectId,
        dataset: sanityDataset,
        apiVersion: '2025-01-01',
        token: sanityToken,
        useCdn: false,
      })
    : null

export const POST: APIRoute = async ({ request }) => {
  try {
    let body: Record<string, unknown> = {}

    try {
      body = await request.json()
    } catch {
      return new Response(JSON.stringify({ ok: false, message: 'Некорректный JSON' }), { status: 400 })
    }

    const name = String(body.name || '').trim()
    const citizenship = String(body.citizenship || '').trim()
    const email = String(body.email || '').trim()
    const phone = String(body.phone || '').trim()
    const targetUniversity = String(body.targetUniversity || body.university || '').trim()
    const comment = String(body.comment || body.message || '').trim()
    const sourcePage = String(body.sourcePage || body.page || '').trim()

    if (!name || !citizenship || !email) {
      return new Response(JSON.stringify({ ok: false, message: 'Заполните обязательные поля' }), { status: 400 })
    }

    const submittedAt = new Date().toISOString()

    // 1. Отправка в Google Apps Script (Таблица + Telegram)
    if (googleScriptUrl) {
      await fetch(googleScriptUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          citizenship,
          phone,
          email,
          university: targetUniversity,
          comment,
          page: sourcePage
        }),
      }).catch(err => console.error("Google Script Error:", err))
    }

    // 2. Сохранение в Sanity
    if (sanityWriteClient) {
      await sanityWriteClient.create({
        _type: 'lead',
        name,
        citizenship,
        email,
        phone,
        university: targetUniversity,
        message: comment,
        sourcePage,
        submittedAt,
        status: 'new',
      }).catch(err => console.error("Sanity Error:", err))
    }

    return new Response(JSON.stringify({ ok: true, message: 'Заявка отправлена' }), { status: 200 })
  } catch (error) {
    return new Response(JSON.stringify({ ok: false, message: 'Внутренняя ошибка сервера' }), { status: 500 })
  }
}