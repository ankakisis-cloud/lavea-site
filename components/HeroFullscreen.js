"use client";
import React from "react";

export default function HeroFullscreen() {
  // Файлы лежат в /public/hero/
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
      {/* Фоновые слайды */}
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

      {/* Вуаль для читабельности текста */}
      <div className="veil" />

      {/* Текст/кнопки поверх */}
      <div className="content">
        <div className="container">
          <h1>LAVEA — премиальная студия интерьерного дизайна</h1>
          <p>
            Создаём личные миры: от концепции и 3D-визуализаций до комплектации и авторского надзора.
          </p>
          {/* Кнопки в хиро (без «Процесс») */}
<div className="cta">
  <a href="#portfolio" className="btnPrimary">Портфолио</a>
  <a href="#contacts" className="btnGhost">Связаться</a>
</div>

<style jsx>{`
  .cta { display: flex; gap: 10px; margin-top: 18px; }
  .btnPrimary {
    display: inline-flex; align-items: center; justify-content: center;
    padding: 12px 20px; border-radius: 999px; font-weight: 700;
    background: #111; color: #fff; text-decoration: none;
  }
  .btnGhost {
    display: inline-flex; align-items: center; justify-content: center;
    padding: 12px 20px; border-radius: 999px; font-weight: 700;
    background: rgba(255,255,255,.8); color: #111; text-decoration: none;
    backdrop-filter: blur(6px);
  }
`}</style>
