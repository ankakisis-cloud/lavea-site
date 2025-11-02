export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name = "", phone = "", message = "" } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.yandex.com",
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: {
        user: process.env.SMTP_USER, // напр. laveastudio@yandex.ru
        pass: process.env.SMTP_PASS, // пароль приложения Яндекс.Почты
      },
    });

    const to = process.env.LEAD_TO || "laveastudio@yandex.ru";

    await transporter.sendMail({
      from: `"LAVEA Сайт" <${process.env.SMTP_USER}>`,
      to,
      subject: "Новая заявка с сайта LAVEA",
      text: `Имя: ${name}\nТелефон: ${phone}\nСообщение: ${message}`,
      html: `
        <div style="font-family:system-ui,Segoe UI,Roboto,Arial">
          <h2>Новая заявка с сайта LAVEA</h2>
          <p><b>Имя:</b> ${escapeHtml(name)}</p>
          <p><b>Телефон:</b> ${escapeHtml(phone)}</p>
          <p><b>Сообщение:</b> ${escapeHtml(message)}</p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ ok: false }), { status: 500 });
  }
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
}
