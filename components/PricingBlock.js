"use client";
import React from "react";

export default function PricingBlock() {
  const items = [
    {
      title: "Авторская концепция",
      desc:
        "Уникальная идея и визуальное видение интерьера. Реализацию берёте на себя или делаем совместно.",
      price: "от 6 000 ₽ / м²",
      cta: "Обсудить проект",
    },
    {
      title: "Полный дизайн-проект",
      desc:
        "Полный пакет чертежей и спецификаций, чтобы строители реализовали интерьер без ошибок.",
      price: "от 7 000 ₽ / м²",
      cta: "Обсудить проект",
    },
    {
      title: "Дизайн + Авторский надзор",
      desc:
        "Контроль реализации задуманного. Фикс или почасовой формат — обсуждается отдельно.",
      price: "от 9 000 ₽ / м² + авторский надзор",
      cta: "Обсудить проект",
    },
    {
      title: "Дизайн + комплектация под ключ",
      desc:
        "Готовое пространство: мебель, свет, декор. Полная логистика и сопровождение.",
      price: "от 10 000 ₽ / м² + % от комплектации",
      cta: "Обсудить проект",
    },
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="wrap">
        <h2 className="heading">Цены</h2>

        <div className="grid">
          {items.map((it, i) => (
            <article key={i} className="card">
              <div className="cardTop">
                <h3 className="title">{it.title}</h3>
                <p className="desc">{it.desc}</p>
              </div>

              <div className="cardBottom">
                <div className="price">{it.price}</div>
                <button className="btn" onClick={() => (window.openContactModal?.(), null)}>
                  {it.cta}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .pricing { width:100%; padding:80px 0; background:#fff; }
        .wrap { max-width:1180px; margin:0 auto; padding:0 24px; }
        .heading { font-size:36px; line-height:1.2; font-weight:700; margin:0 0 36px; letter-spacing:-0.02em; }

        /* 4 карточки в ряд, адаптив вниз до 1 */
        .grid { display:grid; grid-template-columns:repeat(4,1fr); gap:24px; }

        .card {
          display:flex; flex-direction:column; justify-content:space-between;
          background:#fff; border:1px solid #e8e8e8; border-radius:16px; padding:20px;
          box-shadow:0 2px 10px rgba(0,0,0,.04);
          transition:transform .22s ease, box-shadow .22s ease, border-color .22s ease;
        }
        .card:hover { transform:translateY(-2px); box-shadow:0 10px 28px rgba(0,0,0,.08); border-color:#ddd; }

        .title { font-size:20px; font-weight:700; margin:0 0 10px; }
        .desc { color:#666; font-size:14px; line-height:1.6; margin:0; }
        .cardBottom { margin-top:18px; }
        .price { font-weight:700; font-size:16px; margin:0 0 14px; }
        .btn {
          width:100%; border:0; border-radius:12px; padding:12px 16px;
          background:#000; color:#fff; font-weight:600; font-size:14px; cursor:pointer;
          transition:background .18s ease, transform .12s ease;
        }
        .btn:hover { background:#1a1a1a; }
        .btn:active { transform:translateY(1px); }

        @media (max-width:1200px){ .grid{ grid-template-columns:repeat(3,1fr);} }
        @media (max-width:900px){ .grid{ grid-template-columns:repeat(2,1fr);} }
        @media (max-width:560px){
          .wrap{ padding:0 16px; }
          .heading{ font-size:30px; margin-bottom:24px; }
          .grid{ grid-template-columns:1fr; gap:16px; }
          .card{ border-radius:14px; padding:18px; }
        }
      `}</style>
    </section>
  );
}
