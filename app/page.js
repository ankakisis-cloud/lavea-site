"use client";

import HeroFullscreen from "../components/HeroFullscreen";
import PortfolioPreview from "../components/PortfolioPreview";
import AboutShort from "../components/AboutShort";
import ProcessBlock from "../components/ProcessBlock";
import PricingBlock from "../components/PricingBlock";
import ConsultModal from "../components/ConsultModal";

// важное: без alias, относительный путь к стилям
import "../styles/lavea-additions.css";

export default function Home() {
  return (
    <main>
      {/* Верхний полноэкранный баннер */}
      <HeroFullscreen />

      {/* Портфолио (6 карточек + кнопка) */}
      <PortfolioPreview />

      {/* Короткий блок «О нас» */}
      <AboutShort />

      {/* Небольшая премиальная полоса со статистикой */}
      <section aria-label="Ключевая статистика LAVEA" className="laveaStats">
        <div className="laveaStats__inner">
          <div className="laveaStats__item" aria-label="лет работы">
            <div className="laveaStats__value">8</div>
            <div className="laveaStats__label">лет работы</div>
          </div>
          <div className="laveaStats__item" aria-label="реализованных проектов">
            <div className="laveaStats__value">120</div>
            <div className="laveaStats__label">реализованных проектов</div>
          </div>
          <div className="laveaStats__item" aria-label="городов">
            <div className="laveaStats__value">17</div>
            <div className="laveaStats__label">городов</div>
          </div>
          <div className="laveaStats__item" aria-label="довольных клиентов">
            <div className="laveaStats__value">98%</div>
            <div className="laveaStats__label">довольных клиентов</div>
          </div>
        </div>
      </section>

      {/* Процесс */}
      <section id="process" aria-label="Наш процесс">
        <ProcessBlock />
      </section>

      {/* Цены */}
      <PricingBlock />

      {/* Модалка консультации (регистрируется один раз на странице) */}
      <ConsultModal />
    </main>
  );
}
