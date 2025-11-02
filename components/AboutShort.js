// components/AboutShort.js
"use client";
import Link from "next/link";

export default function AboutShort() {
  const stats = [
    { num: "8", label: "лет работы" },
    { num: "120+", label: "реализованных проектов" },
    { num: "17", label: "городов" },
    { num: "98%", label: "довольных клиентов" },
  ];

  return (
    <section className="aboutShort" aria-label="О студии LAVEA — кратко">
      <div className="aboutShort__inner">
        {/* Текстовая колонка */}
        <div className="aboutShort__text">
          <p className="kicker">Студия премиального интерьера</p>
          <h2>О нас</h2>

          <p className="aboutShort__lead">
            LAVEA — студия премиального дизайна интерьеров.
            Создаём пространства, где 3D-визуал совпадает с реальностью.
            Итальянская эстетика, инженерная точность и спокойствие в каждом решении.
          </p>

          <ul className="aboutShort__list">
            <li>Технический аудит каждого проекта</li>
            <li>Авторский надзор и ежедневный контроль качества</li>
            <li>Прозрачные сметы и единая точка общения</li>
          </ul>

          <div className="aboutShort__actions">
            <Link href="/about" prefetch={false} className="btn btn-lavea">
              Подробнее
            </Link>
          </div>
        </div>

        {/* Медиа справа */}
        <div className="aboutShort__media" aria-hidden="true">
          {/* Замени при необходимости путь на своё изображение из /public */}
          <img src="/IMG_9728.jpg" alt="" loading="lazy" />
        </div>
      </div>

      {/* Премиальная статистика в виде кружков */}
      <div className="aboutStatsLavea" aria-label="Ключевые показатели LAVEA">
        <div className="aboutStatsLavea__inner">
          {stats.map((item, i) => (
            <div className="aboutStatsLavea__item" key={i}>
              <span className="aboutStatsLavea__circle">
                <span className="aboutStatsLavea__num">{item.num}</span>
              </span>
              <div className="aboutStatsLavea__label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
