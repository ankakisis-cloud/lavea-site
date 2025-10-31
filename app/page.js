"use client";

import HeroFullscreen from "../components/HeroFullscreen";
import PortfolioPreview from "../components/PortfolioPreview";
import ProcessBlock from "../components/ProcessBlock";
import PricingBlock from "../components/PricingBlock";

export default function Home() {
  return (
    <>
      {/* Верхний полноэкранный блок */}
      <HeroFullscreen />

      {/* Портфолио (6 карточек + кнопка) */}
      <PortfolioPreview />

      {/* НОВЫЙ БЛОК ПРОЦЕСС — стоит между Портфолио и Ценами */}
      <ProcessBlock />

      {/* Цены */}
      <PricingBlock />

      {/* Отзывы, контакты и т.п. — дальше по странице */}
    </>
  );
}
