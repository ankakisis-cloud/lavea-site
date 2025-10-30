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
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Портфолио</h2>
        <Link
          href="/portfolio"
          className="rounded-full border px-4 py-2 text-sm hover:shadow-md transition"
        >
          Показать полное портфолио
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {previewImages.map((src, i) => (
          <div key={i} className="relative overflow-hidden rounded-2xl shadow-sm">
            <Image
              src={src}
              alt={`Проект ${i + 1}`}
              width={800}
              height={600}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
