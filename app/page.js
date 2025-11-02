"use client";

import HeroFullscreen from "../components/HeroFullscreen"; // если нет — закомментируй
import PortfolioPreview from "../components/PortfolioPreview";
import AboutShort from "../components/AboutShort";
import ProcessBlock from "../components/ProcessBlock";   // НОВЫЙ блок «Процесс» на главной
import PricingBlock from "../components/PricingBlock";   // «Цены» на главной
import ConsultModal from "../components/ConsultModal";   // модалка «Получить консультацию»
import "@/styles/lavea-additions.css";


export default function Home() {
  return (
    <>
      {/* верхний полноэкранный баннер */}
      {typeof HeroFullscreen !== "undefined" && <HeroFullscreen />}

      {/* превью портфолио */}
      <PortfolioPreview />

      {/* краткий «О нас» + фото + кружки */}
      <AboutShort />

      {/* ПРОЦЕСС — на главной вместо отдельной страницы */}
      <ProcessBlock />

      {/* ЦЕНЫ — карточки как на старой странице «Цены» */}
      <PricingBlock />

      {/* модалка одна на всю страницу */}
      <ConsultModal />
    </>
  );
}
