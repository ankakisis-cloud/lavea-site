"use client";

import { useEffect, useRef } from "react";
import ConsultBtn from "../components/ConsultBtn";

export default function HeaderClient() {
  const ref = useRef(null);

  // Анти-дубликатор: оставляем только первый экземпляр меню
  useEffect(() => {
    const selector = '[data-nav="lavea-main"]';
    const all = Array.from(document.querySelectorAll(selector));
    if (all.length > 1) {
      // оставляем самый первый, остальные удаляем
      all.slice(1).forEach(el => el.remove());
    }
  }, []);

  return (
    <nav
      ref={ref}
      data-nav="lavea-main"
      aria-label="Основная навигация"
      className="headerNav"
      style={{ display: "flex", alignItems: "center", gap: 18 }}
    >
      {/* Чёрные текст-ссылки */}
      <a href="/#portfolio" className="header__link">Портфолио</a>
      <a href="/#pricing"   className="header__link">Цены</a>
      <a href="/#about"     className="header__link">О нас</a>
      <a href="/#process"   className="header__link">Процесс</a>
      <a href="/#contacts"  className="header__link">Контакты</a>

      {/* Единственная золотая кнопка */}
      <ConsultBtn className="goldBtn">Написать</ConsultBtn>

      <style jsx>{`
        .header__link {
          color: #111;
          text-decoration: none;
          font-weight: 600;
          padding: 10px 8px;
          border-radius: 8px;
          transition: color .2s ease, background .2s ease;
        }
        .header__link:hover { background: rgba(0,0,0,.04); }
      `}</style>
    </nav>
  );
}
