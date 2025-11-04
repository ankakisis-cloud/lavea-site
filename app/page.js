"use client";

import HeroFullscreen from "../components/HeroFullscreen";
import PortfolioPreview from "../components/PortfolioPreview";
import AboutShort from "../components/AboutShort";
import ProcessBlock from "../components/ProcessBlock";
import PricingBlock from "../components/PricingBlock";
import ConsultModal from "../components/ConsultModal";
import "../styles/lavea-additions.css";
import ContactBlock from "../components/ContactBlock";
import HeroSlider from "@/components/HeroSlider"; // наш новый слайдер

// ЕДИНСТВЕННЫЙ default-экспорт
export default function Home() {
  return (
    <main>
      {/* Герой-слайдер — вместо старого героя/фона */}
      <HeroSlider />

      {/* ПОРТФОЛИО (из карточки — ссылка на /portfolio) */}
      <PortfolioPreview />

      {/* ПОРТФОЛИО (якорь на главной, если нужно) */}
      <section id="portfolio">
        {/* твой блок портфолио, если он у тебя есть на главной */}
      </section>

      {/* О НАС (кнопка "Подробнее" ведёт на /about) */}
      <AboutShort />

      {/* ПРОЦЕСС (якорь #process) */}
      <section id="process">
        <ProcessBlock />
      </section>

      {/* ЦЕНЫ */}
      <PricingBlock />

      {/* КОНТАКТЫ (якорь #contact) */}
      <section id="contact">
        <ContactBlock />
      </section>

      {/* Модалка консультации, если используется глобально */}
      <ConsultModal />
    </main>
  );
}
