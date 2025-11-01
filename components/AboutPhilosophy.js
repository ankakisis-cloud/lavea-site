"use client";

export default function AboutPhilosophy() {
  return (
    <section className="aboutPhilosophy withHeaderOffset" aria-label="Философия LAVEA">
      <div className="aboutPhilosophy__rail" aria-hidden="true"></div>

      <div className="aboutPhilosophy__content">
        <h2>Философия LAVEA</h2>

        <p className="aboutLead">
          Мы создаём не просто интерьеры — мы создаём ощущение покоя. В каждом проекте LAVEA
          есть баланс между инженерной точностью и итальянской чувственностью.
        </p>

        <ul className="aboutPhilosophy__list">
          <li><span>Тишина формы.</span> Пропорции и свет важнее декора.</li>
          <li><span>Инженерная честность.</span> Каждая деталь работает на комфорт.</li>
          <li><span>Долговечная эстетика.</span> Вне трендов — актуально и через годы.</li>
        </ul>

        <div className="aboutPhilosophy__note">LAVEA — гармония инженерии и эмоций.</div>
      </div>
    </section>
  );
}
