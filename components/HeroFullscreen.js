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
    <section className="heroFullscreen" aria-label="LAVEA — премиальная студия дизайна">
      <div className="heroSlides">
        {slides.map((src, i) => (
          <div
            key={i}
            className="heroSlide"
            style={{ backgroundImage: `url(${src})` }}
            aria-hidden={i !== 0}
          />
        ))}
      </div>

      <div className="heroContent">
        <h1 className="heroTitle">LAVEA — премиальная студия интерьерного дизайна</h1>
        <p className="heroLead">
          Создаём личные миры: от концепции и 3D-визуализаций до комплектации и авторского надзора.
        </p>

        <div className="heroActions">
          <a href="/#portfolio" className="goldBtn">Портфолио</a>
          <button type="button" className="goldBtn" onClick={onContact}>Связаться</button>
        </div>
      </div>

      <style jsx>{`
        .heroFullscreen { position: relative; height: clamp(520px, 84vh, 880px); overflow: hidden; border-radius: 28px; }
        .heroSlides { position: absolute; inset: 0; }
        .heroSlide { position: absolute; inset: 0; background-size: cover; background-position: center; filter: brightness(.72); }
        .heroContent {
          position: relative; z-index: 2; height: 100%;
          display: flex; flex-direction: column; justify-content: center; gap: 16px;
          padding: 24px clamp(12px, 4vw, 48px);
          color: #fff; text-shadow: 0 2px 24px rgba(0,0,0,.35);
        }
        .heroTitle { font-family: var(--font-heading); font-weight: 400; line-height: 1.1; font-size: clamp(28px, 4.2vw, 56px); margin: 0; }
        .heroLead { max-width: 760px; line-height: 1.7; margin: 0 0 8px; }
        .heroActions { display: flex; gap: 12px; flex-wrap: wrap; }
      `}</style>
    </section>
  );
}
