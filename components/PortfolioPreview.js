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
        <Link href="/portfolio" className="headLink">
          Смотреть всё&nbsp;→
        </Link>
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
          Показать ещё работы
          <span className="arrow">→</span>
        </Link>
      </div>

      <style jsx>{`
        .wrap { max-width:1280px; margin:0 auto; padding:56px 16px 40px; }
        .head { display:flex; align-items:flex-end; justify-content:space-between; margin-bottom:24px; }
        .head h2 { margin:0; font-size:40px; line-height:1.1; font-weight:700; }
        .headLink { font-size:14px; color:#222; text-decoration:none; opacity:.8; }
        .headLink:hover { opacity:1; }

        /* Сетка как в рефе: крупные карточки, почти без полей */
        .grid { display:grid; grid-template-columns:1fr; gap:10px; }
        @media (min-width:740px){ .grid{ grid-template-columns:repeat(2,1fr);} }
        @media (min-width:1100px){ .grid{ grid-template-columns:repeat(3,1fr);} }

        .tile { margin:0; padding:0; border:none; background:none; }
        .media { position:relative; width:100%; aspect-ratio: 16 / 10; border-radius:16px; overflow:hidden; }
        .img { object-fit:cover; transform:scale(1); transition:transform .6s ease; display:block; }
        .hoverLayer { position:absolute; inset:0; background:linear-gradient(transparent, rgba(0,0,0,.03));
                      opacity:0; transition:opacity .4s ease; }
        .media:hover .img { transform:scale(1.06); }
        .media:hover .hoverLayer { opacity:1; }
        .media { box-shadow:0 10px 30px rgba(0,0,0,.07); } /* мягкая тень, без белых рамок */

        .cta { text-align:center; margin-top:28px; }
        .button {
          display:inline-flex; align-items:center; gap:10px;
          padding:14px 26px; border-radius:999px;
          border:1px solid #C8A96A; color:#C8A96A; background:#fff;
          font-size:15px; letter-spacing:.2px; text-decoration:none;
          transition:background .2s ease, color .2s ease, box-shadow .2s ease;
          box-shadow:0 4px 14px rgba(200,169,106,.18);
        }
        .button:hover { background:#C8A96A; color:#fff; box-shadow:0 6px 20px rgba(200,169,106,.32); }
        .arrow { transform:translateY(1px); }
      `}</style>
    </section>
  );
}
