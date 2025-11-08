// app/about/page.js

import AboutHeroSlider from "../../components/AboutHeroSlider";

export const metadata = {
  title: "О студии LAVEA",
  description:
    "Студия премиум-класса: итальянская эстетика, инженерная точность, команда и процесс без хаоса.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "О студии LAVEA — команда и философия",
    description:
      "Проектируем интерьеры с душой и системностью: 3D=реальность, прозрачные сметы, надзор-SLA.",
    url: "/about",
    images: [{ url: "/og/lavea-og.jpg" }],
  },
};


export default function AboutPage() {
  return (
    <main>
      {/* HERO: слайдер из 5 видео */}
      <AboutHeroSlider />

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

      {/* Философия (картинка + текст) */}
      <section className="aboutShell">
        <div className="aboutPhilosophy">
          <div className="aboutPhilosophy__media">
            {/* ФАЙЛ лежит в /public как на скрине */}
            <img src="/about-philosophy.jpg" alt="Философия LAVEA" />
          </div>
          <div className="aboutPhilosophy__text">
            <h3>Философия LAVEA</h3>
            <p>
              Мы создаём не просто интерьеры — мы создаём ощущение покоя. В каждом проекте LAVEA есть баланс между
              инженерной точностью и итальянской чувственностью. Красота для нас — не декор, а система, где каждая
              деталь работает на комфорт и свет. Мы не следуем трендам — формируем пространство, которое остаётся
              актуальным через годы.
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
        </div>
      </section>
    </main>
  );
}
