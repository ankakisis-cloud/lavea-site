// app/HeaderClient.js
"use client";

import ConsultBtn from "../components/ConsultBtn";

export default function HeaderClient() {
  return (
    <header>
      <div className="wrap">
        {/* Логотип слева */}
        <a href="/" className="lavea-logo">LAVEA</a>

        {/* Меню по центру */}
        <nav className="nav-center" aria-label="Основная навигация">
          <a href="/portfolio" className="header_link">Портфолио</a>
          <a href="/pricing" className="header_link">Цены</a>
          <a href="/about" className="header_link">О нас</a>
          <a href="/process" className="header_link">Процесс</a>
          <a href="/contacts" className="header_link">Контакты</a>
        </nav>

        {/* Кнопка справа (единственная) */}
        <div className="actions">
          <ConsultBtn className="nav-cta">Написать</ConsultBtn>
        </div>
      </div>

      <style jsx>{`
        header {
          position: sticky;
          top: 0;
          z-index: 60;
          background: #fff;
          border-bottom: 1px solid var(--border, #e8e8e8);
        }
        .wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 12px 16px;
          display: grid;
          grid-template-columns: 1fr auto 1fr; /* левый / центр / правый */
          align-items: center;
          gap: 16px;
        }
        .lavea-logo {
          font-family: var(--font-heading, "Prata", serif);
          font-size: 26px;
          color: #111;
          text-decoration: none;
          letter-spacing: 0.02em;
        }
        .nav-center {
          display: flex;
          gap: 24px;
          justify-content: center;
          align-items: center;
        }
        .header_link {
          color: #111;
          text-decoration: none;
          font-weight: 600;
          padding: 8px 8px;
          border-radius: 8px;
          transition: 0.25s;
        }
        .header_link:hover {
          background: rgba(0,0,0,.04);
        }
        .actions {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
        .nav-cta {
          background: linear-gradient(180deg, #E8C980 0%, #C7A251 100%);
          color: #111;
          border: none;
          padding: 8px 14px;
          border-radius: 9999px;
          font-weight: 600;
          cursor: pointer;
        }
      `}</style>
    </header>
  );
}
