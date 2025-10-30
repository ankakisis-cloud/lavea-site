"use client";

export default function PricingBlock() {
  const plans = [
    {
      title: "Авторская концепция",
      desc:
        "Уникальная идея и визуальное видение интерьера. Реализацию берёте на себя или делаем совместно.",
      price: "от 6 000 ₽ / м²",
      cta: "Обсудить проект",
      featured: false,
    },
    {
      title: "Полный дизайн-проект",
      desc:
        "Полный пакет чертежей и спецификаций, чтобы строители реализовали интерьер без ошибок.",
      price: "от 7 000 ₽ / м²",
      cta: "Обсудить проект",
      featured: true, // ← популярный тариф
      badge: "Популярный тариф",
    },
    {
      title: "Дизайн + Авторский надзор",
      desc:
        "Контроль реализации задуманного. Фикс или почасовой формат — обсуждается отдельно.",
      price: "от 9 000 ₽ / м² + авторский надзор",
      cta: "Обсудить проект",
      featured: false,
    },
    {
      title: "Дизайн + комплектация под ключ",
      desc:
        "Готовое пространство: мебель, свет, декор. Полная логистика и сопровождение.",
      price: "от 10 000 ₽ / м² + % от комплектации",
      cta: "Обсудить проект",
      featured: false,
    },
  ];

  return (
    <section className="wrap" id="pricing">
      <h2 className="title">Цены</h2>

      <div className="grid">
        {plans.map((p, i) => (
          <article
            key={i}
            className={`card ${p.featured ? "cardFeatured" : ""}`}
          >
            {p.featured && (
              <div className="badge">
                <span>{p.badge}</span>
              </div>
            )}

            <h3 className="cardTitle">{p.title}</h3>
            <p className="cardDesc">{p.desc}</p>
            <div className="cardPrice">{p.price}</div>

            <button className="cardBtn" type="button">
              {p.cta}
            </button>
          </article>
        ))}
      </div>

      <style jsx>{`
        .wrap {
          max-width: 1440px;
          margin: 0 auto;
          padding: 40px 12px 12px;
        }

        .title {
          font-size: 44px;
          font-weight: 700;
          line-height: 1.05;
          margin: 0 0 22px;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }
        @media (min-width: 880px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1200px) {
          .grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .card {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 14px;
          border-radius: 16px;
          border: 1px solid #e9e9ec;
          background: #fff;
          padding: 28px 22px;
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.06);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          min-height: 320px; /* ← чуть вытянуты вниз */
        }

        .card:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.09);
        }

        .cardFeatured {
          border: 1.5px solid #c8a96a;
          box-shadow: 0 12px 36px rgba(200, 169, 106, 0.18);
        }

        .badge {
          position: absolute;
          top: -12px;
          left: 18px;
          background: #fff;
          border-radius: 999px;
          padding: 4px;
          border: 1px solid rgba(200, 169, 106, 0.35);
        }
        .badge span {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 999px;
          background: linear-gradient(180deg, #e8d7ae 0%, #c8a96a 100%);
          color: #fff;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.3px;
          box-shadow: 0 4px 12px rgba(200, 169, 106, 0.35);
          white-space: nowrap;
        }

        .cardTitle {
          font-size: 20px;
          font-weight: 700;
          margin: 4px 0 0;
        }

        .cardDesc {
          margin: 0;
          color: #4a4a4a;
          line-height: 1.55;
          font-size: 14px;
          flex-grow: 1;
        }

        .cardPrice {
          margin-top: auto;
          font-weight: 800;
          font-size: 16px;
          letter-spacing: 0.2px;
        }

        .cardBtn {
          margin-top: 10px;
          height: 46px;
          border-radius: 12px;
          width: 100%;
          background: #111;
          color: #fff;
          border: none;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.1s ease, box-shadow 0.2s ease, background 0.2s ease;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
        }

        .cardBtn:hover {
          background: #1a1a1a;
          box-shadow: 0 10px 26px rgba(0, 0, 0, 0.26);
          transform: translateY(-1px);
        }

        .cardBtn:active {
          transform: translateY(1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);
        }
      `}</style>
    </section>
  );
}
