"use client";

import Image from "next/image";
import { portfolioImages } from "../../lib/portfolioImages";

export default function PortfolioPage() {
  return (
    <section className="wrap">
      <h1 className="title">Полное портфолио</h1>

      <div className="grid">
        {portfolioImages.map((src, i) => (
          <figure key={i} className="tile">
            <div className="media">
              <Image
                src={src}
                alt={`Проект ${i + 1}`}
                width={600}      // фиксированная ширина
                height={400}     // фиксированная высота (соотношение 3:2)
                className="img"
                priority={i < 3}
              />
            </div>
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
          grid-template-columns: 1fr;
          gap: 20px;
        }

        @media (min-width: 760px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1100px) {
          .grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .tile {
          margin: 0;
          padding: 0;
          border: 0;
          background: none;
          display: flex;
          justify-content: center;
        }

        .media {
          width: 100%;
          max-width: 600px;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 10px 26px rgba(0, 0, 0, 0.08);
        }

        .img {
          width: 100%;
          height: auto;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }

        .media:hover .img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
