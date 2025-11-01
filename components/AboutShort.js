"use client";
import Link from "next/link";

export default function AboutShort() {
  return (
    <section className="aboutShort" aria-label="О студии LAVEA — кратко">
      <div className="aboutShort__inner">
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
            <Link href="/about" className="btn btn-lavea">Подробнее</Link>
          </div>
        </div>

        <div className="aboutShort__media" aria-hidden="true">
          <img src="/IMG_9728.jpg" alt="" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
