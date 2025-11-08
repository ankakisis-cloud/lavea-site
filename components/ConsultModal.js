"use client";

import { useEffect, useState } from "react";

/**
 * ConsultModal — безопасный «синглтон».
 * - Не падает при SSR (проверяем window).
 * - Рендерит только первый экземпляр (глобальный флаг __laveaModalMounted).
 * - Защищает от двойного открытия (__laveaModalOpen).
 * - Закрытие по кресту, клику по фону и по Esc.
 */
export default function ConsultModal() {
  // Разрешить рендер только первому смонтированному экземпляру
  const [allowRender, setAllowRender] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // если модалка уже смонтирована где-то ещё — этот экземпляр не рисуем
    if (window.__laveaModalMounted) {
      setAllowRender(false);
      return;
    }
    window.__laveaModalMounted = true;

    return () => {
      delete window.__laveaModalMounted;
    };
  }, []);

  // если это «второй» экземпляр — вообще ничего не выводим
  if (!allowRender) return null;

  // состояние показа + защита от двойного открытия
  const [open, setOpen] = useState(false);

  const safeOpen = () => {
    if (typeof window !== "undefined") {
      if (window.__laveaModalOpen) return; // уже открыта — не дублируем
      window.__laveaModalOpen = true;
    }
    setOpen(true);
  };

  const safeClose = () => {
    setOpen(false);
    if (typeof window !== "undefined") window.__laveaModalOpen = false;
  };

  // слушатели событий
  useEffect(() => {
    if (typeof window === "undefined") return;

    // единый пользовательский триггер
    const onOpen = () => safeOpen();
    window.addEventListener("open-consult-modal", onOpen);

    // закрытие по Esc
    const onKey = (e) => {
      if (e.key === "Escape") safeClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("open-consult-modal", onOpen);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  if (!open) return null;

  return (
    <div className="consultModal__backdrop" onClick={safeClose}>
      <div className="consultModal" onClick={(e) => e.stopPropagation()}>
        <button
          className="consultModal__close"
          onClick={safeClose}
          aria-label="Закрыть"
          type="button"
        >
          ×
        </button>

        <h3 className="consultModal__title">Оставьте заявку</h3>
        <p className="consultModal__subtitle">
          Мы свяжемся с вами и ответим на вопросы.
        </p>

        <form
          className="consultModal__form"
          onSubmit={(e) => {
            e.preventDefault();
            safeClose();
          }}
        >
          <input
            className="consultModal__input"
            name="name"
            placeholder="Ваше имя"
            required
          />
          <input
            className="consultModal__input"
            name="phone"
            placeholder="Телефон"
            required
          />
          <textarea
            className="consultModal__input"
            name="msg"
            placeholder="Кратко о задаче"
            rows={3}
          />
          <button className="goldBtn" type="submit">
            Отправить
          </button>
        </form>
      </div>

      <style jsx>{`
        .consultModal__backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }
        .consultModal {
          position: relative;
          width: min(560px, 92vw);
          background: #fff;
          border-radius: 18px;
          padding: 20px;
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.25);
        }
        .consultModal__close {
          position: absolute;
          right: 14px;
          top: 8px;
          border: 0;
          background: none;
          font-size: 28px;
          cursor: pointer;
          line-height: 1;
        }
        .consultModal__title {
          margin: 6px 0 4px;
          font-family: var(--font-heading);
        }
        .consultModal__subtitle {
          margin: 0 0 12px;
          color: #666;
        }
        .consultModal__form {
          display: grid;
          gap: 10px;
        }
        .consultModal__input {
          width: 100%;
          border: 1px solid #e8e8e8;
          border-radius: 12px;
          padding: 12px 14px;
          outline: none;
        }
      `}</style>
    </div>
  );
}
