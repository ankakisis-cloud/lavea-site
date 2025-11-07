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
            LAVEA создаёт индивидуальные пространства от авторской концепции до комплектации и авторского надзора.
          </p>
          <ul className="aboutShort__list">
            <li>Современная итальянская классика, премиальные материалы</li>
            <li>Продуманные планировки, инженерная точность</li>
            <li>Поставки мебели, света и декора</li>
          </ul>
          <div className="aboutShort__actions">
            <Link href="/about" className="goldBtn">Подробнее</Link>
    <style jsx>{`
  .aboutShort__actions :global(.goldBtn){
    background: transparent !important;
    border: 1px solid #111 !important;
    color: #111 !important;
    padding: 10px 26px !important;
    border-radius: 100px !important;
    font-size: 15px !important;
    font-weight: 400 !important;
    box-shadow: none !important;
    transition: all .25s ease !important;
  }
  .aboutShort__actions :global(.goldBtn:hover){
    color:#fff !important;
    background: linear-gradient(90deg, #E8C980 0%, #C7A251 100%) !important;
    border-color:#C7A251 !important;
  }
`}</style>

          </div>
        </div>

        <div className="aboutShort__media">
          {/* ВАЖНО: файл в корне /public */}
          <img src="/about-philosophy.jpg" alt="LAVEA — о студии" />
        </div>
      </div>
  <style jsx>{`
  .aboutShort__actions :global(.goldBtn){
    background: transparent !important;
    border: 1px solid #111 !important;
    color: #111 !important;
    padding: 10px 26px !important;
    border-radius: 100px !important;
    font-size: 15px !important;
    font-weight: 400 !important;
    box-shadow: none !important;
    transition: all .25s ease !important;
  }
  .aboutShort__actions :global(.goldBtn:hover){
    color:#fff !important;
    background: linear-gradient(90deg, #E8C980 0%, #C7A251 100%) !important;
    border-color:#C7A251 !important;
  }
`}</style>

    </section>
  );
}
