// components/Footer.js
"use client";

import { useState } from "react";
import "../styles/footer.css";
import Footer from "../components/Footer";

export default function Footer() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, message: msg }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("ok");
        setName("");
        setPhone("");
        setMsg("");
      } else {
        setStatus("error");
        console.warn("lead error:", data);
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
    setTimeout(() => setStatus(null), 4000);
  }

  return (
    <footer className="lavea-footer">
      <div className="lavea-footer__wrap">
        <div className="lavea-footer__col about">
          <h3 className="lavea-footer__title">LAVEA — премиальная студия интерьера</h3>
          <p className="lavea-footer__text">
            Интерьеры с любовью к деталям — от концепции и 3D до комплектации и авторского надзора.
          </p>
          <ul className="lavea-footer__contacts">
            <li><strong>Тел:</strong> 8 (495) 215-54-71</li>
            <li><strong>Адрес:</strong> Москва, ул. Ильинка, 4</li>
            <li><strong>Email:</strong> <a href="mailto:laveastudio@y">laveastudio@y</a></li>
          </ul>
          <p className="lavea-footer__legal">
            <a href="/oferta" className="lavea-footer__link">Публичная оферта</a> • <a href="/privacy" className="lavea-footer__link">Политика конфиденциальности</a>
          </p>
        </div>

        <div className="lavea-footer__col form">
          <h4 className="lavea-footer__subtitle">Оставьте заявку</h4>
          <form className="lavea-footer__form" onSubmit={handleSubmit}>
            <label className="lavea-field">
              <input
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="lavea-input"
                required
              />
            </label>
            <label className="lavea-field">
              <input
                placeholder="Телефон"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="lavea-input"
                required
              />
            </label>
            <label className="lavea-field">
              <textarea
                placeholder="Коротко о проекте (необязательно)"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                className="lavea-textarea"
                rows="3"
              />
            </label>

            <div className="lavea-footer__actions">
              <button type="submit" className="lavea-btn gold">
                Отправить заявку
              </button>
              <span className="lavea-footer__status">
                {status === "loading" && "Отправка..."}
                {status === "ok" && "Спасибо! Ваша заявка принята."}
                {status === "error" && "Ошибка отправки. Попробуйте позже."}
              </span>
            </div>
          </form>
        </div>

        <div className="lavea-footer__col info">
          <h4 className="lavea-footer__subtitle">Часы работы</h4>
          <p className="lavea-footer__text">Пн—Пт 09:00–19:00</p>

          <h4 className="lavea-footer__subtitle">Мы в социальных сетях</h4>
          <div className="lavea-footer__social">
            {/* При желании замените ссылки на реальные */}
            <a href="#" aria-label="instagram" className="social-link">Instagram</a>
            <a href="#" aria-label="telegram" className="social-link">Telegram</a>
            <a href="#" aria-label="vk" className="social-link">VK</a>
          </div>
        </div>
      </div>

      <div className="lavea-footer__bar">
        <div className="lavea-footer__wrap-small">
          <small>© {new Date().getFullYear()} LAVEA. Все права защищены.</small>
        </div>
      </div>
    </footer>
  );
}
