"use client";

export default function FAQ() {
  const items = [
    {
      q: "Что значит «3D = реальность»?",
      a: "Наши визуализации собираются из доступных к заказу материалов и предметов. Мы фиксируем спецификации в смете, поэтому итоговый интерьер повторяет 3D по цвету, свету и фактурам."
    },
    {
      q: "Как вы контролируете стройку?",
      a: "Авторский надзор по SLA: регулярные выезды, чек-листы контроля, согласование узлов и материалов, фото-отчёты. Любые изменения проходят через менеджера проекта и фиксируются документально."
    },
    {
      q: "Как устроена смета и бюджет?",
      a: "Прозрачная смета по разделам: чистовые материалы, мебель, свет, декор, работы. Указываем ориентиры по lead time и альтернативы по ценовым категориям."
    },
    {
      q: "Сроки проекта?",
      a: "Концепция 2–4 недели, рабочая документация 3–6 недель (в зависимости от метража), комплектация и реализация — по графику поставок и календарю подрядчиков."
    },
    {
      q: "Вы занимаетесь комплектацией?",
      a: "Да. Мы подбираем и заказываем мебель, свет, сантехнику, отделку; согласуем логистику, контролируем соответствие спецификациям и срокам."
    },
    {
      q: "Где вы работаете?",
      a: "Москва, Московская область и Европа. Для удалённых объектов используем гибридный формат: выезды по ключевым этапам + онлайновые созвоны и отчёты."
    }
  ];

  return (
    <section id="faq" className="faqShell">
      <h2 className="faqTitle">Ответы на частые вопросы</h2>
      <div className="faqList">
        {items.map((it, i) => (
          <details key={i} className="faqItem">
            <summary className="faqQ">{it.q}</summary>
            <div className="faqA">{it.a}</div>
          </details>
        ))}
      </div>
      <style jsx>{`
        .faqShell{
          max-width: 1100px; margin: 0 auto; padding: 56px 16px;
        }
        .faqTitle{
          font-family: var(--font-heading, serif);
          font-size: clamp(26px, 2.6vw, 36px);
          margin: 0 0 20px;
        }
        .faqList{ display: grid; gap: 12px; }
        .faqItem{
          border: 1px solid var(--border, #e8e8e8);
          border-radius: 16px; padding: 16px 18px;
          background: #fff; box-shadow: var(--shadow, 0 8px 30px rgba(0,0,0,.06));
        }
        .faqQ{
          cursor: pointer; font-weight: 600;
          list-style: none; outline: none;
        }
        .faqA{ margin-top: 10px; color: var(--ink, #111); line-height: 1.7; }
      `}</style>
    </section>
  );
}
