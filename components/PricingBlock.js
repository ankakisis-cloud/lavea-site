"use client";
import React from "react";

export default function PricingBlock() {
  // Можно править тут тексты и цены
  const items = [
    {
      title: "Авторская концепция",
      desc:
        "Уникальная идея и визуальное видение интерьера. Реализацию берёте на себя или делаем совместно.",
      price: "от 6 000 ₽ / м²",
    },
    {
      title: "Полный дизайн-проект",
      desc:
        "Полный пакет чертежей и спецификаций, чтобы строители реализовали интерьер без ошибок.",
      price: "от 7 000 ₽ / м²",
    },
    {
      title: "Дизайн + Авторский надзор",
      desc:
        "Контроль реализации задумки. Фикс или почасовой — обсуждается отдельно.",
      price: "от 9 000 ₽ / м² + авторский надзор",
    },
    {
      title: "Дизайн + комплектация под ключ",
      desc:
        "Готовое пространство: мебель, свет, декор. Полная логистика и сопровождение.",
      price: "от 10 000 ₽ / м² + % от комплектации",
    },
  ];

  return (
    <section id="pricing" className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-12">
          Цены
        </h2>

        {/* 4 в ряд на десктопе, 2 — на планшете, 1 — на мобилке */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <article
              key={i}
              className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div>
                <h3 className="text-xl font-bold leading-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* ЦЕННИК ПОД ОПИСАНИЕМ */}
              <div className="mt-6">
                <div className="text-base font-semibold mb-4">
                  {item.price}
                </div>
                <button className="w-full rounded-xl bg-black text-white py-2.5 text-sm font-medium hover:bg-neutral-800 transition">
                  Обсудить проект
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
