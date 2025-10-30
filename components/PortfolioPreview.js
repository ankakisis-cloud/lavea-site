"use client";

import Link from "next/link";
import { portfolioImages } from "../lib/portfolioImages";

export default function PortfolioPreview() {
  const preview = portfolioImages.slice(0, 6);

  return (
    <section className="wrap" id="portfolio">
      <h2 className="title">Портфолио</h2>

      <div className="grid">
        {preview.map((src, i) => (
          <figure key={i} className="tile">
            <img
              src={src}
              alt={`Проект ${i + 1}`}
              loading="lazy"
              decoding="async"
              className="img"
            />
          </figure>
        ))}
      </div>

      <div className="btnRow">
        <Link href="/portfolio" className="goldBtn">
          Посмотреть полное портфолио
        </Link>
      </div>

      <style jsx>{`
        /* такой же контейнер, как у цен */
        .wrap {
          max-width: 1440px;
          margin: 0 auto;
          padding: 60px 12px;
        }
        .title {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 18px;
        }

        /* Гарантированно 3 колонки на десктопе = 2 ряда по 3 */
        .grid {
          display: grid;
          gap: 24px;
          grid-template-columns: repeat(1, 1fr);
        }
        @media (min-width: 640px) {
          .grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .grid { grid-template-columns: repeat(3, 1fr); }
        }

        .tile {
          margin: 0;
          border-radius: 16px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 8px 24px rgba(0,0,0,0.06);
        }
        .img {
          display: block;
          width: 100%;
          height: auto;       /* сохраняем пропорции, без обрезки */
          object-fit: contain;
        }

        .btnRow {
          display: flex;
          justify-content: center;
          margin-top: 28px;
        }

        /* Золотая кнопка (повышенная специфичность, чтобы не переопределилось темой) */
        .goldBtn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 22px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 700;
          color: #111;
          background-image: linear-gradient(180deg, #E8C980, #C7A251);
          box-shadow: 0 6px 20px rgba(0,0,0,0.12);
          border: none;
        }
        .goldBtn:hover {
          filter: brightness(0.96);
        }
        .goldBtn:active {
          transform: translateY(1px);
        }
      `}</style>
    </section>
  );
}
