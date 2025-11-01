// app/about/page.js — СТРАНИЦА «О нас» (полная замена содержимого)

import "@/styles/lavea-philosophy.css";
import ConsultBtn from "@/components/ConsultBtn";
import AboutPhilosophy from "@/components/AboutPhilosophy";
import ConsultModal from "@/components/ConsultModal";
import LaveaStatsStrip from "@/components/LaveaStatsStrip"; // уже есть у тебя
import AboutConclusion from "@/components/AboutConclusion"; // уже есть у тебя

export const metadata = {
  title: "О студии LAVEA",
  description:
    "Философия, подход и цифры LAVEA — архитектурно-дизайнерская студия премиум-класса.",
};

export default function AboutPage() {
  return (
    <main className="aboutPage noBottomForm">
      {/* ===== HERO — краткий ввод с кнопкой ===== */}
      <section className="aboutHero">
        <div className="aboutHero__card">
          <p className="aboutKicker">Студия премиального интерьера</p>
          <h1 className="aboutTitle">О студии LAVEA</h1>
          <p className="aboutLead">
            Мы создаём пространства, где 3D-визуал совпадает с реальностью.
            Итальянская эстетика, инженерная точность и спокойствие в каждом решении.
          </p>
          <div className="ctaRow">
            <ConsultBtn className="btn-lavea">Получить консультацию</ConsultBtn>
          </div>
        </div>

        <div className="aboutHero__media" aria-hidden="true">
          {/* Заменишь src на нужное изображение из /public */}
          <img src="/IMG_9728.jpg" alt="Интерьер LAVEA" loading="lazy" />
        </div>
      </section>

      {/* ===== БЛОК: О студии (текст — оставлен из твоей версии) ===== */}
      <section className="aboutShell">
        <h2>О студии LAVEA</h2>
        <p><strong>LAVEA</strong> — архитектурно-дизайнерская студия премиум-класса, создающая интерьеры, где 3D совпадает с реальностью.</p>
        <p>Мы проектируем пространства в стиле современной итальянской классики и утончённого минимализма, объединяя эстетику, технологии и инженерную точность.</p>
        <p>Наши клиенты — люди, для которых дом — отражение внутреннего состояния. Предприниматели, семьи и профессионалы, ценящие комфорт, прозрачность и уверенность в результате.</p>
        <p>Мы работаем с проектами любой сложности — от городских апартаментов до частных вилл и пентхаусов. Главная цель — создать интерьер, в котором вам хорошо жить, а не просто красиво смотреть.</p>
      </section>

      {/* ===== Премиальный блок «Философия» ===== */}
      <AboutPhilosophy />

      {/* ===== Статистика (аккуратная 4-колоночная сетка) ===== */}
      <section className="aboutStats" aria-label="Статистика LAVEA">
        <div className="aboutStats__grid">
          <div className="stat">
            <div className="stat__num">8</div>
            <div className="stat__label">лет работы</div>
          </div>
          <div className="stat">
            <div className="stat__num">120</div>
            <div className="stat__label">реализованных проектов</div>
          </div>
          <div className="stat">
            <div className="stat__num">17</div>
            <div className="stat__label">городов</div>
          </div>
          <div className="stat">
            <div className="stat__num">98%</div>
            <div className="stat__label">довольных клиентов</div>
          </div>
        </div>
      </section>

      {/* ===== Заключение с «аурой» и кнопкой ===== */}
      <section className="aboutConclusion">
        <div className="aboutConclusion__inner">
          <h2>Заключение</h2>
          <p><strong>LAVEA</strong> — это больше, чем дизайн интерьера. Это философия спокойствия, точности и вкуса. Мы создаём пространство, где красота живёт не на рендерах, а в реальности.</p>
          <p><strong>LAVEA. Пространство, в котором всё на своём месте.</strong></p>
          <div className="ctaRow">
            <ConsultBtn className="btn-lavea">Получить консультацию</ConsultBtn>
          </div>
        </div>
      </section>

      {/* Модалка (один раз на странице) */}
      <ConsultModal />
    </main>
  );
}
