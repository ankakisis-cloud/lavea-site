"use client";

import { portfolioImages } from "../../lib/portfolioImages";

export default function PortfolioPage() {
  return (
    <section className="wrap">
      <h1 className="title">Полное портфолио</h1>

      <div className="grid">
        {portfolioImages.map((src, i) => (
          <figure key={i} className="tile">
            {/* ВАЖНО: <img>, не <Image>, чтобы не было обрезки/пересчёта */}
            <img
              src={src}
              alt={`Проект ${i + 1}`}
              loading="lazy"
              decoding="async"
              fetchpriority={i < 3 ? "high" : "auto"}
              className="img"
            />
          </figure>
        ))}
      </div>

      <style jsx>{`
        .wrap {
          max-width: 1440px;
          margin: 0 auto;
          padding: 60px 12px;
        }
        .title {
          font-size: 44px;
          font-weight: 700;
          line-height: 1.05;
          margin-bottom: 22px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 28px;
        }
        .tile {
          margin: 0;
          padding: 0;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          background: #fff;
        }
        .img {
          display: block;
          width: 100%;
          height: auto;        /* <-- сохраняем пропорции оригинала */
          object-fit: contain; /* <-- ничего не обрезаем */
        }
      `}</style>
    </section>
  );
}
