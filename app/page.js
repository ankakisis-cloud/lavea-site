"use client";
import PricingBlock from "../components/PricingBlock";
import Link from "next/link";

// Кнопка "Связаться"
function openModal() {
  if (typeof window !== "undefined" && window.openContactModal) {
    window.openContactModal();
  }
}

export default function Home() {
  return (
    <>
      {/* HERO + карточки преимуществ */}
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
            <a className="btn" href="/#pricing">
              Цены
            </a>
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

      {/* 🔧 Блок ПРОЦЕСС */}
      <section id="process">{/* ...контент процесса... */}</section>

      {/* 💳 ЦЕНЫ — теперь только здесь */}
      <PricingBlock />

      {/* ⭐️ ОТЗЫВЫ */}
      <section id="reviews">{/* ...твои отзывы... */}</section>

      {/* Контакты/CTA и т.д. */}
    </>
  );
}
