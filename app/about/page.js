"use client";

export const metadata = {
  title: "О студии LAVEA",
  description: "Интерьерная студия премиум-класса — современная итальянская классика, инженерная точность и спокойная эстетика.",
};

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <section className="aboutHeroVideo" aria-label="О студии LAVEA">
        <div className="aboutHero__overlay">
          <div className="aboutHero__inner">
            <div className="aboutHero__kicker">Студия премиального интерьера</div>
            <h1 className="aboutHero__title">LAVEA</h1>
            <p className="aboutHero__lead">Интерьер с любовью к деталям</p>
            <a href="/#contacts" className="goldBtn">Получить консультацию</a>
          </div>
        </div>
      </section>

      {/* О студии */}
      <section className="wrap">
        <h2 className="title">О студии LAVEA</h2>
        <p>
          <strong>LAVEA</strong> — архитектурно-дизайнерская студия премиум-класса, создающая интерьеры, где 3D совпадает с реальностью.
          Мы проектируем пространства в стиле современной итальянской классики и уточнённого минимализма,
          объединяя эстетику, технологии и инженерную точность.
        </p>
        <p>
          Наши клиенты — люди, для которых дом — отражение внутреннего состояния. Предприниматели, семьи и профессионалы,
          ценящие комфорт, прозрачность и уверенность в результате.
        </p>
        <p>
          Мы работаем с проектами любой сложности — от городских апартаментов до частных вилл и пентхаусов.
          Главная цель — создать интерьер, в котором вам хорошо жить, а не просто красиво смотреть.
        </p>
      </section>

      {/* Философия */}
      <section className="aboutShell">
        <div className="aboutPhilosophy">
          <div className="aboutPhilosophy__media">
            <img src="/about/philosophy.jpg" alt="Философия LAVEA" />
          </div>
          <div className="aboutPhilosophy__text">
            <h3>Философия LAVEA</h3>
            <p>
              Мы создаём не просто интерьеры — мы создаём ощущение покоя. В каждом проекте LAVEA есть баланс между
              инженерной точностью и итальянской чувственностью.
            </p>
            <p>
              Красота для нас — не декор, а система, где каждая деталь работает на комфорт и свет. Мы не следуем трендам —
              формируем пространство, которое остаётся актуальным через годы.
            </p>
            <p><strong>LAVEA — гармония инженерии и эмоций.</strong></p>
          </div>
        </div>
      </section>

      {/* Цифры */}
      <section className="aboutStatsLavea">
        <div className="aboutStatsLavea__inner">
          {[
            { num: "8",   label: "лет работы" },
            { num: "120", label: "реализованных проектов" },
            { num: "17",  label: "городов" },
            { num: "98%", label: "довольных клиентов" },
          ].map((it, i) => (
            <div className="aboutStatsLavea__item" key={i}>
              <span className="aboutStatsLavea__circle">
                <span className="aboutStatsLavea__num">{it.num}</span>
              </span>
              <div className="aboutStatsLavea__label">{it.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Заключение */}
      <section className="aboutConclusion">
        <div className="aboutConclusion__inner">
          <h3>Заключение</h3>
          <p>
            LAVEA — это больше, чем дизайн интерьера. Это философия спокойствия, точности и вкуса.
            Мы создаём пространство, где красота живёт не на рендерах, а в реальности.
          </p>
          <p><strong>LAVEA. Пространство, в котором всё на своём месте.</strong></p>
          <a href="/#contacts" className="goldBtn">Получить консультацию</a>
        </div>
      </section>

      {/* === Стили оставляем как есть === */}
      <style jsx>{`
        .aboutHeroVideo {
          height: clamp(420px, 68vh, 720px);
          background: url('/about/hero.jpg') center/cover no-repeat;
          border-radius: 28px;
          margin: 16px;
          position: relative;
          overflow: hidden;
        }
        .aboutHero__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,.36), rgba(0,0,0,.38));
        }
        .aboutHero__inner {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 10px;
          color: #fff;
          text-align: center;
        }
        .aboutHero__title {
          font-family: var(--font-heading);
          font-size: clamp(38px, 7vw, 84px);
          font-weight: 400;
          margin: 0;
        }
      `}</style>
    </main>
  );
}
