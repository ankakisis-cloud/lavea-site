"use client";

export default function FloatingContacts() {
  const TG = "https://t.me/laveastudio";
  const WA = "https://wa.me/message/WOMRGEYTDAOAC1";

  // пути к PNG с кириллицей
  const TG_ICON = "/телеграм%20иконка.png";
  const WA_ICON = "/вотсап%20иконка.png";

  return (
    <div className="fab" aria-label="Быстрые контакты">
      <a href={TG} target="_blank" rel="noopener noreferrer" className="btn glow" aria-label="Telegram">
        <img src={TG_ICON} alt="Telegram" className="icon" />
      </a>
      <a href={WA} target="_blank" rel="noopener noreferrer" className="btn glow" aria-label="WhatsApp">
        <img src={WA_ICON} alt="WhatsApp" className="icon" />
      </a>

      <style jsx>{`
        .fab {
          position: fixed;
          right: max(20px, env(safe-area-inset-right));
          bottom: max(20px, env(safe-area-inset-bottom));
          display: flex;
          flex-direction: column;
          gap: 14px;
          z-index: 1000;
        }

        .btn {
          position: relative;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          border: none;
          background: transparent; /* Убираем фон */
          cursor: pointer;
          animation: float 3s ease-in-out infinite;
          transition: transform 0.25s ease;
          overflow: visible;
        }

        .btn:hover {
          transform: scale(1.08);
        }

        /* Мягкое золотое свечение */
        .btn.glow::before {
          content: "";
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(232, 201, 128, 0.7) 0%,
            rgba(199, 162, 81, 0.4) 40%,
            transparent 70%
          );
          filter: blur(6px);
          opacity: 0.8;
          z-index: -1;
          animation: glowPulse 4s ease-in-out infinite;
        }

        @keyframes glowPulse {
          0%, 100% {
            opacity: 0.7;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        .icon {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 50%;
          mix-blend-mode: normal;
          background: transparent !important; /* убираем тёмную подложку */
          box-shadow: none !important;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @media (max-width: 480px) {
          .btn {
            width: 54px;
            height: 54px;
          }
        }
      `}</style>
    </div>
  );
}
