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

      <style jsx>{`
        /* ===== ШАПКА: прозрачная + блюр ===== */
        header {
          position: sticky;
          top: 0;
          z-index: 60;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(0,0,0,0.06);
          transition: background .25s ease, box-shadow .25s ease, border-color .25s ease;
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

        /* ===== ЛОГО: золото и мягкое свечение при hover ===== */
        .lavea-logo {
          font-family: var(--font-heading, "Prata", serif);
          font-size: 26px;
          color: #111;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: color .25s ease, text-shadow .25s ease;
        }
        .lavea-logo:hover {
          color: #C7A251; /* золото LAVEA */
          text-shadow: 0 0 12px rgba(199,162,81,.55);
        }

        /* ===== Навигация по центру ===== */
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
          transition: color .2s ease, background .2s ease;
        }
        .header_link:hover {
          background: transparent;
          color: #C7A251;
        }

        /* ===== Правая зона ===== */
        .actions {
          display: flex;
          justify-content: flex-end;
        }

        /* ===== Кнопка «Написать»: немного больше и белая надпись ===== */
        .nav-cta {
          background: linear-gradient(180deg, #E8C980 0%, #C7A251 100%);
          color: #fff !important;           /* белая надпись */
          border: none;
          padding: 10px 22px;               /* чуть больше */
          border-radius: 9999px;
          font-weight: 600;
          font-size: 15px;                  /* немного крупнее */
          cursor: pointer;
          transition: transform .2s ease, box-shadow .2s ease, filter .2s ease;
          box-shadow: 0 0 0 rgba(0,0,0,0);
        }
        .nav-cta:hover {
          transform: translateY(-1px) scale(1.03);
          box-shadow: 0 0 18px rgba(199,162,81,.45);
          filter: brightness(1.02);
        }

        /* Мобилки — не ломаем сетку */
        @media (max-width: 900px) {
          .nav-center { display: none; }
        }
      `}</style>
    </header>
  );
}
