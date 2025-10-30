"use client";

import Image from "next/image";

const images = [
  "/IMG_9728.jpg",
  "/IMG_9735.jpg",
  "/IMG_9737.jpg",
  "/IMG_9747.jpg",
  "/IMG_9751.jpg",
  "/IMG_9755.jpg",
  // добавь остальные пути
];

export default function PortfolioPage() {
  return (
    <main className="wrap">
      <h1>Полное портфолио</h1>

      <div className="grid">
        {images.map((src, i) => (
          <figure key={i} className="tile">
            <div className="media">
              <Image src={src} alt={`Проект ${i + 1}`} fill className="img" />
              <div className="hoverLayer" />
            </div>
          </figure>
        ))}
      </div>

      <style jsx>{`
        .wrap { max-width:1280px; margin:0 auto; padding:56px 16px 40px; }
        h1 { margin:0 0 24px; font-size:40px; line-height:1.1; font-weight:700; }

        .grid { display:grid; grid-template-columns:1fr; gap:12px; }
        @media (min-width:760px){ .grid{ grid-template-columns:repeat(2,1fr);} }
        @media (min-width:1100px){ .grid{ grid-template-columns:repeat(3,1fr);} }

        .tile { margin:0; padding:0; border:0; background:none; }
        .media {
          position:relative; width:100%; aspect-ratio:4 / 3;
          border-radius:18px; overflow:hidden;
          box-shadow:0 12px 36px rgba(0,0,0,.08);
        }
        .img { object-fit:cover; transition:transform .6s ease; }
        .hoverLayer {
          position:absolute; inset:0;
          background:radial-gradient(ellipse at center, rgba(0,0,0,0), rgba(0,0,0,.06));
          opacity:0; transition:opacity .4s ease;
        }
        .media:hover .img { transform:scale(1.07); }
        .media:hover .hoverLayer { opacity:1; }
      `}</style>
    </main>
  );
}
