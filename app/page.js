"use client";

import HeroFullscreen from "../components/HeroFullscreen";
import PortfolioPreview from "../components/PortfolioPreview";
import AboutShort from "../components/AboutShort";
import ProcessBlock from "../components/ProcessBlock";
import PricingBlock from "../components/PricingBlock";
import ConsultModal from "../components/ConsultModal";
import "@/styles/lavea-philosophy.css";

export default function Home() {
  return (
    <>
      {/* верхний полноэкранный баннер */}
      <HeroFullscreen />

      {/* портфолио (6 карточек + кнопка) */}
      <PortfolioPreview />

      {/* короткий блок «О нас» на главной */}
      <AboutShort />

      {/* процесс */}
      <section id="process" aria-label="Наш процесс">
        <ProcessBlock />
      </section>

      {/* цены */}
      <PricingBlock />

      {/* модалка — чтобы кнопки «Получить консультацию» работали и на главной */}
      <ConsultModal />
    </>
  );
}
