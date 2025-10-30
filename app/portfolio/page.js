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
];

export default function PortfolioPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">Полное портфолио</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {images.map((src, i) => (
          <div key={i} className="relative overflow-hidden rounded-2xl shadow-sm">
            <Image
              src={src}
              alt={`Проект ${i + 1}`}
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
