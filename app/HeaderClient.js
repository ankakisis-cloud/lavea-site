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
  /* ===== ВЕРХНЯЯ ШАПКА ПОЛНОСТЬЮ В БЛЮРЕ ===== */
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    background: rgba(255, 255, 255, 0.08); /* полупрозрачный */
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 24px rgba(0,0,0,0.06);
    transition: background .3s ease, box-shadow .3s ease;
  }

  .wrap {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 16px 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* ===== ЛОГОТИП LAVEA (живой) ===== */
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

  /* ===== НАВИГАЦИЯ ===== */
  .nav-center {
    display: flex;
    gap: 26px;
    justify-content: center;
    align-items: center;
  }
  .header_link {
    font-family: var(--font-heading, "Prata", serif);
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0.03em;
    transition: color .25s ease;
  }
  .header_link:hover {
    color: #E8C980;
  }

  /* ===== ПРАВАЯ ЧАСТЬ С КНОПКОЙ ===== */
  .actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  /* ===== КНОПКА "НАПИСАТЬ" (в стиле LAVEA) ===== */
  .nav-cta {
    font-family: var(--font-heading, "Prata", serif);
    background: linear-gradient(90deg, #E8C980 0%, #C7A251 100%);
    color: #fff !important;
    border: none;
    padding: 12px 28px;
    border-radius: 100px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 0 0 rgba(0,0,0,0);
    transition: transform .25s ease, box-shadow .25s ease, filter .25s ease;
  }
  .nav-cta:hover {
    transform: translateY(-1px) scale(1.05);
    box-shadow: 0 0 20px rgba(199,162,81,0.6);
    filter: brightness(1.03);
  }

  /* ===== МОБИЛЬНАЯ ВЕРСИЯ ===== */
  @media (max-width: 900px) {
    .nav-center {
      display: none;
    }
    .wrap {
      padding: 12px 18px;
    }
  }
`}</style>
