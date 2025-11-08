"use client";

import { useEffect, useState } from "react";

export default function ConsultModal() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false); // для плавного закрытия

  // единый триггер открытия
  useEffect(() => {
    const onOpen = () => {
      setClosing(false);
      setOpen(true);
    };
    window.addEventListener("open-consult-modal", onOpen);

    // Esc закрывает
    const onKey = (e) => e.key === "Escape" && handleClose();
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("open-consult-modal", onOpen);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  // плавное закрытие: сначала анимация, потом размонтирование
  const handleClose = () => {
    if (!open) return;
    setClosing(true);
    // длительность синхронизирована с CSS (200–220ms)
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 220);
  };

  if (!open) return null;

  return (
    <div
      className={`consultModal__backdrop ${closing ? "is-closing" : ""}`}
      onClick={handleClose}
      aria-hidden="true"
    >
      <div
        className={`consultModal ${closing ? "is-closing" : ""}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          className="consultModal__close"
          onClick={handleClose}
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
            handleClose();
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
          <button className="goldBtn consultModal__submit" type="submit">
            Отправить
          </button>
        </form>
      </div>

      <style jsx>{`
        /* ===== Анимации — мягко и быстро ===== */
        @keyframes cm-fade-in {
          from { opacity: 0 }
          to   { opacity: 1 }
        }
        @keyframes cm-fade-out {
          from { opacity: 1 }
          to   { opacity: 0 }
        }
        @keyframes cm-pop-in {
          from { opacity: 0; transform: translateY(8px) scale(0.98) }
          to   { opacity: 1; transform: translateY(0)    scale(1) }
        }
        @keyframes cm-pop-out {
          from { opacity: 1; transform: translateY(0)    scale(1) }
          to   { opacity: 0; transform: translateY(8px)  scale(0.98) }
        }

        .consultModal__backdrop{
          position:fixed; inset:0;
          background:rgba(0,0,0,.45);
          display:flex; align-items:center; justify-content:center;
          z-index:9999;
          animation: cm-fade-in 0.2s ease both;
        }
        .consultModal__backdrop.is-closing{
          animation: cm-fade-out 0.2s ease both;
        }

        .consultModal{
          position:relative;
          width:min(560px,92vw);
          background:#fff; border-radius:18px; padding:20px;
          box-shadow:0 24px 80px rgba(0,0,0,.25);
          will-change: transform, opacity;
          animation: cm-pop-in 0.22s cubic-bezier(.2,.8,.2,1) both;
        }
        .consultModal.is-closing{
          animation: cm-pop-out 0.2s cubic-bezier(.2,.8,.2,1) both;
        }

        .consultModal__close{
          position:absolute; right:14px; top:8px;
          border:0; background:none;
          font-size:28px; cursor:pointer; line-height:1;
        }
        .consultModal__title{ margin:6px 0 4px; font-family:var(--font-heading) }
        .consultModal__subtitle{ margin:0 0 12px; color:#666 }
        .consultModal__form{ display:grid; gap:10px; padding-bottom: max(8px, env(safe-area-inset-bottom)); }
        .consultModal__input{
          width:100%; border:1px solid #e8e8e8; border-radius:12px;
          padding:12px 14px; outline:none; font-size:16px; /* >=16px чтобы iOS не зумил */
        }
        .consultModal__submit{ width:100%; }

        /* ===== Мобильные улучшения кнопки и вёрстки ===== */
        @media (max-width: 480px){
          .consultModal{ width:min(560px,94vw); padding:16px; border-radius:16px; }
          .consultModal__input{ min-height:44px; }
          .consultModal__submit{
            min-height:48px; font-size:16px; padding:14px 20px; border-radius:14px;
          }
        }
      `}</style>
    </div>
  );
}
