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
            <a href="#pricing" className="header_link">Цены</a>
            <a href="#about" className="header_link">О нас</a>
            <a href="#process" className="header_link">Процесс</a>
            <a href="#contacts" className="header_link">Контакты</a>
          </nav>

          {/* КНОПКА СПРАВА */}
          <div className="actions">
            <ConsultBtn className="nav-cta">Написать</ConsultBtn>
          </div>
        </div>
      </header>

      {/* ====== СТИЛИ ШАПКИ ====== */}
      <style jsx>{`
        /* ===== HEADER ===== */
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 80px;
          z-index: 10000;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          background: rgba(255, 255, 255, 0.4); /* лёгкий белый блюр */
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        }

        .header-wrap {
          background: transparent;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 28px;
          height: 100%;
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
        }

        /* ====== ЛОГО И ПОДПИСЬ ====== */
        .logoBlock {
          justify-self: start;
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .lavea-logo {
          font-family: var(--font-heading, "Prata", serif);
          font-size: 28px;
          font-weight: 400; /* тонкий */
          color: #111; /* чёрный */
          text-decoration: none;
          letter-spacing: 0.05em;
          transition: color 0.3s ease, text-shadow 0.3s ease;
        }

        .lavea-logo:hover {
          color: #C7A251; /* золото LAVEA */
          text-shadow: 0 0 10px rgba(199, 162, 81, 0.3);
        }

        .logoTagline {
          margin-top: 6px;
          font-family: var(--font-heading, "Prata", serif);
          font-size: 11px;
          letter-spacing: 0.22em;
          color: #111; /* чёрная подпись */
          white-space: nowrap;
        }

        /* ====== МЕНЮ ====== */
        .nav-center {
          justify-self: center;
          display: flex;
          gap: 26px;
          align-items: center;
        }

        .header_link {
          font-family: var(--font-heading, "Prata", serif);
          color: #111; /* чёрный */
          text-decoration: none;
          font-weight: 400;
          font-size: 16px;
          letter-spacing: 0.03em;
          white-space: nowrap;
          transition: color 0.25s ease;
        }

        .header_link:hover {
          color: #C7A251; /* золото при наведении */
        }

        /* ====== КНОПКА СПРАВА ====== */
        .actions {
          justify-self: end;
          display: flex;
          align-items: center;
        }

        .actions :global(button),
        .nav-cta :global(button),
        .nav-cta {
          font-family: var(--font-heading, "Prata", serif) !important;
          background: transparent !important; /* тонкая чёрная */
          border: 1px solid #111 !important;
          color: #111 !important;
          padding: 10px 26px !important;
          border-radius: 100px !important;
          font-size: 15px !important;
          font-weight: 400 !important;
          cursor: pointer !important;
          transition: all 0.25s ease !important;
        }

        .actions :global(button:hover),
        .nav-cta:hover {
          color: #fff !important;
          background: linear-gradient(90deg, #E8C980 0%, #C7A251 100%) !important;
          border-color: #C7A251 !important;
          transform: translateY(-1px) scale(1.02) !important;
          box-shadow: 0 0 10px rgba(199, 162, 81, 0.3);
        }

        @media (max-width: 900px) {
          .nav-center {
            display: none;
          }
          .header-wrap {
            padding: 0 18px;
            grid-template-columns: auto 1fr;
          }
        }
      `}</style>

      {/* ====== ГЛОБАЛЬНЫЕ СТИЛИ (отступ под фикс-шапку) ====== */}
      <style jsx global>{`
        body {
          padding-top: 80px; /* чтобы контент не залезал под фиксированный header */
        }
      `}</style>
    </>
  );
}
