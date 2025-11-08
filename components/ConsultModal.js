"use client";

import { useEffect, useRef, useState } from "react";

export default function ConsultModal() {
  /* ============ 1) СИНГЛТОН (монтируется только один экземпляр) ============ */
  const [allowRender, setAllowRender] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // если модалка уже смонтирована — этот экземпляр не рисуем
    if (window.__consultModalMounted) {
      setAllowRender(false);
      return;
    }
    window.__consultModalMounted = true;

    return () => {
      delete window.__consultModalMounted;
    };
  }, []);

  if (!allowRender) return null;

  /* ============ 2) СОСТОЯНИЕ + АНТИ-ДВОЙНОЕ ОТКРЫТИЕ ============ */
  const [open, setOpen] = useState(false);

  // блокировка повторных open в течение короткого окна
  const lastOpenAt = useRef(0);
  const OPEN_GUARD_MS = 300;

  const safeOpen = () => {
    const now = Date.now();
    if (now - lastOpenAt.current < OPEN_GUARD_MS) return; // игнорим дубль
    lastOpenAt.current = now;

    setOpen(true);
  };

  const close = () => setOpen(false);

  // один слушатель «open-consult-modal»
  useEffect(() => {
    if (typeof window === "undefined") return;

    const onOpen = () => safeOpen();
    window.addEventListener("open-consult-modal", onOpen);

    // опционально: Esc закрывает
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("open-consult-modal", onOpen);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  if (!open) return null;

  /* ============ РАЗМЕТКА И СТИЛИ — как у тебя было ============ */
  return (
    <div className="consultModal__backdrop" onClick={close}>
      <div className="consultModal" onClick={(e) => e.stopPropagation()}>
        <button className="consultModal__close" onClick={close} aria-label="Закрыть">×</button>
        <h3 className="consultModal__title">Оставьте заявку</h3>
        <p className="consultModal__subtitle">Мы свяжемся с вами и ответим на вопросы.</p>

        <form className="consultModal__form" onSubmit={(e) => { e.preventDefault(); close(); }}>
          <input className="consultModal__input" name="name" placeholder="Ваше имя" required />
          <input className="consultModal__input" name="phone" placeholder="Телефон" required />
          <textarea className="consultModal__input" name="msg" placeholder="Кратко о задаче" rows={3} />
          <button className="goldBtn" type="submit">Отправить</button>
        </form>
      </div>

      <style jsx>{`
        .consultModal__backdrop{
          position:fixed;inset:0;background:rgba(0,0,0,.45);
          display:flex;align-items:center;justify-content:center;z-index:9999;
        }
        .consultModal{
          position:relative;
          width:min(560px,92vw);background:#fff;border-radius:18px;padding:20px;
          box-shadow:0 24px 80px rgba(0,0,0,.25);
        }
        .consultModal__close{
          position:absolute;right:14px;top:8px;border:0;background:none;
          font-size:28px;cursor:pointer;line-height:1;
        }
        .consultModal__title{margin:6px 0 4px;font-family:var(--font-heading)}
        .consultModal__subtitle{margin:0 0 12px;color:#666}
        .consultModal__form{display:grid;gap:10px}
        .consultModal__input{
          width:100%;border:1px solid #e8e8e8;border-radius:12px;padding:12px 14px;outline:none;
        }
      `}</style>
    </div>
  );
}
