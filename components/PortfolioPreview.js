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
          <span>Показать ещё работы</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" strokeWidth="2"
               strokeLinecap="round" strokeLinejoin="round" className="arrow">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <style jsx>{`
        .wrap { max-width:1440px; margin:0 auto; padding:40px 12px 32px; }
        .head { display:flex; align-items:flex-end; justify-content:space-between; margin-bottom:22px; }
        .head h2 { margin:0; font-size:44px; font-weight:700; line-height:1.05; }
        .headLink { font-size:15px; color:#1c1c1c; text-decoration:none; opacity:.85; }
        .headLink:hover { opacity:1; }

        .grid { display:grid; grid-template-columns:1fr; gap:12px; }
        @media (min-width:760px){ .grid{ grid-template-columns:repeat(2,1fr);} }
        @media (min-width:1100px){ .grid{ grid-template-columns:repeat(3,1fr);} }

        .tile { margin:0; padding:0; border:0; background:none; }
        .media {
          position:relative; width:100%; aspect-ratio:4 / 3;
          border-radius:18px; overflow:hidden;
          box-shadow:0 12px 36px rgba(0,0,0,.08);
        }
        .img { object-fit:cover; transform:scale(1); transition:transform .6s ease; display:block; }
        .hoverLayer {
          position:absolute; inset:0;
          background:radial-gradient(ellipse at center, rgba(0,0,0,0), rgba(0,0,0,.06));
          opacity:0; transition:opacity .4s ease;
        }
        .media:hover .img { transform:scale(1.07); }
        .media:hover .hoverLayer { opacity:1; }

        .cta { text-align:center; margin-top:30px; }

        /* КНОПКА — жёсткое переопределение всех браузерных стилей */
        .button, .button:visited {
          display:inline-flex; align-items:center; gap:10px;
          padding:14px 34px; border-radius:999px;
          background:#C8A96A; color:#fff; border:none;
          font-size:16px; font-weight:500; letter-spacing:.3px;
          text-decoration:none !important;                /* важно */
          box-shadow:0 8px 20px rgba(200,169,106,.35);
          transition:background .25s ease, color .25s ease,
                     box-shadow .25s ease, transform .1s ease;
        }
        .button:hover { background:#D5B979; box-shadow:0 10px 26px rgba(200,169,106,.5); transform:translateY(-1px); }
        .button:active { transform:translateY(1px); box-shadow:0 4px 12px rgba(200,169,106,.3); }
        .arrow { width:20px; height:20px; }
      `}</style>
    </section>
  );
}
