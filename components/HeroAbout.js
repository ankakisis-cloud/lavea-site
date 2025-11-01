"use client";

export default function HeroAbout() {
  return (
    <section className="heroAbout" role="region" aria-label="О студии LAVEA">
      <div className="heroAbout__inner">
        <div className="heroAbout__card">
          <h1 className="h1-hero">
            О студии LAVEA
            <span className="h1-underline" aria-hidden="true" />
          </h1>

          <p className="lead">
            Мы создаём пространства, где 3D-визуал совпадает с реальностью.
            Итальянская эстетика, инженерная точность и спокойствие в каждом решении.
          </p>

          <div className="heroAbout__cta">
            <button
              className="btn btn-lavea"
              onClick={() => window.openContactModal?.()}
            >
              Получить консультацию
            </button>
          </div>

          <div className="mantra">
            <span>Точность</span>
            <i aria-hidden="true">•</i>
            <span>Спокойствие</span>
            <i aria-hidden="true">•</i>
            <span>Совершенство</span>
          </div>
        </div>

        {/* Правая сцена — фоновой рендер */}
        <div className="heroAbout__media" aria-hidden="true" />
      </div>
    </section>
  );
}
