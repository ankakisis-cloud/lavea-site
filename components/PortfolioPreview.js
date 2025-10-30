"use client";

import Image from "next/image";
import Link from "next/link";

const previewImages = [
  "/IMG_9728.jpg",
  "/IMG_9735.jpg",
  "/IMG_9737.jpg",
  "/IMG_9747.jpg",
  "/IMG_9751.jpg",
  "/IMG_9755.jpg",
];

export default function PortfolioPreview() {
  return (
    <section className="wrap">
      <div className="head">
        <h2>Портфолио</h2>
        <Link href="/portfolio" className="headLink">Смотреть всё&nbsp;→</Link>
      </div>

      <div className="grid">
        {previewImages.map((src, i) => (
          <figure key={i} className="tile">
            <div className="media">
              <Image src={src} alt={`Проект ${i + 1}`} fill className="img" priority={i < 3} />
              <div className="hoverLayer" />
            </div>
          </figure>
        ))}
      </div>

      <div className="cta">
        <Link href="/portfolio" className="button">
          Показать ещё работы <span aria-hidden>→</span>
        </Link>
      </div>

      <style jsx>{`
        /* шире контейнер + меньше внутренних полей → плитки крупнее */
        .wrap { max-width: 1440px; margin: 0 auto; padding: 40px 12px 32px; }

        .head { display:flex; align-items:flex-end; justify-content:space-between; margin-bottom: 22px; }
        .head h2 { margin:0; font-size: 44px; font-weight: 700; line-height: 1.05; }
        .headLink { font-size: 15px; color:#1c1c1c; text-decoration:none; opacity:.85; }
        .headLink:hover { opacity:1; }

        /* 3 колонки на десктопе, тайлы выше и крупнее */
        .grid { display:grid; grid-template-columns:1fr; gap: 12px; }
        @media (min-width: 760px) { .grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1100px) { .grid { grid-template-columns: repeat(3, 1fr); } }

        .tile { margin:0; padding:0; border:0; background:none; }
        /* aspect-ratio 4/3 → визуально выше/крупнее, чем 16/10 */
        .media {
          position:relative; width:100%; aspect-ratio: 4 / 3;
          border-radius:18px; overflow:hidden;
          box-shadow: 0 12px 36px rgba(0,0,0,.08);
        }
        .img { object-fit:cover; transform:scale(1); transition: transform .6s ease; display:block; }
        .hoverLayer {
          position:absolute; inset:0;
          background: radial-gradient(ellipse at center, rgba(0,0,0,.00), rgba(0,0,0,.06));
          opacity:0; transition: opacity .4s ease;
        }
        .media:hover .img { transform: scale(1.07); }
        .media:hover .hoverLayer { opacity:1; }

        .cta { text-align:center; margin-top: 30px; }
        /* «Золотая» кнопка без подчёркивания */
        .button {
          display:inline-flex; align-items:center; gap:10px;
          padding: 14px 28px; border-radius:999px;
          border:1px solid #C8A96A; color:#C8A96A; background:#fff;
          font-size:15px; letter-spacing:.2px; text-decoration:none;
          box-shadow: 0 6px 20px rgba(200,169,106,.22);
          transition: background .2s ease, color .2s ease, box-shadow .2s ease, transform .1s ease;
        }
        .button:hover { background:#C8A96A; color:#fff; box-shadow:0 10px 26px rgba(200,169,106,.35); }
        .button:active { transform: translateY(1px); }
      `}</style>
    </section>
  );
}
