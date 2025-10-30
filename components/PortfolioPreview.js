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
        <Link href="/portfolio" className="btn">
          Посмотреть полное портфолио
        </Link>
      </div>

      <style jsx>{`
        .wrap { max-width: 1440px; margin: 0 auto; padding: 60px 12px; }
        .title { font-size: 36px; font-weight: 700; margin-bottom: 18px; }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 24px;
        }
        .tile { margin: 0; border-radius: 16px; overflow: hidden; background: #fff;
                box-shadow: 0 8px 24px rgba(0,0,0,0.06); }
        .img  { display: block; width: 100%; height: auto; object-fit: contain; }
        .btnRow { display: flex; justify-content: center; margin-top: 28px; }
        .btn {
          padding: 12px 22px; border-radius: 999px;
          background: linear-gradient(180deg, #E8C980, #C7A251);
          color: #111; font-weight: 700; text-decoration: none; box-shadow: 0 6px 20px rgba(0,0,0,0.12);
        }
      `}</style>
    </section>
  );
}
