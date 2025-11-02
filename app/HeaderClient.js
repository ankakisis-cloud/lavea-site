"use client";

import ConsultBtn from "../components/ConsultBtn";

export default function HeaderClient() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      {/* КНОПКИ-ССЫЛКИ НА БЛОКИ ГЛАВНОЙ */}
      <a className="btn btn-lavea" href="/#process">Процесс</a>
      <a className="btn btn-lavea" href="/#pricing">Цены</a>

      {/* Контактные кнопки — модалка */}
      <ConsultBtn className="goldBtn">Написать</ConsultBtn>
      <ConsultBtn className="goldBtn">Связаться</ConsultBtn>
    </div>
  );
}
