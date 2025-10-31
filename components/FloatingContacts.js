"use client";

export default function FloatingContacts() {
  const TG = "https://t.me/laveastudio";
  const WA = "https://wa.me/message/WOMRGEYTDAOAC1";

  return (
    <div className="fab" aria-label="Быстрые контакты">
      <a
        href={TG}
        target="_blank"
        rel="noopener noreferrer"
        className="btn tg"
        aria-label="Открыть Telegram"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path
            d="M9.96 15.47 9.8 19.1c.32 0 .47-.14.64-.31l1.54-1.47 3.19 2.33c.58.32 1 .15 1.16-.53l2.11-9.9c.21-.94-.34-1.31-.95-1.08L4.4 11.37c-.92.36-.91.88-.16 1.11l3.75 1.17 8.7-5.49c.41-.25.79-.11.48.16l-7.21 6.15z"
            fill="currentColor"
          />
        </svg>
      </a>

      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        className="btn wa"
        aria-label="Открыть WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path
            d="M20.5 3.5a10 10 0 0 0-15 13.05L4 22l5.6-1.47A10 10 0 1 0 20.5 3.5Zm-8.46 15.8a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-2.49.66.67-2.43-.2-.32a8.25 8.25 0 1 1 6.5 3.42Zm4.76-5.19c-.26-.13-1.5-.74-1.73-.82s-.4-.13-.58.13-.66.81-.81.98-.3.2-.56.07a6.7 6.7 0 0 1-1.97-1.22 7.4 7.4 0 0 1-1.37-1.69c-.14-.25 0-.39.11-.52l.32-.37c.1-.13.14-.22.21-.37s0-.27 0-.39 0-.39-.58-.6-1.07-.45-1.3-.49-.48-.07-.73.29-.96 1.01-.96 2.46 1 2.85 1.18 3.05a8.4 8.4 0 0 0 3.05 2.27 10.48 10.48 0 0 0 1.04.38c.43.14.83.13 1.14.08.35-.05 1.5-.61 1.71-1.19s.21-1.09.15-1.19-.24-.17-.5-.3Z"
            fill="currentColor"
          />
        </svg>
      </a>

      <style jsx>{`
        .fab {
          position: fixed;
          right: max(20px, env(safe-area-inset-right));
          bottom: max(20px, env(safe-area-inset-bottom));
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 1000;
        }

        .btn {
          width: 56px;
          height: 56px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          color: #fff;
          text-decoration: none;
          animation: float 3s ease-in-out infinite;
          transition: transform 0.25s ease;
        }

        .btn:hover {
          transform: scale(1.08);
        }

        .btn.tg {
          background: #229ed9;
        }

        .btn.wa {
          background: #25d366;
          animation-delay: 0.6s;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @media (max-width: 480px) {
          .btn {
            width: 52px;
            height: 52px;
          }
        }
      `}</style>
    </div>
  );
}
