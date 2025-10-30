import Image from "next/image";

export const metadata = {
  title: "Портфолио — LAVEA",
  description: "Полное портфолио студии дизайна интерьера LAVEA.",
};

const images = [
  "/IMG_9728.jpg",
  "/IMG_9735.jpg",
  "/IMG_9737.jpg",
  "/IMG_9747.jpg",
  "/IMG_9751.jpg",
  "/IMG_9755.jpg",
  // добавишь остальные по мере загрузки
];

export default function PortfolioPage() {
  return (
    <main className="wrap">
      <h1>Полное портфолио</h1>

      <div className="grid">
        {images.map((src, i) => (
          <figure key={i} className="card">
            <div className="ratio">
              <Image src={src} alt={`Проект ${i + 1}`} fill className="img" />
            </div>
          </figure>
        ))}
      </div>

      <style jsx>{`
        .wrap { max-width:1180px; margin:0 auto; padding:48px 16px; }
        h1 { font-size:36px; font-weight:600; margin:0 0 20px; }
        .grid { display:grid; grid-template-columns:1fr; gap:12px; }
        @media (min-width:640px){ .grid{ grid-template-columns:repeat(2,1fr);} }
        @media (min-width:1024px){ .grid{ grid-template-columns:repeat(3,1fr);} }
        .card { position:relative; overflow:hidden; border-radius:14px; }
        .ratio { position:relative; width:100%; padding-top:66.66%; } /* 3:2 */
        .img { object-fit:cover; transition: transform .5s ease; }
        .card:hover .img { transform: scale(1.05); }
      `}</style>
    </main>
  );
}
