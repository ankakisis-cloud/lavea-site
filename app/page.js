"use client";

import HeroFullscreen from "../components/HeroFullscreen";
import PricingBlock from "../components/PricingBlock";
import PortfolioPreview from "@/components/PortfolioPreview";

export default function Home() {
  return (
    <>
      {/* Фуллскрин HERO со слайдером на фоне и твоими кнопками поверх */}
      <HeroFullscreen />

      {/* Блок ПРОЦЕСС (замени коммент на свой контент) */}
      <section id="process" style={{ padding: "60px 0" }}>
        {/* ...твой контент процесса... */}
      </section>
<PortfolioPreview />

      {/* Блок ЦЕНЫ — карточки */}
      <PricingBlock />

      {/* Блок ОТЗЫВЫ */}
      <section id="reviews" style={{ padding: "60px 0" }}>
        {/* ...твои отзывы... */}
      </section>
    </>
  );
}
