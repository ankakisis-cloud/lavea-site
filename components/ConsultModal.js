"use client";

import { useEffect, useState } from "react";

export default function ConsultModal() {
  const [open, setOpen] = useState(false);

  // Глобальный хук для кнопок: window.openContactModal()
  useEffect(() => {
    window.openContactModal = () => setOpen(true);
  }, []);

  if (!open) return null;

  return (
    <div className="modalBackdrop" role="dialog" aria-modal="true">
      <div className="modalCard">
        <button
          className="modalClose"
          onClick={() => setOpen(false)}
          aria-label="Закрыть"
        >
          ×
        </button>

        <h3 className="modalTitle">Получить консультацию</h3>
        <p className="modalSubtitle">
          Оставьте контакты — вернёмся к вам в течение рабочего дня.
        </p>

        <form
          className="modalForm"
          onSubmit={(e) => {
            e.preventDefault();
            // здесь можно повесить отправку в Sanity/почту
            setOpen(false);
          }}
        >
          <label>
            Имя
            <input type="text" required />
          </label>
          <label>
            Телефон или Email
            <input type="text" required />
          </label>
          <label>
            Кратко о задаче
            <textarea rows={3} />
          </label>

          <button type="submit" className="btn btn-lavea">
            Отправить заявку
          </button>
        </form>
      </div>
    </div>
  );
}
