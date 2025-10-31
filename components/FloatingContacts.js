"use client";

export default function FloatingContacts() {
  const TG = "https://t.me/laveastudio";
  const WA = "https://wa.me/message/WOMRGEYTDAOAC1";

  // твои иконки из public
  const TG_ICON = "/телеграм%20иконка.PNG";
  const WA_ICON = "/вотсап%20иконка.PNG";

  return (
    <div className="fab" aria-label="Быстрые контакты">
      <a
        href={TG}
        target="_blank"
        rel="noopener noreferrer"
        className="btn glow"
        aria-label="Telegram"
      >
        <img src={TG_ICON} alt="Telegram" className="icon" />
      </a>

      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        className="btn glow"
        aria-label="WhatsApp"
      >
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
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;          /* убираем фон полностью */
          border: none;
          padding: 0;
          cursor: pointer;
          transition: transform 0.25s ease;
          animation: float 3s ease-in-out infinite;
        }

        .btn:nth-child(2) {
          animation-delay: 0.6s;
        }

        .btn:hover {
          transform: scale(1.08);
        }

        /* Золотое мягкое свечение */
        .glow {
          box-shadow:
            0 0 12px rgba(232, 201, 128, 0.5),
            0 0 24px rgba(199, 162, 81, 0.4),
            0 0 40px rgba(232, 201, 128, 0.25);
          animation: float 3s ease-in-out infinite, glowPulse 4s ease-in-out infinite;
        }

        @keyframes glowPulse {
          0%, 100% {
            box-shadow:
              0 0 10px rgba(232, 201, 128, 0.5),
              0 0 24px rgba(199, 162, 81, 0.4);
          }
          50% {
            box-shadow:
              0 0 18px rgba(232, 201, 128, 0.75),
              0 0 36px rgba(199, 162, 81, 0.6);
          }
        }

        .icon {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 50%;
          display: block;
          background: transparent !important;
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
