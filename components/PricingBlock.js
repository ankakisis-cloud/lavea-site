"use client";

import ConsultBtn from "./ConsultBtn";

const plans = [
  {
    title: "Авторская концепция",
    desc: "Уникальная идея и визуальное видение интерьера. Реализацию берёте на себя или делаем совместно.",
    price: "от 6 000 ₽ / м²",
    popular: false,
  },
  {
    title: "Полный дизайн-проект",
    desc: "Полный пакет чертежей и спецификаций, чтобы строители реализовали интерьер без ошибок.",
    price: "от 7 000 ₽ / м²",
    popular: true, // золотая рамка + бейдж
  },
  {
    title: "Дизайн + Авторский надзор",
    desc: "Контроль реализации задуманного. Фикс или почасовой формат — обсуждается отдельно.",
    price: "от 9 000 ₽ / м² + авторский надзор",
    popular: false,
  },
  {
    title: "Дизайн + комплектация под ключ",
    desc: "Готовое пространство: мебель, свет, декор. Полная логистика и сопровождение.",
    price: "от 10 000 ₽ / м² + % от комплектации",
    popular: false,
  },
];

export default function PricingBlock() {
  return (
    <section id="pricing" className="pricingBlock" aria-label="Цены">
      <div className="pricingBlock__inner">
        <h2 className="h2">Цены</h2>

        <div className="pricingGrid">
          {plans.map((p, i) => (
            <article key={i} className={`priceCard ${p.popular ? "is-popular" : ""}`}>
              {p.popular && <div className="priceCard__tag">Популярный тариф</div>}
              <h3>{p.title}</h3>
              <p className="priceCard__desc">{p.desc}</p>
              <div className="priceCard__price">{p.price}</div>
            </article>
          ))}
        </div>

        {/* одна общая кнопка под блоком */}
        <div className="pricingCTA">
          <ConsultBtn className="goldBtn">Обсудить проект</ConsultBtn>
        </div>
      </div>
    </section>
  );
}
