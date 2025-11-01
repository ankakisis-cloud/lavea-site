"use client";

import { useEffect, useState } from "react";

export default function ConsultModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // глобальная «кнопка» из шапки/кнопок вызывает это окно
    window.openContactModal = () => setOpen(true);
  }, []);

  const close = () => setOpen(false);

  if (!open) return null;

  return (
    <div className="modalLavea" role="dialog" aria-modal="true" aria-label="Заявка на консультацию">
      <div className="modalLavea__backdrop" onClick={close} />
      <div className="modalLavea__card">
        <button className="modalLavea__close" onClick={close} aria-label="Закрыть">×</button>
        <h3>Получить консультацию</h3>
        <p className="modalLavea__lead">
          Оставьте контакты — мы вернёмся с идеями для вашего пространства.
        </p>
        <form className="modalLavea__form" onSubmit={(e)=>{e.preventDefault(); close();}}>
          <label>
            Имя
            <input type="text" placeholder="Как к вам обращаться" required />
          </label>
          <label>
            Телефон или Email
            <input type="text" placeholder="+7… или name@mail…" required />
          </label>
          <label>
            Кратко о задаче
            <textarea rows={4} placeholder="Метраж, стиль, сроки…" />
          </label>
          <button type="submit" className="btn-lavea">Отправить заявку</button>
        </form>
        <small className="modalLavea__note">Нажимая «Отправить», вы соглашаетесь с обработкой данных.</small>
      </div>
    </div>
  );
}
