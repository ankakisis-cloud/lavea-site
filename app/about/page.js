// app/about/page.js  — SERVER COMPONENT (без "use client")

import ConsultBtn from "../../components/ConsultBtn";
import "@/styles/lavea-additions.css";

export const metadata = {
  title: "О студии LAVEA",
  description:
    "Философия, подход и цифры LAVEA — архитектурно-дизайнерская студия премиум-класса.",
};

export default function AboutPage() {
  return (
    <main className="aboutPage">
      {/* ======= HERO ======= */}
      <section className="aboutHero">
        <div className="aboutHero__text">
          <p className="aboutKicker">Студия премиального интерьера</p>
          <h1 className="aboutTitle">О студии LAVEA</h1>
          <p className="aboutLead">
            Мы создаём пространства, где 3D-визуал совпадает с реальностью.
            Итальянская эстетика, инженерная точность и спокойствие в каждом решении.
          </p>
          <div className="aboutCtaRow">
            <ConsultBtn className="btn-lavea">Получить консультацию</ConsultBtn>
          </div>
          <ul className="aboutBullets">
            <li>Точность</li>
            <li>Спокойствие</li>
            <li>Совершенство</li>
          </ul>
        </div>

        <div className="aboutHero__media">
          {/* Подставь свой файл, сейчас безопасный плейсхолдер из /public */}
          <img src="/IMG_9728.jpg" alt="Интерьер LAVEA" loading="lazy" />
        </div>
      </section>

      {/* ======= БЛОК: О студии ======= */}
      <section className="aboutShell">
        <h2>О студии LAVEA</h2>
        <p>
          <strong>LAVEA</strong> — архитектурно-дизайнерская студия премиум-класса,
          создающая интерьеры, где 3D совпадает с реальностью.
        </p>
        <p>
          Мы проектируем пространства в стиле современной итальянской классики и
          утончённого минимализма, объединяя эстетику, технологии и инженерную точность.
        </p>
        <p>
          Наши клиенты — люди, для которых дом — отражение внутреннего состояния.
          Предприниматели, семьи и профессионалы, ценящие комфорт, прозрачность и уверенность в результате.
        </p>
        <p>
          Мы работаем с проектами любой сложности — от городских апартаментов до частных вилл и пентхаусов.
          Главная цель — создать интерьер, в котором вам хорошо жить, а не просто красиво смотреть.
        </p>
      </section>

      {/* ======= БЛОК: Философия ======= */}
      <section className="aboutShell">
        <h2>Философия LAVEA</h2>
        <p>
          Мы создаём не просто интерьеры — мы создаём ощущение покоя. В каждом проекте LAVEA есть баланс
          между инженерной точностью и итальянской чувственностью.
        </p>
        <p>
          Красота для нас — не декор, а система, где каждая деталь работает на комфорт и свет.
          Мы не следуем трендам — мы формируем пространство, которое останется актуальным через годы.
        </p>
        <p>
          Интерьеры LAVEA не кричат. Они звучат тихо, как уверенность. Мы создаём дома, в которых хочется
          дышать, думать и быть собой. Всё остальное — лишь фон для жизни.
        </p>
        <p><strong>LAVEA — гармония инженерии и эмоций.</strong></p>
      </section>

      {/* ======= Цифры ======= */}
      <section className="aboutStats">
        <div className="aboutStat">
          <div className="n">8</div>
          <div className="d">лет работы</div>
        </div>
        <div className="aboutStat">
          <div className="n">120</div>
          <div className="d">реализованных проектов</div>
        </div>
        <div className="aboutStat">
          <div className="n">17</div>
          <div className="d">городов</div>
        </div>
        <div className="aboutStat">
          <div className="n">98%</div>
          <div className="d">довольных клиентов</div>
        </div>
      </section>

      {/* ======= Заключение с мягким фоном ======= */}
      <section className="aboutConclusion">
        <h3>Заключение</h3>
        <p>
          <strong>LAVEA</strong> — это больше, чем дизайн интерьера.
          Это философия спокойствия, точности и вкуса. Мы создаём пространство,
          где красота живёт не на рендерах, а в реальности.
        </p>
        <p><strong>LAVEA. Пространство, в котором всё на своём месте.</strong></p>
        <ConsultBtn className="btn-lavea aboutConclusion__btn">Получить консультацию</ConsultBtn>
      </section>
    </main>
  );
}
