"use client";

import HeroFullscreen from "../components/HeroFullscreen";
import PortfolioPreview from "../components/PortfolioPreview";
import AboutShort from "../components/AboutShort";
import ProcessBlock from "../components/ProcessBlock";
import PricingBlock from "../components/PricingBlock";
import ConsultModal from "../components/ConsultModal";
import "../styles/lavea-additions.css";
import ContactBlock from "../components/ContactBlock";


export default function Home() {
  return (
    <>
      <HeroFullscreen />

      {/* Портфолио (из него кнопка "Посмотреть полное портфолио" ведёт на /portfolio) */}
      <PortfolioPreview />

      {/* О нас (кнопка "Подробнее" ведёт на /about) */}
      <AboutShort />

      {/* Процесс (якорь #process) */}
      <ProcessBlock />

      {/* Цены (детальные карточки – как у тебя на отдельной, только теперь здесь) */}
      <PricingBlock />

      <ContactBlock />


      <ConsultModal />
    </>
  );
}
