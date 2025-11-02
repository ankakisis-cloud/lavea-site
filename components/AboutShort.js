"use client";

import Link from "next/link";

export default function AboutShort() {
  return (
    <section className="aboutShort" id="about">
      <div className="aboutShort__inner">
        <div className="aboutShort__text">
          <div className="kicker">О студии</div>
          <h2 className="aboutShort__title">Интерьеры с любовью к деталям</h2>
          <p className="aboutShort__lead">
            LAVEA создаёт индивидуальные пространства для жизни и вдохновения: от концепции до комплектации и авторского надзора.
          </p>
          <ul className="aboutShort__list">
            <li>Современная итальянская классика и премиальные материалы</li>
            <li>Продуманные планировки и эргономика</li>
            <li>Поставки мебели, света, декора</li>
          </ul>
          <div className="aboutShort__actions">
            <Link className="goldBtn" href="/about">Подробнее</Link>
          </div>
        </div>

        <div className="aboutShort__media">
          <img src="/about/preview.jpg" alt="LAVEA — о студии" />
        </div>
      </div>
    </section>
  );
}
