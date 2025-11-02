"use client";

import ConsultBtn from "../components/ConsultBtn";

export default function HeaderClient() {
  return (
    <nav aria-label="Основная навигация" style={{display:"flex",alignItems:"center",gap:18}}>
      <a href="/#portfolio" className="header__link">Портфолио</a>
      <a href="/#pricing"   className="header__link">Цены</a>
      <a href="/#about"     className="header__link">О нас</a>
      <a href="/#process"   className="header__link">Процесс</a>
      <a href="/#contacts"  className="header__link">Контакты</a>
      <ConsultBtn className="goldBtn">Написать</ConsultBtn>

      <style jsx>{`
        .header__link{
          color:#111;text-decoration:none;font-weight:600;
          padding:10px 8px;border-radius:8px;transition:.2s;
        }
        .header__link:hover{background:rgba(0,0,0,.04);}
      `}</style>
    </nav>
  );
}
