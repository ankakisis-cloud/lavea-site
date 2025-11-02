"use client";

export default function ProcessBlock() {
  const steps = [
    { title: "Заявка и бриф", desc: "Обсуждаем задачи, собираем вводные, фиксируем сроки." },
    { title: "Обмеры и ТЗ", desc: "Делаем точные обмеры, утверждаем техническое задание." },
    { title: "Планировочные решения", desc: "Несколько вариантов, выбираем оптимальный." },
    { title: "3D-визуализация", desc: "Фотореалистичные ракурсы всех ключевых помещений." },
    { title: "Рабочая документация", desc: "Полный комплект чертежей и спецификаций для строителей." },
    { title: "Комплектация", desc: "Сметы, поставки, контроль логистики и сроков." },
    { title: "Авторский надзор", desc: "Контроль соответствия стройки проекту до финала." },
    { title: "Финальное оформление", desc: "Декорирование и подготовка к сдаче проекта." },
  ];

  return (
    <section id="process" className="processBlock" aria-label="Процесс работы">
      <div className="processBlock__inner">
        <h2 className="title">Процесс работы</h2>

        <div className="processGrid">
          {steps.map((s, i) => (
            <article key={i} className="stepCard">
              <div className="stepCard__num">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="stepCard__title">{s.title}</h3>
              <p className="stepCard__desc">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
