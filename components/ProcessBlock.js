"use client";

export default function ProcessBlock() {
  const steps = [
    { num: 1, title: "Договор и предоплата", text: "Заключаем договор и получаем 40% предоплаты — старт проекта." },
    { num: 2, title: "Обмеры и бриф", text: "Выезд на объект, обмеры, заполнение брифа с клиентом." },
    { num: 3, title: "Планировочные решения", text: "Создаём 2–3 варианта планировок, утверждаем оптимальный." },
    { num: 4, title: "Moodboard и концепция", text: "Разрабатываем стиль, палитру, материалы, мебель, согласуем." },
    { num: 5, title: "3D-визуализации", text: "Делаем визуализации всех помещений, вносим правки и утверждаем." },
    { num: 6, title: "Рабочая документация", text: "Готовим чертежи, схемы, спецификации для строителей." },
    { num: 7, title: "Комплектация", text: "Формируем сметы и заказы у поставщиков, контролируем сроки." },
    { num: 8, title: "Авторский надзор", text: "Контролируем стройку, выезды и фото-отчёты до финала." },
  ];

  return (
    <section className="process">
      <div className="wrap">
        <h2 className="title">Процесс работы</h2>
        <p className="subtitle">8 этапов от идеи до реализации интерьера</p>

        <div className="steps">
          {steps.map((step, i) => (
            <div key={i} className="step">
              <div className="num">{step.num}</div>
              <div className="textBlock">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
              {i < steps.length - 1 && <div className="arrow">➜</div>}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .process { background: #faf7f2; padding: 80px 0; }
        .wrap { max-width: 1440px; margin: 0 auto; padding: 0 12px; text-align: center; }
        .title { font-size: 40px; font-weight: 700; margin-bottom: 8px; }
        .subtitle { font-size: 18px; color: #666; margin-bottom: 50px; }

        .steps {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 40px;
          position: relative;
        }
        .step {
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.05);
          padding: 24px;
          width: 300px;
          position: relative;
        }
        .num {
          font-size: 36px;
          font-weight: 800;
          color: #C7A251;
          margin-bottom: 8px;
        }
        h3 {
          font-size: 20px;
          margin-bottom: 6px;
        }
        p {
          font-size: 15px;
          color: #555;
          line-height: 1.4;
        }
        .arrow {
          position: absolute;
          right: -30px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 22px;
          color: #C7A251;
        }

        @media (max-width: 1024px) {
          .steps { gap: 24px; }
          .arrow { display: none; }
        }
      `}</style>
    </section>
  );
}
