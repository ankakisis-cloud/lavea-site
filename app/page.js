"use client";
import FAQ from "../components/FAQ";
import Script from "../next/script"; // для JSON-LD

import HeroFullscreen from "../components/HeroFullscreen";
import PortfolioPreview from "../components/PortfolioPreview";
import AboutShort from "../components/AboutShort";
import ProcessBlock from "../components/ProcessBlock";
import PricingBlock from "../components/PricingBlock";
import "../styles/lavea-additions.css";
import ContactBlock from "../components/ContactBlock";
import HeroSlider from "../components/HeroSlider";


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
        <FAQ />

{/* JSON-LD FAQPage */}
<Script id="ld-faq" type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Что значит «3D = реальность»?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Наши визуализации собираются из доступных к заказу материалов и предметов. Мы фиксируем спецификации в смете, поэтому итоговый интерьер повторяет 3D по цвету, свету и фактурам."
          }
        },
        {
          "@type": "Question",
          "name": "Как вы контролируете стройку?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Авторский надзор по SLA: регулярные выезды, чек-листы контроля, согласование узлов и материалов, фото-отчёты. Любые изменения проходят через менеджера проекта и фиксируются документально."
          }
        },
        {
          "@type": "Question",
          "name": "Как устроена смета и бюджет?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Прозрачная смета по разделам: чистовые материалы, мебель, свет, декор, работы. Указываем ориентиры по lead time и альтернативы по ценовым категориям."
          }
        },
        {
          "@type": "Question",
          "name": "Сроки проекта?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Концепция 2–4 недели, рабочая документация 3–6 недель (в зависимости от метража), комплектация и реализация — по графику поставок и календарю подрядчиков."
          }
        },
        {
          "@type": "Question",
          "name": "Вы занимаетесь комплектацией?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да. Мы подбираем и заказываем мебель, свет, сантехнику, отделку; согласуем логистику, контролируем соответствие спецификациям и срокам."
          }
        },
        {
          "@type": "Question",
          "name": "Где вы работаете?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Москва, Московская область и Европа. Для удалённых объектов используем гибридный формат: выезды по ключевым этапам + онлайновые созвоны и отчёты."
          }
        }
      ]
    })
  }}
/>

      </section>

    </main>
  );
}
