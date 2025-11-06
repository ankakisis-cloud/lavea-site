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
        {/* legacy <a> + :global, чтобы ничего не сломало стили */}
        <Link href="/portfolio" legacyBehavior passHref>
  <a className="btn btn-lavea">Посмотреть полное портфолио</a>
</Link>

      </div>

      <style jsx>{`
        .wrap { max-width: 1440px; margin: 0 auto; padding: 60px 12px 40px; }
        .title { font-size: 36px; font-weight: 700; margin-bottom: 18px; }

        .grid {
          display: grid;
          gap: 24px;
          grid-template-columns: repeat(1, 1fr);
        }
        @media (min-width: 640px) { .grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .grid { grid-template-columns: repeat(3, 1fr); } }

        .tile { margin: 0; border-radius: 16px; overflow: hidden; background: #fff;
                box-shadow: 0 8px 24px rgba(0,0,0,0.06); }
        .img  { display: block; width: 100%; height: auto; object-fit: contain; }

        .btnRow { display: flex; justify-content: center; margin-top: 28px; margin-bottom: 8px; }

        /* Жёстко переопределяем любые глобальные стили ссылок */
        :global(a.goldBtn){
  display: inline-block;
  padding: 12px 22px;
  border-radius: 999px;
  font-weight: 700;
  color: #fff !important;                 /* белый текст */
  text-decoration: none !important;       /* убрать подчёркивание */
  background-image: linear-gradient(180deg, #E8C980, #C7A251);
  box-shadow: 0 6px 20px rgba(0,0,0,.12);
  border: none;
  line-height: 1;
  white-space: nowrap;
}
:global(a.goldBtn:hover){ filter: brightness(0.96); }
:global(a.goldBtn:active){ transform: translateY(1px); }


      `}</style>
    </section>
  );
}
