import Image from "next/image";

export const metadata = {
  title: "Портфолио — LAVEA",
  description: "Полное портфолио студии дизайна интерьера LAVEA.",
};

// Добавишь остальные пути по мере загрузки
const images = [
  "/IMG_9728.jpg",
  "/IMG_9735.jpg",
  "/IMG_9737.jpg",
  "/IMG_9747.jpg",
  "/IMG_9751.jpg",
  "/IMG_9755.jpg",
];

export default function PortfolioPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 md:mb-8">
        Полное портфолио
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
        {images.map((src, i) => (
          <figure
            key={i}
            className="group relative overflow-hidden rounded-xl"
          >
            <div className="relative w-full pt-[66%]">
              <Image
                src={src}
                alt={`Проект ${i + 1}`}
                fill
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
            </div>
          </figure>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="#top"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#C8A96A] text-[#C8A96A] text-sm md:text-base tracking-wide hover:bg-[#C8A96A] hover:text-white transition"
        >
          Наверх <span aria-hidden>↑</span>
        </a>
      </div>
    </main>
  );
}
