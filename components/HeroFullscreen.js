"use client";
import React from "react";

export default function HeroFullscreen() {
  // файлы лежат в /public/hero/
  const slides = [
    "/hero/IMG_9732.jpg",
    "/hero/IMG_9738.jpg",
    "/hero/IMG_9742.jpg",
    "/hero/IMG_9743.jpg",
    "/hero/IMG_9753.jpg",
  ];

  const onContact = () => window.openContactModal?.();

  return (
    <section className="hero" aria-label="LAVEA hero">
      {/* фоновые слайды */}
      <div className="slides">
        {slides.map((src, i) => (
          <span
            key={i}
            className="slide"
            style={{
              backgroundImage: `url(${src})`,   // ВАЖНО: обратные кавычки `
              animationDelay: `${i * 6}s`,
            }}
          />
        ))}
      </div>

      {/* лёгкая затемняющая вуаль */}
      <div className="veil" />

      {/* контент поверх */}
      <div className="content">
        <div className="container">
          <h1>LAVEA — премиальная студия интерьерного дизайна</h1>
          <p>
            Создаём личные миры: от концепции и 3D-визуализаций до комплектации и
            авторского надзора.
          </p>
          <div className="actions">
            <a className="btn dark" href="/portfolio">Портфолио</a>
            <a className="btn" href="/#pricing">Цены</a>
            <button className="btn" onClick={onContact}>Связаться</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          height: 92vh;
          min-height: 560px;
          width: 100%;
          background: #000;
          overflow: hidden;
        }
        .slides { position: absolute; inset: 0; z-index: 0; }
        .slide {
          position: absolute; inset: 0;
          background-size: cover; background-position: center;
          opacity: 0;
          transform: scale(1.04);
          animation: fade ${slides.length * 6}s linear infinite;
          will-change: opacity, transform;
        }
        @keyframes fade {
          0% { opacity: 0; }
          5% { opacity: 1; }
          20% { opacity: 1; }
          25% { opacity: 0; }
          100% { opacity: 0; }
        }
        .hero:hover .slide { animation-play-state: paused; }

        .veil {
          position: absolute; inset: 0; z-index: 1;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,.35),
            rgba(0,0,0,.25) 30%,
            rgba(0,0,0,.35)
          );
          pointer-events: none;
        }

        .content {
          position: absolute; inset: 0; z-index: 2;
          display: grid; align-items: center;
        }
        .container {
          max-width: 1180px; margin: 0 auto; padding: 0 24px;
          color: #fff; text-shadow: 0 2px 20px rgba(0,0,0,.3);
        }
        .container h1 { margin: 0 0 12px; font-size: 56px; line-height: 1.06; letter-spacing: -.02em; }
        .container p  { margin: 0 0 18px; max-width: 680px; font-size: 18px; color: rgba(255,255,255,.92); }
        .actions { display: flex; gap: 10px; flex-wrap: wrap; }

        @media (max-width: 1024px) { .container h1 { font-size: 44px; } }
        @media (max-width: 640px)  {
          .hero { height: 84vh; min-height: 500px; }
          .container { padding: 0 16px; }
          .container h1 { font-size: 34px; }
          .container p  { font-size: 16px; }
        }
      `}</style>
    </section>
  );
}
