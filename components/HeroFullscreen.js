"use client";

import ConsultBtn from "./ConsultBtn";

export default function HeroFullscreen() {
  const bg = "/hero/IMG_9732.jpg"; // твой фон

  return (
    <section className="heroFs">
      <div className="heroFs__bg" style={{ backgroundImage: `url(${bg})` }} />
      <div className="heroFs__content wrap">
        <h1 className="heroTitle">LAVEA — премиальная студия интерьерного дизайна</h1>
        <p className="heroLead">
          Создаём личные миры: от концепции и 3D-визуализаций до комплектации и авторского надзора.
        </p>

        {/* >>> ЭТОТ БЛОК КНОПОК <<< */}
        <div className="heroActions">
          <a href="/#portfolio" className="goldBtn heroBtn">Портфолио</a>
          <ConsultBtn className="goldBtn heroBtn">Связаться</ConsultBtn>
        </div>
      </div>

      <style jsx>{`
        .heroFs{ position:relative; height: min(84vh, 920px); border-radius:28px; overflow:hidden; margin: 16px; }
        .heroFs__bg{ position:absolute; inset:0; background-size:cover; background-position:center; filter:brightness(.72); }

        .heroFs__content{
          position:relative; z-index:2; height:100%;
          display:flex; flex-direction:column; justify-content:center; gap:16px; color:#fff;
          text-shadow: 0 2px 24px rgba(0,0,0,.35);
        }

        /* Растягиваем контейнер, заголовок и подзаголовок */
        .heroFs__content.wrap{ max-width:100% !important; padding-left:24px; padding-right:24px; }
        .heroTitle{ font-family: var(--font-heading, Prata, serif); font-weight:400; line-height:1.1;
          font-size: clamp(32px, 4.6vw, 64px); margin:0; max-width:none !important; }
        .heroLead{ max-width:none !important; line-height:1.7; margin:0 0 8px; }

        .heroActions{ display:flex; gap:12px; flex-wrap:wrap; }

        /* ЛОКАЛЬНЫЙ стиль для обеих кнопок героя — как «Связаться» */
        .heroBtn{
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
        .heroBtn:hover{
          color:#fff !important;
          background: linear-gradient(90deg, #E8C980 0%, #C7A251 100%) !important;
          border-color:#C7A251 !important;
        }
      `}</style>
    </section>
  );
}
