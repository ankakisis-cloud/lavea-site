"use client";

export default function HeroAbout() {
  return (
    <section className="heroAbout" role="region" aria-label="О студии LAVEA">
      <div className="heroAbout__inner">
        <div className="heroAbout__text">
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
        </div>

        {/* Правая часть — фоновой рендер */}
        <div className="heroAbout__media" aria-hidden="true" />
      </div>
    </section>
  );
}
