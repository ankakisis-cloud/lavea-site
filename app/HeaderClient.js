// app/HeaderClient.js
"use client";

import ConsultBtn from "../components/ConsultBtn";

export default function HeaderClient() {
  return (
    <>
      <header className="site-header">
        <div className="header-wrap">
          {/* ЛОГО СЛЕВА */}
          <div className="logoBlock">
            <a href="/" className="lavea-logo">LAVEA</a>
            <span className="logoTagline">ИНТЕРЬЕР С ЛЮБОВЬЮ К ДЕТАЛЯМ</span>
          </div>

          {/* МЕНЮ ПО ЦЕНТРУ */}
          <nav className="nav-center" aria-label="Основная навигация">
            <a href="#portfolio" className="header_link">Портфолио</a>
            <a href="#pricing"   className="header_link">Цены</a>
            <a href="#about"     className="header_link">О нас</a>
            <a href="#process"   className="header_link">Процесс</a>
            <a href="#contacts"  className="header_link">Контакты</a>
          </nav>

          {/* КНОПКА СПРАВА */}
          <div className="actions">
            <ConsultBtn className="nav-cta">Написать</ConsultBtn>
          </div>
        </div>
      </header>

      {/* ===== СТИЛИ ШАПКИ ===== */}
      <style jsx>{`
        .site-header{
          position: fixed;
          top: 0; left: 0;
          width: 100%;
          height: 80px;
          z-index: 10000;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          background: rgba(17,17,17,0.25);
          border-bottom: 1px solid rgba(255,255,255,0.14);
          box-shadow: 0 8px 24px rgba(0,0,0,.06);
        }

        /* трёхколоночная сетка: слева лого, центр — нав, справа — кнопка */
        .header-wrap{
          background: transparent !important;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 28px;
          height: 100%;
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          column-gap: 16px;
        }

        /* ====== ЛОГО И ПОДПИСЬ ====== */
        .logoBlock{
          justify-self: start;
          display: flex;
          flex-direction: column;
          line-height: 1;
        }
        .lavea-logo{
          font-family: var(--font-heading, "Prata", serif);
          font-size: 28px;
          font-weight: 600;
          letter-spacing: .04em;
          color: #fff;
          text-decoration: none;
          transition: color .3s ease, text-shadow .3s ease;
        }
        .lavea-logo:hover{
          color: #E8C980;                        /* золото LAVEA */
          text-shadow: 0 0 14px rgba(199,162,81,.8);
        }
        .logoTagline{
          margin-top: 6px;
          font-family: var(--font-heading, "Prata", serif);
          font-size: 11px;
          letter-spacing: .22em;
          color: rgba(232,201,128,.95);          /* тёплое золото без фона */
          white-space: nowrap;
        }

        /* ====== МЕНЮ ====== */
        .nav-center{
          justify-self: center;
          display: flex;
          gap: 26px;
          align-items: center;
        }
        .header_link{
          font-family: var(--font-heading, "Prata", serif);
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          font-size: 16px;
          letter-spacing: .03em;
          white-space: nowrap;
          transition: color .25s ease;
        }
        .header_link:hover{ color: #E8C980; }

        /* ====== КНОПКА СПРАВА ====== */
        .actions{
          justify-self: end;
          display: flex;
          align-items: center;
        }

        /* Перекрываем внутренние стили ConsultBtn, чтобы было «как в LAVEA» */
        .actions :global(button),
        .nav-cta :global(button),
        .nav-cta{
          font-family: var(--font-heading, "Prata", serif) !important;
          background: linear-gradient(90deg,#E8C980 0%, #C7A251 100%) !important;
          color: #fff !important;
          border: none !important;
          padding: 12px 28px !important;
          border-radius: 100px !important;
          font-size: 16px !important;
          font-weight: 600 !important;
          cursor: pointer !important;
          box-shadow: 0 0 0 rgba(0,0,0,0) !important;
          transition: transform .25s ease, box-shadow .25s ease, filter .25s ease !important;
        }
        .actions :global(button:hover),
        .nav-cta:hover{
          transform: translateY(-1px) scale(1.05) !important;
          box-shadow: 0 0 20px rgba(199,162,81,.6) !important;
          filter: brightness(1.03) !important;
        }

        @media (max-width: 900px){
          .nav-center{ display: none; }
          .header-wrap{ padding: 0 18px; grid-template-columns: auto 1fr; }
        }
      `}</style>

      {/* Отступ, чтобы контент не залезал под фиксированный header */}
      <style jsx global>{`
        body { padding-top: 80px; }
      `}</style>
    </>
  );
}
