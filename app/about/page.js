// SERVER COMPONENT (без "use client")
import ConsultBtn from "../../components/ConsultBtn";
import AboutConclusion from "../../components/AboutConclusion";
import AboutPhilosophy from "../../components/AboutPhilosophy";
import ConsultModal from "../../components/ConsultModal";

import "../../styles/lavea-additions.css";

export const metadata = {
  title: "О студии LAVEA",
  description:
    "Философия, подход и шифры LAVEA — архитектурно-дизайнерская студия премиум-класса.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Блок «О студии» */}
      <section className="aboutShell">
        <h2>О студии LAVEA</h2>
        <p>
          <strong>LAVEA</strong> — архитектурно-дизайнерская студия премиум-класса, создающая интерьеры, где 3D совпадает с реальностью.
        </p>
        <p>
          Мы проектируем пространства в стиле современной итальянской классики и утончённого минимализма, объединяя эстетику, технологии и инженерную точность.
        </p>
        <p>
          Наши клиенты — люди, для которых дом — отражение внутреннего состояния. Предприниматели, семьи и профессионалы, ценящие комфорт, прозрачность и уверенность в результате.
        </p>
        <p>
          Мы работаем с проектами любой сложности — от городских апартаментов до частных вилл и пентхаусов. Главная цель — создать интерьер, в котором вам хорошо жить, а не просто красиво смотреть.
        </p>
      </section>

      {/* Премиальный блок «Философия» (визуальный акцент вместо «скучного текста») */}
      <AboutPhilosophy />

      {/* Аккуратная, ровная статистика в одну строку */}
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

      {/* Заключение + кнопка */}
      <AboutConclusion />
      <div className="ctaRow" aria-hidden="true">
        <ConsultBtn className="btn-lavea">Получить консультацию</ConsultBtn>
      </div>

      {/* Модалка */}
      <ConsultModal />
    </main>
  );
}
