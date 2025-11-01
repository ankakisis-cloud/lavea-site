"use client";

import HeroFullscreen from "../components/HeroFullscreen";
import PortfolioPreview from "../components/PortfolioPreview";
import AboutShort from "../components/AboutShort";
import ProcessBlock from "../components/ProcessBlock";
import PricingBlock from "../components/PricingBlock";
import ConsultModal from "../components/ConsultModal";

// общий премиум-стиль (без алиасов)
import "../styles/lavea-additions.css";

export default function Home() {
  return (
    <main className="homeNoStats">
      {/* ВЕРХНИЙ ПОЛНОЭКРАННЫЙ БАННЕР */}
      <HeroFullscreen />

      {/* ПОРТФОЛИО (6 карточек + кнопка) */}
      <PortfolioPreview />

      {/* КОРОТКИЙ БЛОК «О НАС» — БЕЗ ЛЮБОЙ СТАТИСТИКИ */}
      <AboutShort />

      {/* ПРОЦЕСС */}
      <section id="process" aria-label="Наш процесс">
        <ProcessBlock />
      </section>

      {/* ЦЕНЫ */}
      <PricingBlock />

      {/* МОДАЛКА КОНСУЛЬТАЦИИ */}
      <ConsultModal />

      {/* На всякий случай глушим любые «хвосты» статистики, если где-то оставались старые блоки/классы */}
      <style jsx global>{`
        .homeNoStats .laveaStats,
        .homeNoStats .aboutStats,
        .homeNoStats .laveaStats_strip,
        .homeNoStats .LaveaStatsStrip {
          display: none !important;
        }
      `}</style>
    </main>
  );
}
