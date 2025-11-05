// app/HeaderClient.js
"use client";

import ConsultBtn from "../components/ConsultBtn";

export default function HeaderClient() {
  return (
    <>
      <header className="site-header">
        <div className="header-wrap">

          {/* Логотип слева */}
          <a href="/" className="lavea-logo">LAVEA</a>

          {/* Меню по центру */}
          <nav className="nav-center" aria-label="Основная навигация">
            <a href="#portfolio" className="header_link">Портфолио</a>
            <a href="#pricing"   className="header_link">Цены</a>
            <a href="#about"     className="header_link">О нас</a>
            <a href="#process"   className="header_link">Процесс</a>
            <a href="#contacts"  className="header_link">Контакты</a>
          </nav>

          {/* Кнопка справа */}
          <div className="actions">
            <ConsultBtn className="nav-cta">Написать</ConsultBtn>
          </div>
        </div>
      </header>

      {/* ====== СТИЛИ ====== */}
      <style jsx>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 80px;
          z-index: 1000;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          background: rgba(17,17,17,0.25);
          border-bottom: 1px solid rgba(255,255,255,0.14);
          box-shadow: 0 8px 24px rgba(0,0,0,0.06);
        }

        .wrap {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 28px;
          height: 100%;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 16px;
        }

        .lavea-logo {
          font-family: var(--font-heading, "Prata", serif);
          font-size: 28px;
          font-weight: 600;
          color: #fff;
          text-decoration: none;
          letter-spacing: 0.04em;
          transition: color .3s ease, text-shadow .3s ease;
        }
        .lavea-logo:hover {
          color: #E8C980;
          text-shadow: 0 0 14px rgba(199,162,81,0.8);
        }

        .nav-center {
          display: flex !important;
          gap: 26px;
          justify-content: center;
          align-items: center;
          z-index: 1001;
        }
        .header_link {
          font-family: var(--font-heading, "Prata", serif);
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          font-size: 16px;
          letter-spacing: 0.03em;
          transition: color .25s ease;
          white-space: nowrap;
        }
        .header_link:hover { color: #E8C980; }

        .actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          z-index: 1001;
        }

        /* Переопределение ConsultBtn */
        .actions :global(button),
        .nav-cta :global(button),
        .nav-cta {
          font-family: var(--font-heading, "Prata", serif) !important;
          background: linear-gradient(90deg, #E8C980 0%, #C7A251 100%) !important;
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
        .nav-cta:hover {
          transform: translateY(-1px) scale(1.05) !important;
          box-shadow: 0 0 20px rgba(199,162,81,0.6) !important;
          filter: brightness(1.03) !important;
        }

        @media (max-width: 900px) {
          .nav-center { display: none !important; }
          .wrap { padding: 0 18px; }
        }
      `}</style>

      {/* ====== ГЛОБАЛЬНЫЙ ОТСТУП, ЧТОБЫ КОНТЕНТ НЕ ЛЕЗ ПОД ШАПКУ ====== */}
      <style jsx global>{`
        body { padding-top: 80px; }
      `}</style>
    </>
  );
}
