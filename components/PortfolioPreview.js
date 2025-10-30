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
        <Link href="/portfolio" className="link">Показать полное портфолио</Link>
      </div>

      <div className="grid">
        {previewImages.map((src, i) => (
          <figure key={i} className="card">
            <div className="ratio">
              <Image src={src} alt={`Проект ${i + 1}`} fill className="img" priority={i < 3}/>
            </div>
          </figure>
        ))}
      </div>

      <div className="cta">
        <Link href="/portfolio" className="button">
          Показать ещё работы →
        </Link>
      </div>

      <style jsx>{`
        .wrap { max-width: 1180px; margin: 0 auto; padding: 48px 16px; }
        .head { display:flex; align-items:flex-end; justify-content:space-between; margin-bottom: 20px; }
        .head h2 { font-size: 36px; font-weight: 600; margin:0; }
        .link { font-size:14px; text-decoration: underline; color:#111; }
        .grid { display:grid; grid-template-columns:1fr; gap:12px; }
        @media (min-width:640px){ .grid{ grid-template-columns:repeat(2,1fr);} }
        @media (min-width:1024px){ .grid{ grid-template-columns:repeat(3,1fr);} }
        .card { position:relative; overflow:hidden; border-radius:14px; }
        .ratio { position:relative; width:100%; padding-top:66.66%; } /* 3:2 */
        .img { object-fit:cover; transition: transform .5s ease; }
        .card:hover .img { transform: scale(1.05); }
        .cta { text-align:center; margin-top:28px; }
        .button {
          display:inline-flex; align-items:center; gap:8px;
          padding:12px 22px; border-radius:999px;
          border:1px solid #C8A96A; color:#C8A96A; font-weight:500;
          transition: background .2s ease, color .2s ease;
        }
        .button:hover { background:#C8A96A; color:#fff; }
      `}</style>
    </section>
  );
}
