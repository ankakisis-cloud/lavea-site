// app/api/lead/route.js
export const runtime = "nodejs";         // обязательно: Node, не Edge
export const dynamic = "force-dynamic";  // не кешировать ответ

import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name = "", phone = "", message = "" } = await req.json();

    // 1) проверяем переменные окружения
    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      LEAD_TO
    } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      return jsonErr("SMTP env vars are missing (HOST/PORT/USER/PASS).", 500);
    }

    // 2) создаём транспортер (Яндекс)
    const port = Number(SMTP_PORT);
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,                // smtp.yandex.ru
      port,                           // 465 (secure) или 587 (starttls)
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS }
      // при 587 можно было бы добавить tls: { ciphers: "TLSv1.2" }
    });

    // 3) отправляем письмо
    const from = `"LAVEA Сайт" <${SMTP_USER}>`;       // у Яндекса from должен совпадать с SMTP_USER
    const to = LEAD_TO || SMTP_USER;                  // куда получать заявки

    const html = `
      <div style="font-family:system-ui,Segoe UI,Roboto,Arial;line-height:1.5">
        <h2>Новая заявка с сайта LAVEA</h2>
        <p><b>Имя:</b> ${escapeHtml(name)}</p>
        <p><b>Телефон:</b> ${escapeHtml(phone)}</p>
        <p><b>Сообщение:</b><br>${escapeHtml(message).replace(/\n/g,"<br>")}</p>
      </div>
    `;

    await transporter.sendMail({
      from,
      to,
      subject: "Новая заявка с сайта LAVEA",
      text: `Имя: ${name}\nТелефон: ${phone}\nСообщение:\n${message}`,
      html
    });

    return jsonOk({ ok: true });
  } catch (e) {
    // вернём понятный текст ошибки на фронт
    return jsonErr(e?.message || "sendMail failed", 500);
  }
}

/* ——— helpers ——— */
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (s) => (
    { "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[s]
  ));
}
function jsonOk(obj, code = 200) {
  return new Response(JSON.stringify(obj), {
    status: code, headers: { "Content-Type": "application/json" }
  });
}
function jsonErr(msg, code = 500) {
  return new Response(JSON.stringify({ ok: false, error: msg }), {
    status: code, headers: { "Content-Type": "application/json" }
  });
}
