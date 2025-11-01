"use client";

/**
 * Страница «О нас» — LAVEA
 * Вся верстка внутри файла (без сторонних компонентов),
 * чтобы ничего не отвалилось на билде.
 */

export default function AboutPage() {
  const openModal = () => {
    if (typeof window !== "undefined") {
      window.openContactModal?.();
    }
  };

  return (
    <main className="aboutPage container">

      {/* ===== ГЕРОЙ — светлый премиум-блок ===== */}
      <section className="aboutHero" aria-label="О студии LAVEA">
        <div className="aboutHero__inner">
          <div className="aboutHero__left">
            <h1>О студии LAVEA</h1>
            <p>
              Мы создаём пространства, где 3D-визуал совпадает с реальностью.
              Итальянская эстетика, инженерная точность и спокойствие в каждом решении.
            </p>

            <div className="aboutHero__chips" aria-hidden="true">
              <span>Точность</span>
              <span>Спокойствие</span>
              <span>Совершенство</span>
            </div>

            <button className="btn goldBtn" onClick={openModal}>
              Получить консультацию
            </button>
          </div>

          <div className="aboutHero__right">
            {/* Положи любой красивый кадр в /public/hero/about.jpg (или замени src) */}
            <img
              src="/hero/about.jpg"
              alt="Атмосферный интерьер LAVEA"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* ===== БЛОК: О студии LAVEA ===== */}
      <section className="aboutSection">
        <h2>О студии LAVEA</h2>
        <p>
          <strong>LAVEA</strong> — архитектурно-дизайнерская студия премиум-класса,
          создающая интерьеры, где 3D совпадает с реальностью.
        </p>
        <p>
          Мы проектируем пространства в стиле современной итальянской классики и утончённого
          минимализма, объединяя эстетику, технологии и инженерную точность.
        </p>
        <p>
          Наши клиенты — люди, для которых дом — отражение внутреннего состояния.
          Предприниматели, семьи и профессионалы, ценящие комфорт, прозрачность и уверенность
          в результате.
        </p>
        <p>
          Мы работаем с проектами любой сложности — от городских апартаментов до частных вилл
          и пентхаусов. Главная цель — создать интерьер, в котором вам хорошо жить, а не просто
          красиво смотреть.
        </p>
      </section>

      {/* ===== БЛОК: Философия ===== */}
      <section className="aboutSection">
        <h2>Философия LAVEA</h2>
        <p>
          Мы создаём не просто интерьеры — мы создаём ощущение покоя.
          В каждом проекте LAVEA есть баланс между инженерной точностью и итальянской чувственностью.
        </p>
        <p>
          Красота для нас — не декор, а система, где каждая деталь работает на комфорт и свет.
          Мы не следуем трендам — мы формируем пространство, которое останется актуальным через годы.
          Интерьеры LAVEA не кричат. Они звучат тихо, как уверенность.
        </p>
        <p>
          Мы создаём дома, в которых хочется дышать, думать и быть собой. Всё остальное — лишь фон
          для жизни.
        </p>
        <p><strong>LAVEA — гармония инженерии и эмоций.</strong></p>
      </section>

      {/* ===== БЛОК: В цифрах ===== */}
      <section className="aboutStats" aria-label="LAVEA в цифрах">
        <div className="stat">
          <div className="num">8</div>
          <div className="cap">лет работы</div>
          <p>Создаём интерьеры премиум-класса с 2017 года.</p>
        </div>
        <div className="stat">
          <div className="num">120</div>
          <div className="cap">реализованных проектов</div>
          <p>Каждый проект проходит инженерную проверку и авторский надзор.</p>
        </div>
        <div className="stat">
          <div className="num">17</div>
          <div className="cap">городов</div>
          <p>Москва, Санкт-Петербург, Сочи, Казань, Алания, Дубай, Бодрум и другие.</p>
        </div>
        <div className="stat">
          <div className="num">98%</div>
          <div className="cap">довольных клиентов</div>
          <p>Большинство заказчиков возвращаются и рекомендуют нас.</p>
        </div>
      </section>

      {/* ===== БЛОК: Подход и гарантии ===== */}
      <section className="aboutSection aboutBullets" aria-label="Подход и гарантии">
        <h2>Подход и гарантии</h2>
        <ul>
          <li>
            <span className="rule" />
            <div>
              <strong>Техническая лаборатория чертежей.</strong>
              <p>Каждый проект проходит внутреннюю инженерную проверку перед реализацией.</p>
            </div>
          </li>
          <li>
            <span className="rule" />
            <div>
              <strong>Авторский надзор по SLA.</strong>
              <p>Фото- и видеоотчёты с объекта, регулярные визиты и контроль каждой детали.</p>
            </div>
          </li>
          <li>
            <span className="rule" />
            <div>
              <strong>Прозрачные сметы.</strong>
              <p>Вы видите структуру расходов и скидки от поставщиков.</p>
            </div>
          </li>
          <li>
            <span className="rule" />
            <div>
              <strong>Один куратор.</strong>
              <p>Один контакт от идеи до последнего штриха — быстрее и спокойнее.</p>
            </div>
          </li>
          <li>
            <span className="rule" />
            <div>
              <strong>Интерьер с ДНК владельца.</strong>
              <p>Не «глянец для портфолио», а пространство, в котором действительно комфортно жить.</p>
            </div>
          </li>
        </ul>
      </section>

      {/* ===== БЛОК: Заключение + CTA (открывает модалку) ===== */}
      <section className="aboutConclusion" aria-label="Заключение">
        <h2>Заключение</h2>
        <p>
          <strong>LAVEA</strong> — это больше, чем дизайн интерьера.
          Это философия спокойствия, точности и вкуса. Мы создаём пространство,
          где красота живёт не на рендерах, а в реальности.
        </p>
        <p><strong>LAVEA. Пространство, в котором всё на своём месте.</strong></p>

        <button className="btn goldBtn" onClick={openModal}>
          Получить консультацию
        </button>
      </section>
    </main>
  );
}
