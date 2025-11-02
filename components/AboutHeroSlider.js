"use client";

import { useEffect, useMemo, useState } from "react";

export default function AboutHeroSlider() {
  // 5 видео лежат в /public
  const videos = useMemo(() => [
    "/about-hero-1.mp4",
    "/about-hero-2.mp4",
    "/about-hero-3.mp4",
    "/about-hero-4.mp4",
    "/about-hero-5.mp4",
  ], []);

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx(i => (i + 1) % videos.length);
    }, 6000); // смена каждые 6с
    return () => clearInterval(t);
  }, [videos.length]);

  return (
    <section className="aboutHeroVideo" aria-label="О студии LAVEA">
      {/* Слой с видео (кроссфейд) */}
      <div className="aboutHero__stage">
        {videos.map((src, i) => (
          <video
            key={src}
            className={`aboutHero__video ${i === idx ? "is-active" : ""}`}
            src={src}
            muted
            playsInline
            autoPlay
            loop
            preload="metadata"
          />
        ))}
      </div>

      {/* Оверлей с текстом и кнопкой */}
      <div className="aboutHero__overlay">
        <div className="aboutHero__inner">
          <div className="aboutHero__kicker">Студия премиального интерьера</div>
          <h1 className="aboutHero__title">LAVEA</h1>
          <p className="aboutHero__lead">Интерьер с любовью к деталям</p>
          <a href="/#contacts" className="goldBtn">Получить консультацию</a>
        </div>
      </div>

      <style jsx>{`
        .aboutHeroVideo{
          height: clamp(420px, 68vh, 720px);
          border-radius: 28px;
          margin: 16px;
          position: relative;
          overflow: hidden;
          background: #000;
        }
        .aboutHero__stage{position:absolute;inset:0}
        .aboutHero__video{
          position:absolute;inset:0;width:100%;height:100%;
          object-fit:cover;opacity:0;transition:opacity .6s ease;
          filter:brightness(.8);
        }
        .aboutHero__video.is-active{opacity:1}
        .aboutHero__overlay{position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.30),rgba(0,0,0,.32));}
        .aboutHero__inner{
          position:relative;z-index:2;height:100%;
          display:flex;flex-direction:column;justify-content:center;align-items:center;gap:10px;
          color:#fff;text-align:center;padding:0 16px;
        }
        .aboutHero__kicker{letter-spacing:.12em;text-transform:uppercase;opacity:.95}
        .aboutHero__title{font-family:var(--font-heading);font-size:clamp(38px,7vw,84px);font-weight:400;margin:0}
        .aboutHero__lead{opacity:.95}
      `}</style>
    </section>
  );
}
