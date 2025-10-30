"use client";
import React from "react";

export default function PricingBlock() {
  const items = [
    {
      title: "Авторская концепция",
      desc: "Уникальная идея и визуальное видение интерьера. Реализацию берёте на себя или делаем совместно.",
      price: "от 6 000 ₽ / м²",
    },
    {
      title: "Полный дизайн-проект",
      desc: "Полный пакет чертежей и спецификаций, чтобы строители реализовали интерьер без ошибок.",
      price: "от 7 000 ₽ / м²",
    },
    {
      title: "Дизайн + Авторский надзор",
      desc: "Контроль реализации задуманного. Фикс или почасовой формат — обсуждается отдельно.",
      price: "от 9 000 ₽ / м² + авторский надзор",
    },
    {
      title: "Дизайн + комплектация под ключ",
      desc: "Готовое пространство: мебель, свет, декор. Полная логистика и сопровождение.",
      price: "от 10 000 ₽ / м² + % от комплектации",
    },
  ];

  return (
    <section id="pricing" className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Цены
        </h2>

        {/* Сетка карточек — 4 в ряд */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col justify-between bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6">
                <div className="text-lg font-semibold mb-4 text-gray-900">
                  {item.price}
                </div>
                <button className="w-full bg-black text-white py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition">
                  Обсудить проект
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
