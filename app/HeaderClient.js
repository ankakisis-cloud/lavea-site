"use client";

import ConsultBtn from "../components/ConsultBtn";

export default function HeaderClient() {
  return (
    <header>
      <div className="wrap">
        {/* Логотип слева */}
        <a href="/" className="lavea-logo">LAVEA</a>

        {/* Меню по центру */}
        <div className="nav-center">
          <a href="#portfolio" className="header_link">Портфолио</a>
          <a href="#pricing" className="header_link">Цены</a>
          <a href="#about" className="header_link">О нас</a>
          <a href="#process" className="header_link">Процесс</a>
          <a href="#contacts" className="header_link">Контакты</a>
        </div>

        {/* Кнопка справа */}
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
          grid-template-columns: 1fr auto 1fr;
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
        }
        .header_link {
          color: #111;
          text-decoration: none;
          font-weight: 600;
          transition: 0.25s;
        }
        .header_link:hover {
          color: var(--gold, #C7A251);
        }
        .actions {
          display: flex;
          justify-content: flex-end;
        }
        .nav-cta {
