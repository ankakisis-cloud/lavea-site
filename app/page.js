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
{/* ПОРТФОЛИО */}
<section id="portfolio">
  {/* ваш блок портфолио */}
</section>
      {/* О нас (кнопка "Подробнее" ведёт на /about) */}
      <AboutShort />
{/* О НАС */}
<section id="about">
  {/* ваш блок О нас */}
</section>
      {/* Процесс (якорь #process) */}
      <ProcessBlock />
{/* ПРОЦЕСС */}
<section id="process">
  {/* ваш блок Процесс работы */}
</section>
      {/* Цены (детальные карточки – как у тебя на отдельной, только теперь здесь) */}
      <PricingBlock />
{/* ЦЕНЫ */}
<section id="pricing">
  {/* ваш блок с ценами */}
</section>
      <ContactBlock />
{/* КОНТАКТЫ (если есть блок на главной) */}
<section id="contacts">
  {/* ваш блок Контакты / форма */}
</section>

      <ConsultModal />
    </>
  );
}
