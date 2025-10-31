"use client";

import React from "react";

export default function HeroFullscreen() {
  // Слайды лежат в /public/hero
  const slides = [
    "/hero/IMG_9732.jpg",
    "/hero/IMG_9738.jpg",
    "/hero/IMG_9742.jpg",
    "/hero/IMG_9743.jpg",
    "/hero/IMG_9753.jpg",
  ];

  const onContact = () => window?.openContactModal?.();

  return (
    <section className="hero" aria-label="LAVEA hero">
      {/* Слайдер-фон */}
      <div className="slides">
        {slides.map((src, i) => (
          <span
            key={i}
            className="slide"
            style={{
              backgroundImage: `url(${src})`,
              animationDelay: `${i * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Вуаль для читаемости текста */}
      <div className="veil" />

      {/* Контент и кнопки сверху */}
      <div className="content">
        <div className="container">
          <h1>LAVEA — премиальная студия интерьерного дизайна</h1>
          <p>
            Создаём личные миры: от концепции и 3D-визуализаций до комплектации
            и авторского надзора.
          </p>

          {/* Кнопки (без «Процесс») */}
          <div className="cta">
            <a href="#portfolio" className="btnPrimary">
              Портфолио
            </a>
            <button type="button" className="btnGhost" onClick={onContact}>
              Связаться
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          height: min(86vh, 920px);
          min-height: 540px;
          border-radius: 28px;
          overflow: hidden;
          margin: 18px 12px 0;
        }

        .slides {
          position: absolute;
          inset: 0;
        }
        .slide {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0;
          animation: fade 30s infinite;
        }
        @keyframes fade {
          0% {
            opacity: 0;
            transform: scale(1.02);
          }
          6%,
          26% {
            opacity: 1;
            transform: scale(1);
          }
          32%,
          100% {
            opacity: 0;
            transform: scale(1.02);
          }
        }

        .veil {
          position: absolute;
          inset: 0;
          background: linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.55),
              rgba(0, 0, 0, 0.15) 35%,
              rgba(0, 0, 0, 0.1) 70%,
              rgba(0, 0, 0, 0.35)
            ),
            radial-gradient(60% 60% at 20% 50%, rgba(0, 0, 0, 0.35), transparent);
        }

        .content {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
        }
        .container {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 24px;
          color: #fff;
          text-shadow: 0 4px 16px rgba(0, 0, 0, 0.45);
        }
        h1 {
          font-size: clamp(28px, 5vw, 56px);
          font-weight: 800;
          line-height: 1.05;
          margin: 0 0 12px;
        }
        p {
          margin: 0 0 18px;
          font-size: clamp(15px, 2.2vw, 20px);
          max-width: 760px;
        }

        .cta {
          display: flex;
          gap: 12px;
        }
        .btnPrimary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 20px;
          border-radius: 999px;
          font-weight: 700;
          background: #111;
          color: #fff;
          text-decoration: none;
          border: none;
          cursor: pointer;
        }
        .btnGhost {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 20px;
          border-radius: 999px;
          font-weight: 700;
          background: rgba(255, 255, 255, 0.82);
          color: #111;
          border: none;
          cursor: pointer;
          backdrop-filter: blur(6px);
        }
      `}</style>
    </section>
  );
}
