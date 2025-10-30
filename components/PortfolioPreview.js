"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { portfolioImages } from "../lib/portfolioImages";

export default function PortfolioPreview() {
  const router = useRouter();
  const preview = portfolioImages.slice(0, 6); // ← только 6 штук

  return (
    <section className="wrap">
      <div className="head">
        <h2>Портфолио</h2>
        <button type="button" className="headLinkBtn" onClick={() => router.push("/portfolio")}>
          Смотреть всё →
        </button>
      </div>

      <div className="grid">
        {preview.map((src, i) => (
          <figure key={i} className="tile">
            <div className="media">
              <Image src={src} alt={`Проект ${i + 1}`} fill className="img" priority={i < 3} />
            </div>
          </figure>
        ))}
      </div>

      <div className="cta">
        <button type="button" className="button" onClick={() => router.push("/portfolio")}>
          <span>Показать ещё работы</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" strokeWidth="2"
               strokeLinecap="round" strokeLinejoin="round" className="arrow">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <style jsx>{`
        .wrap { max-width:1440px; margin:0 auto; padding:40px 12px 32px; }
        .head { display:flex; align-items:flex-end; justify-content:space-between; margin-bottom:22px; }
        .head h2 { margin:0; font-size:44px; font-weight:700; line-height:1.05; }
        .headLinkBtn { appearance:none; border:none; background:none; padding:0; margin:0; font-size:15px; color:#1c1c1c; opacity:.85; cursor:pointer; }
        .headLinkBtn:hover { opacity:1; }

        .grid { display:grid; grid-template-columns:1fr; gap:12px; }
        @media (min-width:760px){ .grid{ grid-template-columns:repeat(2,1fr);} }
        @media (min-width:1100px){ .grid{ grid-template-columns:repeat(3,1fr);} }

        .tile { margin:0; padding:0; border:0; background:none; }
        .media { position:relative; width:100%; aspect-ratio:4/3; border-radius:18px; overflow:hidden; box-shadow:0 12px 36px rgba(0,0,0,.08); }
        .img { object-fit:cover; transform:scale(1); transition:transform .6s ease; display:block; }
        .media:hover .img { transform:scale(1.07); }

        .cta { text-align:center; margin-top:30px; }
        .button {
          appearance:none; border:none; cursor:pointer;
          display:inline-flex; align-items:center; gap:10px;
          padding:14px 34px; border-radius:999px;
          background:#C8A96A; color:#fff; font-size:16px; font-weight:500; letter-spacing:.3px;
          box-shadow:0 8px 20px rgba(200,169,106,.35);
          transition:background .25s ease, box-shadow .25s ease, transform .1s ease;
        }
        .button:hover { background:#D5B979; box-shadow:0 10px 26px rgba(200,169,106,.5); transform:translateY(-1px); }
        .button:active { transform:translateY(1px); box-shadow:0 4px 12px rgba(200,169,106,.3); }
        .arrow { width:20px; height:20px; }
      `}</style>
    </section>
  );
}
