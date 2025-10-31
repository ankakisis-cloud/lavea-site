"use client";

export default function FloatingContacts() {
  const TG = "https://t.me/laveastudio";
  const WA = "https://wa.me/message/WOMRGEYTDAOAC1";

  // используем твои файлы из /public
  const TG_ICON = "/телеграм%20иконка.PNG";
  const WA_ICON = "/вотсап%20иконка.PNG";

  return (
    <div className="fab" aria-label="Быстрые контакты">
      <a href={TG} target="_blank" rel="noopener noreferrer" className="btn" aria-label="Telegram">
        <img src={TG_ICON} alt="Telegram" className="icon" />
      </a>

      <a href={WA} target="_blank" rel="noopener noreferrer" className="btn" aria-label="WhatsApp">
        <img src={WA_ICON} alt="WhatsApp" className="icon" />
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
          background: transparent;       /* без чёрной подложки */
          border: 0;
          padding: 0;
          box-shadow: 0 8px 18px rgba(0,0,0,.18); /* лёгкая тень */
          animation: float 3s ease-in-out infinite;
          transition: transform .2s ease;
        }
        .btn:nth-child(2){ animation-delay: .6s; }
        .btn:hover { transform: translateY(-2px) scale(1.04); }

        .icon {
          width: 100%;
          height: 100%;
          object-fit: contain;  /* ровно как в исходнике */
          border-radius: 50%;
          display: block;
        }

        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @media (max-width: 480px){
          .btn { width: 52px; height: 52px; }
        }
      `}</style>
    </div>
  );
}
