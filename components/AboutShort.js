"use client";

import Link from "next/link";

export default function AboutShort() {
  return (
    <section className="aboutShort" aria-label="О студии LAVEA — кратко">
      <div className="aboutShort__inner">
        {/* Левая колонка: текст */}
        <div className="aboutShort__text">
          <div className="kicker">СТУДИЯ ПРЕМИАЛЬНОГО ИНТЕРЬЕРА</div>
          <h2 className="aboutShort__title">О нас</h2>

          <p className="aboutShort__lead">
            LAVEA — студия премиального дизайна интерьеров. Создаём
            пространства, где 3D-визуал совпадает с реальностью. Итальянская
            эстетика, инженерная точность и спокойствие в каждом решении.
          </p>

          <ul className="aboutShort__list">
            <li>Технический аудит каждого проекта</li>
            <li>Авторский надзор и ежедневный контроль качества</li>
            <li>Прозрачные сметы и единая точка общения</li>
          </ul>

          <div className="aboutShort__actions">
            <Link href="/about" className="btn btn-lavea">Подробнее</Link>
          </div>
        </div>

        {/* Правая колонка: изображение */}
        <div className="aboutShort__media" aria-hidden="true">
          <img src="/IMG_9728.jpg" alt="" loading="lazy" />
        </div>
      </div>

      {/* Статистика — во всю ту же ширину контейнера, что и Портфолио */}
      <div className="aboutStatsLavea" aria-label="Статистика LAVEA">
        <div className="aboutStatsLavea__inner">
          {[
            { num: "8",    label: "лет работы" },
            { num: "120+", label: "реализованных проектов" },
            { num: "17",   label: "городов" },
            { num: "98%",  label: "довольных клиентов" },
          ].map((it, i) => (
            <div className="aboutStatsLavea__item" key={i}>
              <span className="aboutStatsLavea__circle">
                <span className="aboutStatsLavea__num">{it.num}</span>
              </span>
              <div className="aboutStatsLavea__label">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
