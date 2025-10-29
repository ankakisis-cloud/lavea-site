"use client";

import Link from "next/link";
import PricingBlock from "../components/PricingBlock";

// Кнопка "Связаться" (как у тебя было)
function openModal() {
  if (typeof window !== "undefined" && window.openContactModal) {
    window.openContactModal();
  }
}

export default function Home() {
  return (
    <>
      {/* HERO + карточки преимуществ — как у тебя было */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr .9fr",
          gap: 24,
          alignItems: "center",
        }}
      >
        <div>
          <h1>LAVEA — премиальная студия интерьерного дизайна</h1>
          <p>
            Создаём личные миры: от концепции и 3D-визуализаций до комплектации и
            авторского надзора.
          </p>

          <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
            <Link className="btn dark" href="/portfolio">
              Портфолио
            </Link>
            <Link className="btn" href="/pricing">
              Цены
            </Link>
            <button className="btn" onClick={openModal}>
              Связаться
            </button>
          </div>

          {/* здесь можешь оставить свою сетку преимуществ */}
        </div>

        <div
          className="card"
          style={{
            aspectRatio: "4/3",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* картинка/обложка */}
        </div>
      </section>

      {/* 🔧 твой блок ПРОЦЕСС (как был) */}
      <section id="process">{/* ...твой контент процесса... */}</section>

      {/* 💳 НОВЫЙ БЛОК ЦЕН — между Процессом и Отзывами */}
      <PricingBlock />

      {/* ⭐️ ОТЗЫВЫ (как были) */}
      <section id="reviews">{/* ...твои отзывы... */}</section>

      {/* Контакты/CTA и т.д. */}
    </>
  );
}
