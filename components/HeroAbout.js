"use client";

export default function HeroAbout() {
  return (
    <section className="heroAbout" role="region" aria-label="О студии LAVEA">
      <div className="heroAbout__bg" />
      <div className="heroAbout__container">
        <div className="heroAbout__content">
          <h1>О студии LAVEA</h1>
          <p>
            Мы создаём пространства, где 3D-визуал совпадает с реальностью.
            Итальянская эстетика, инженерная точность и спокойствие в каждом решении.
          </p>
          <button
            className="btn btn-lavea"
            onClick={() => window.openContactModal?.()}
          >
            Получить консультацию
          </button>
          <div className="heroAbout__mantra">
            Точность • Спокойствие • Совершенство
          </div>
        </div>

        <div className="heroAbout__image" aria-hidden="true" />
      </div>
    </section>
  );
}
