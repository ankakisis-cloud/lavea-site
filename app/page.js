"use client";

import HeroFullscreen from "../components/HeroFullscreen";
import PortfolioPreview from "../components/PortfolioPreview";
import AboutShort from "../components/AboutShort";
import ProcessBlock from "../components/ProcessBlock";
import PricingBlock from "../components/PricingBlock";

export default function Home() {
  return (
    <>
      {/* Верхний полноэкранный блок */}
      <HeroFullscreen />

      {/* Портфолио (6 карточек + кнопка) */}
      <PortfolioPreview />

      {/* КОРОТКИЙ «О НАС» — сразу после портфолио */}
      <AboutShort />

      {/* ПРОЦЕСС — обёрнут якорем для кнопки в шапке */}
      <section id="process" aria-label="Наш процесс">
        <ProcessBlock />
      </section>

      {/* Цены */}
      <PricingBlock />

      {/* Якорь для ссылки «Контакты» в шапке */}
      <section id="contacts" aria-label="Контакты" />
    </>
  );
}
