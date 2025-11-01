"use client";

export default function AboutConclusion() {
  return (
    <section className="aboutConclusion">
      <div className="aboutConclusion__inner">
        <h2>Заключение</h2>
        <p>
          <strong>LAVEA</strong> — это больше, чем дизайн интерьера. Это философия
          спокойствия, точности и вкуса. Мы создаём пространство, где красота живёт
          не на рендерах, а в реальности.
        </p>
        <p>
          <strong>LAVEA. Пространство, в котором всё на своём месте.</strong>
        </p>

        <button
          className="btn btn-lavea"
          onClick={() => window.openContactModal?.()}
        >
          Получить консультацию
        </button>
      </div>
    </section>
  );
}
