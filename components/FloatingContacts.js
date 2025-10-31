"use client";

export default function FloatingContacts() {
  const TG = "https://t.me/laveastudio";
  const WA = "https://wa.me/message/WOMRGEYTDAOAC1";

  const TG_ICON = "/телеграм%20иконка.png";
  const WA_ICON = "/вотсап%20иконка.png";

  return (
    <div className="fab" aria-label="Быстрые контакты">
      <a href={TG} target="_blank" rel="noopener noreferrer" className="fabBtn glow" aria-label="Telegram">
        <img src={TG_ICON} alt="Telegram" className="icon" />
      </a>

      <a href={WA} target="_blank" rel="noopener noreferrer" className="fabBtn glow" aria-label="WhatsApp">
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

        /* СБРОС ВСЕГО, чтобы не схватить глобальный .btn */
        .fabBtn {
          all: unset;                /* критично: убирает фон/паддинги/бордеры из глобалок */
          position: relative;
          width: 60px;
          height: 60px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          cursor: pointer;
          background: transparent !important;
          box-shadow: none !important;
          transition: transform .25s ease;
          animation: float 3s ease-in-out infinite;
        }
        .fabBtn:nth-child(2){ animation-delay: .6s; }
        .fabBtn:hover{ transform: scale(1.08); }

        /* Мягкое золотое свечение LAVEA */
        .glow::before{
          content:"";
          position:absolute;
          inset:-10px;
          border-radius:50%;
          background:
            radial-gradient(circle, rgba(232,201,128,.70) 0%, rgba(199,162,81,.40) 40%, transparent 70%);
          filter: blur(6px);
          opacity:.8;
          z-index:-1;
          animation: glowPulse 4s ease-in-out infinite;
        }

        .icon{
          width:100%;
          height:100%;
          object-fit: contain;
          border-radius:50%;
          background: transparent !important;
          display:block;
        }

        @keyframes float{
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-6px); }
        }
        @keyframes glowPulse{
          0%,100% { opacity:.7; transform: scale(1); }
          50%     { opacity:1;  transform: scale(1.1); }
        }

        @media (max-width:480px){
          .fabBtn{ width:54px; height:54px; }
        }
      `}</style>
    </div>
  );
}
