// components/FloatingMessengers.js
"use client";

export default function FloatingMessengers() {
  return (
    <div className="floatMess">
      <a
        href="https://t.me/your_lavea"
        target="_blank"
        rel="noreferrer"
        className="floatMess__btn"
        aria-label="Написать в Telegram"
      >
        <img src="/телеграм иконка.png" alt="Telegram" />
      </a>

      <a
        href="https://wa.me/79990000000"
        target="_blank"
        rel="noreferrer"
        className="floatMess__btn"
        aria-label="Написать в WhatsApp"
      >
        <img src="/вотсан иконка.png" alt="WhatsApp" />
      </a>

      <style jsx>{`
        .floatMess {
          position: fixed;
          right: 18px;
          bottom: 18px;
          display: grid;
          gap: 12px;
          z-index: 60;
        }
        .floatMess__btn {
          width: 56px;
          height: 56px;
          display: grid;
          place-items: center;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.18);
          transition: transform 0.15s ease;
        }
        .floatMess__btn:hover {
          transform: translateY(-2px);
        }
        .floatMess__btn img {
          width: 30px;
          height: 30px;
          display: block;
        }
      `}</style>
    </div>
  );
}
