// app/about/page.js
"use client";

export const metadata = {
  title: "О студии LAVEA",
  description: "Философия, подход и цифры LAVEA — архитектурно-дизайнерской студии премиум-класса.",
};

export default function AboutPage() {
  const openModal = () => {
    if (typeof window !== "undefined") {
      window.openContactModal?.();
    }
  };

  return (
    <main className="aboutShell container">
      {/* ===== ГЕРОЙ  ===== */}
      <section className="aboutHero">
        <div className="aboutHero__card">
          <h1>О студии LAVEA</h1>
          <p>
            Мы создаём пространства, где 3D-визуал совпадает с реальностью. Итальянская эстетика,
            инженерная точность и спокойствие в каждом решении.
          </p>
          <div className="aboutHero__tags">
            <span>точность</span>
            <span>спокойствие</span>
            <span>совершенство</span>
          </div>
          <button className="btn btn-lavea" onClick={openModal}>Получить консультацию</button>
        </div>

        <div className="aboutHero__media">
          {/* Используем один из твоих уже загруженных снимков из /public */}
          <img src="/IMG_9731.jpg" alt="Интерьер LAVEA" loading="lazy" decoding="async" />
        </div>
      </section>

      {/* ===== БЛОК О СТУДИИ ===== */}
      <section className="aboutBlock">
        <h2>О студии LAVEA</h2>
        <div className="aboutLead">
          <p>
            <strong>LAVEA</strong> — архитектурно-дизайнерская студия премиум-класса, создающая интерьеры, где
            3D совпадает с реальностью.
          </p>
          <p>
            Мы проектируем пространства в стиле современной итальянской классики и утончённого минимализма,
            объединяя эстетику, технологии и инженерную точность.
          </p>
          <p>
            Наши клиенты — люди, для которых дом — отражение внутреннего состояния. Предприниматели, семьи и
            профессионалы, ценящие комфорт, прозрачность и уверенность в результате.
          </p>
          <p>
            Мы работаем с проектами любой сложности — от городских апартаментов до частных вилл и пентхаусов.
            Главная цель — создать интерьер, в котором вам хорошо жить, а не просто красиво смотреть.
          </p>
        </div>
      </section>

      {/* ===== ФИЛОСОФИЯ (с боковой золотой линией) ===== */}
      <section className="aboutPhilosophy">
        <div className="aboutPhilosophy__rail" aria-hidden="true" />
        <div className="aboutPhilosophy__content">
          <h2>Философия LAVEA</h2>
          <p>
            Мы создаём не просто интерьеры — мы создаём ощущение покоя. В каждом проекте LAVEA есть баланс между
            инженерной точностью и итальянской чувственностью.
          </p>
          <p>
            Красота для нас — не декор, а система, где каждая деталь работает на комфорт и свет. Мы не следуем трендам —
            мы формируем пространство, которое останется актуальным через годы.
          </p>
          <p>
            Интерьеры LAVEA не кричат. Они звучат тихо, как уверенность. Мы создаём дома, в которых хочется дышать,
            думать и быть собой. Всё остальное — лишь фон для жизни.
          </p>
          <p><strong>LAVEA — гармония инженерии и эмоций.</strong></p>
        </div>
      </section>

      {/* ===== ЦИФРЫ (премиальная сетка) ===== */}
      <section className="aboutStats">
        <div className="aboutStats__grid">
          <div className="stat">
            <div className="stat__num">8</div>
            <div className="stat__label">лет работы</div>
            <p className="stat__desc">Создаём интерьеры премиум-класса с 2017 года.</p>
          </div>
          <div className="stat">
            <div className="stat__num">120</div>
            <div className="stat__label">реализованных проектов</div>
            <p className="stat__desc">Каждый проект проходит инженерную проверку и авторский надзор.</p>
          </div>
          <div className="stat">
            <div className="stat__num">17</div>
            <div className="stat__label">городов</div>
            <p className="stat__desc">Москва, Санкт-Петербург, Сочи, Казань, Алания, Дубай, Бодрум и др.</p>
          </div>
          <div className="stat">
            <div className="stat__num">98%</div>
            <div className="stat__label">довольных клиентов</div>
            <p className="stat__desc">Большинство возвращаются и рекомендуют нас близким.</p>
          </div>
        </div>
      </section>

      {/* ===== ПОДХОД И ГАРАНТИИ (4 пункта) ===== */}
      <section className="aboutPromises">
        <div className="promises__grid">
          <div className="promise">
            <h3>Техническая лаборатория чертежей</h3>
            <p>Каждый проект проходит внутреннюю инженерную проверку перед реализацией.</p>
          </div>
          <div className="promise">
            <h3>Авторский надзор по SLA</h3>
            <p>Фото- и видеоотчёты с объекта, регулярные визиты и контроль каждой детали.</p>
          </div>
          <div className="promise">
            <h3>Прозрачные сметы</h3>
            <p>Все цифры открыты: вы видите структуру расходов и скидки от поставщиков.</p>
          </div>
          <div className="promise">
            <h3>Один куратор</h3>
            <p>Один контакт от идеи до последнего штриха — быстрее и спокойнее.</p>
          </div>
        </div>
      </section>

      {/* ===== ЗАКЛЮЧЕНИЕ + CTA ===== */}
      <section className="aboutConclusion">
        <h2>Заключение</h2>
        <p>
          <strong>LAVEA</strong> — это больше, чем дизайн интерьера. Это философия спокойствия, точности и вкуса.
          Мы создаём пространство, где красота живёт не на рендерах, а в реальности.
        </p>
        <p><strong>LAVEA. Пространство, в котором всё на своём месте.</strong></p>

        <div className="ctaRow">
          <button className="btn btn-lavea btn-lavea--lg" onClick={openModal}>
            Получить консультацию
          </button>
        </div>
      </section>
    </main>
  );
}
