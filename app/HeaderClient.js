"use client";

import ConsultBtn from "../components/ConsultBtn";

export default function HeaderClient() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      {/* Ссылки на блоки ГЛАВНОЙ */}
      <a className="btn btn-lavea" href="/#portfolio">Портфолио</a>
      <a className="btn btn-lavea" href="/#about">О нас</a>
      <a className="btn btn-lavea" href="/#process">Процесс</a>

      {/* Запись через модалку */}
      <ConsultBtn className="goldBtn">Написать</ConsultBtn>
      <ConsultBtn className="goldBtn">Связаться</ConsultBtn>
    </div>
  );
}
