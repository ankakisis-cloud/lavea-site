"use client";

export default function HeroAbout() {
  return (
    <section className="aboutHero" role="region" aria-label="О студии LAVEA">
      <div className="aboutHero__bg" />
      <div className="aboutHero__container">
        <div className="aboutHero__content">
          <h1>О студии LAVEA</h1>
          <p>
            Мы создаём пространства, где 3D-визуал совпадает с реальностью.
            Итальянская эстетика, инженерная точность и спокойствие в каждом решении.
          </p>

          <button
            className="btn btn-lavea"
            onClick={() => window.openContactModal?.()}
            aria-label="Получить консультацию"
          >
            Получить консультацию
          </button>

          <div className="aboutHero__tags">
            <span>Точность</span>
            <span>Спокойствие</span>
            <span>Совершенство</span>
          </div>
        </div>

        <div className="aboutHero__media" aria-hidden="true">
          {/* Подставь нужное изображение из /public */}
          <img src="/IMG_9728.jpg" alt="" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
