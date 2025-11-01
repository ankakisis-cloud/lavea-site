"use client";

import HeroFullscreen from "../components/HeroFullscreen";
import PortfolioPreview from "../components/PortfolioPreview";
import AboutShort from "../components/AboutShort";
import ProcessBlock from "../components/ProcessBlock";
import PricingBlock from "../components/PricingBlock";

export default function Home() {
  return (
    <>
      {/* ВЕРХНИЙ ПОЛНОЭКРАННЫЙ БАННЕР */}
      <HeroFullscreen />

      {/* ПОРТФОЛИО (6 карточек + кнопка) */}
      <PortfolioPreview />

      {/* НОВЫЙ КОРОТКИЙ БЛОК «О НАС» — красивый, лаконичный */}
      <AboutShort />

      {/* ПРОЦЕСС */}
      <section id="process" aria-label="Наш процесс">
        <ProcessBlock />
      </section>

      {/* ЦЕНЫ */}
      <PricingBlock />
      {/* отзывы, контакты — далее по странице */}
    </>
  );
}
