"use client";
import { useState, useRef } from "react";

/**
 * Премиальный FAQ с анимацией раскрытия и золотой подсветкой.
 * — плавный height + opacity
 * — золотая обводка/свечение при hover и когда открыт
 * — аккуратная типографика в стиле LAVEA
 */
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
      a: "Концепция 2–4 недели, рабочая документация 3–6 недель (от метража), комплектация и реализация — по графику поставок и календарю подрядчиков."
    },
    {
      q: "Вы занимаетесь комплектацией?",
      a: "Да. Подбираем и заказываем мебель, свет, сантехнику, отделку; логистика и контроль соответствия спецификациям — на нас."
    },
    {
      q: "Где вы работаете?",
      a: "Москва, Московская область и Европа. Для удалённых объектов используем гибридный формат: выезды по ключевым этапам + онлайн-отчёты."
    }
  ];

  return (
    <section id="faq" className="faqShell">
      <h2 className="faqTitle">Ответы на частые вопросы</h2>

      <ul className="faqList">
        {items.map((it, i) => (
          <li key={i}>
            <AccordionItem q={it.q} a={it.a} />
          </li>
        ))}
      </ul>

      <style jsx>{`
        .faqShell{
          max-width: 1100px; margin: 0 auto; padding: 56px 16px;
        }
        .faqTitle{
          font-family: var(--font-heading, serif);
          font-size: clamp(26px, 2.6vw, 36px);
          margin: 0 0 20px;
          letter-spacing: .2px;
        }
        .faqList{
          list-style: none; padding: 0; margin: 0;
          display: grid; gap: 12px;
        }
        li{ margin: 0; }
      `}</style>
    </section>
  );
}

function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Рассчитываем высоту для плавного height
  const contentHeight = open ? (ref.current?.scrollHeight ?? 0) : 0;

  return (
    <div
      className={`faqItem ${open ? "is-open" : ""}`}
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
    >
      <button
        className="faqQ"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`faq-panel-${q}`}
      >
        <span className="qText">{q}</span>
        <span className={`chev ${open ? "rot" : ""}`} aria-hidden="true">▾</span>
      </button>

      <div
        id={`faq-panel-${q}`}
        className="faqPanel"
        style={{ height: contentHeight }}
      >
        <div ref={ref} className="faqA">{a}</div>
      </div>

      <style jsx>{`
  .faqItem {
    border: 1px solid var(--border, #e8e8e8);
    border-radius: 16px;
    background: #fff;
    box-shadow: var(--shadow, 0 8px 30px rgba(0,0,0,.06));
    transition: border-color .25s ease, box-shadow .25s ease, transform .25s ease;
    will-change: box-shadow, transform;
  }
  .faqItem:hover {
    border-color: var(--gold, #C7A251);
    box-shadow: 0 10px 30px rgba(0,0,0,.08), 0 0 0 3px rgba(199,162,81,.12);
    transform: translateY(-1px);
  }
  .faqItem.is-open {
    border-color: var(--gold, #C7A251);
    box-shadow: 0 12px 34px rgba(0,0,0,.1), 0 0 0 4px rgba(199,162,81,.14);
  }

  .faqQ {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    padding: 18px 20px;
    background: transparent;
    border: 0;
    cursor: pointer;
    text-align: left;
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 17px;        /* одинаковый с ответом */
    line-height: 1.6;
    outline: none;
    color: var(--ink, #111);
  }

  .qText {
    line-height: 1.6;
  }

  .chev {
    transition: transform .25s ease;
  }
  .chev.rot {
    transform: rotate(-180deg);
  }

  .faqPanel {
    height: 0;
    overflow: hidden;
    transition: height .35s ease, opacity .35s ease, padding .35s ease;
    opacity: 0;
    padding: 0 20px;
  }
  .faqItem.is-open .faqPanel {
    opacity: 1;
    padding: 0 20px 18px;
  }

  .faqA {
    padding-top: 10px;
    color: var(--ink, #111);
    font-family: var(--font-body);
    font-weight: 500;
    font-size: 17px;        /* точно такой же размер */
    line-height: 1.6;
  }
`}</style>

    </div>
  );
}
