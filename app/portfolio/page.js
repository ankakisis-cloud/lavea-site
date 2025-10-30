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
        .wrap { max-width:1280px; margin:0 auto; padding:56px 16px; }
        h1 { margin:0 0 24px; font-size:40px; line-height:1.1; font-weight:700; }

        .grid { display:grid; grid-template-columns:1fr; gap:10px; }
        @media (min-width:740px){ .grid{ grid-template-columns:repeat(2,1fr);} }
        @media (min-width:1100px){ .grid{ grid-template-columns:repeat(3,1fr);} }

        .tile { margin:0; padding:0; border:none; background:none; }
        .media { position:relative; width:100%; aspect-ratio: 16 / 10; border-radius:16px; overflow:hidden;
                 box-shadow:0 10px 30px rgba(0,0,0,.07); }
        .img { object-fit:cover; transition:transform .6s ease; }
        .hoverLayer { position:absolute; inset:0; background:linear-gradient(transparent, rgba(0,0,0,.05));
                      opacity:0; transition:opacity .4s ease; }
        .media:hover .img { transform:scale(1.06); }
        .media:hover .hoverLayer { opacity:1; }
      `}</style>
    </main>
  );
}
