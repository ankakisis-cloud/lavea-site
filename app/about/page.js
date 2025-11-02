// app/about/page.js — SERVER COMPONENT (без "use client")

import ConsultBtn from "../../components/ConsultBtn";
import "../../styles/lavea-additions.css";


export const metadata = {
  title: "О студии LAVEA",
  description:
    "Философия, подход и эффект LAVEA — архитектурно-дизайнерская студия премиум-класса.",
};

export default function AboutPage() {
  return (
    <main className="aboutPage">

      {/* ===== HERO FULL VIDEO (5 клипов, кросс-фейд) ===== */}
      <section className="aboutHeroVideo fullBleed" aria-label="LAVEA — видео-обложка">
        <div className="aboutHeroVideo__layer">
          {/* Положи файлы в /public (см. ниже). Можно менять имена — тогда поменяй src */}
          <video className="vh v1" src="/about-hero-1.mp4" muted playsInline autoPlay loop preload="auto" />
          <video className="vh v2" src="/about-hero-2.mp4" muted playsInline autoPlay loop preload="auto" />
          <video className="vh v3" src="/about-hero-3.mp4" muted playsInline autoPlay loop preload="auto" />
          <video className="vh v4" src="/about-hero-4.mp4" muted playsInline autoPlay loop preload="auto" />
          <video className="vh v5" src="/about-hero-5.mp4" muted playsInline autoPlay loop preload="auto" />
          <div className="aboutHeroVideo__grain" aria-hidden="true" />
          <div className="aboutHeroVideo__shade" aria-hidden="true" />
        </div>

        <div className="aboutHeroVideo__inner">
          <p className="aboutHeroFull__kicker">СТУДИЯ ПРЕМИАЛЬНОГО ИНТЕРЬЕРА</p>
          <h1 className="aboutHeroFull__title">LAVEA</h1>
          <p className="aboutHeroFull__subtitle">Интерьер с любовью к деталям</p>
          <div className="aboutHeroFull__cta">
            <ConsultBtn className="btn-lavea">Получить консультацию</ConsultBtn>
          </div>
        </div>
      </section>

      {/* ===== О студии ===== */}
      <section className="aboutShell" aria-label="О студии LAVEA">
        <h2>О студии LAVEA</h2>
        <p><strong>LAVEA</strong> — архитектурно-дизайнерская студия премиум-класса, создающая интерьеры, где 3D совпадает с реальностью.</p>
        <p>Мы проектируем пространства в стиле современной итальянской классики и утончённого минимализма, объединяя эстетику, технологии и инженерную точность.</p>
        <p>Наши клиенты — люди, для которых дом — отражение внутреннего состояния. Предприниматели, семьи и профессионалы, ценящие комфорт, прозрачность и уверенность в результате.</p>
        <p>Мы работаем с проектами любой сложности — от городских апартаментов до частных вилл и пентхаусов. Главная цель — создать интерьер, в котором вам хорошо жить, а не просто красиво смотреть.</p>
      </section>

      {/* ===== Философия (фото вместо золотого квадрата) ===== */}
      <section className="aboutShell" aria-label="Философия LAVEA">
        <div className="aboutPhilosophy">
          <div className="aboutPhilosophy__media">
            {/* замени на нужное фото из /public */}
            <img src="/about-philosophy.jpg" alt="Деталь интерьера LAVEA" loading="lazy" />
          </div>
          <div className="aboutPhilosophy__content">
            <h2>Философия LAVEA</h2>
            <p>Мы создаём не просто интерьеры — мы создаём ощущение покоя. В каждом проекте LAVEA есть баланс между инженерной точностью и итальянской чувственностью.</p>
            <p>Красота для нас — не декор, а система, где каждая деталь работает на комфорт и свет. Мы не следуем трендам — мы формируем пространство, которое остаётся актуальным через годы.</p>
            <p>Интерьеры LAVEA не кричат. Они звучат тихо, как уверенность. Мы создаём дома, в которых хочется дышать, думать и быть собой. Всё остальное — лишь фон для жизни.</p>
            <p><strong>LAVEA — гармония инженерии и эмоций.</strong></p>
          </div>
        </div>
      </section>

      {/* ===== Статистика ===== */}
      <section className="aboutStats" aria-label="Статистика LAVEA">
        <div className="aboutStats__grid">
          <div className="stat"><div className="stat__num">8</div><div className="stat__label">лет работы</div></div>
          <div className="stat"><div className="stat__num">120</div><div className="stat__label">реализованных проектов</div></div>
          <div className="stat"><div className="stat__num">17</div><div className="stat__label">городов</div></div>
          <div className="stat"><div className="stat__num">98%</div><div className="stat__label">довольных клиентов</div></div>
        </div>
      </section>

      {/* ===== Заключение (одна кнопка) ===== */}
      <section className="aboutConclusion" aria-label="Заключение">
        <h3>Заключение</h3>
        <p><strong>LAVEA</strong> — это больше, чем дизайн интерьера. Это философия спокойствия, точности и вкуса. Мы создаём пространство, где красота живёт не на рендерах, а в реальности.</p>
        <p><strong>LAVEA. Пространство, в котором всё на своём месте.</strong></p>
        <div className="ctaRow">
          <ConsultBtn className="btn-lavea">Получить консультацию</ConsultBtn>
        </div>
      </section>

    </main>
  );
}
