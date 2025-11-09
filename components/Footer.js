// components/Footer.js
"use client";

import Link from "next/link";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="lavea-footer is-compact">
      <div className="lavea-footer__wrap">
        {/* ЛЕВАЯ КОЛОНКА — БРЕНД + КОНТАКТЫ */}
        <div className="lavea-footer__col about">
          <h3 className="lavea-footer__title">LAVEA — премиальная студия интерьера</h3>
          <p className="lavea-footer__text">
            Интерьеры с любовью к деталям — от концепции и 3D до комплектации и авторского надзора.
          </p>
          <ul className="lavea-footer__contacts">
            <li><strong>Тел:</strong> 8 (495) 215-54-71</li>
            <li><strong>Адрес:</strong> Москва, ул. Ильинка, 4</li>
            <li><strong>Email:</strong> <a href="mailto:laveastudio@yandex.ru">laveastudio@yandex.ru</a></li>
          </ul>
          <p className="lavea-footer__legal">
            <Link href="/oferta" className="lavea-footer__link">Публичная оферта</Link>{" "}
            •{" "}
            <Link href="/privacy" className="lavea-footer__link">Политика конфиденциальности</Link>
          </p>
        </div>

        {/* ПРАВАЯ КОЛОНКА — ИНФО + КАРТА САЙТА */}
        <div className="lavea-footer__col info">
          <h4 className="lavea-footer__subtitle">Часы работы</h4>
          <p className="lavea-footer__text">Пн—Пт 09:00–19:00</p>

          <h4 className="lavea-footer__subtitle">Мы в социальных сетях</h4>
          <div className="lavea-footer__social">
            <a href="#" aria-label="instagram" className="social-link">Instagram</a>
            <a href="#" aria-label="telegram" className="social-link">Telegram</a>
            <a href="#" aria-label="vk" className="social-link">VK</a>
          </div>

          <h4 className="lavea-footer__subtitle" style={{ marginTop: 10 }}>Карта сайта</h4>
          <ul className="lavea-footer__sitemap">
            <li><Link href="/">Главная</Link></li>
            <li><Link href="/portfolio">Портфолио</Link></li>
            <li><Link href="/about">О студии</Link></li>
            <li><Link href="/contacts">Контакты</Link></li>
            <li><Link href="/reviews">Отзывы</Link></li>
            <li><a href="/sitemap.xml" rel="nofollow">sitemap.xml</a></li>
          </ul>
        </div>
      </div>

      <div className="lavea-footer__bar">
        <div className="lavea-footer__wrap-small">
          <small>© {new Date().getFullYear()} LAVEA. Все права защищены.</small>
        </div>
      </div>

      {/* ===== COMPACT OVERRIDES ===== */}
      <style jsx global>{`
        /* половина высоты: меньше паддинги и отступы */
        .lavea-footer.is-compact{
          padding: 14px 12px !important;            /* было ~28–44px */
          background: linear-gradient(180deg, rgba(248,244,238,1) 0%, #fff 100%);
          border-top: 1px solid var(--border, #eee);
        }
        .lavea-footer__wrap{
          max-width: 1200px; margin: 0 auto;
          display: grid; gap: 12px;                 /* было больше */
          grid-template-columns: 1fr .9fr;          /* компактнее */
          align-items: start;
        }
        .lavea-footer__bar{
          border-top: 1px solid var(--border,#eee);
          margin-top: 10px; padding-top: 8px;
        }
        .lavea-footer__wrap-small{
          max-width: 1200px; margin: 0 auto; padding: 0 4px;
        }

        /* уменьшенные шрифты по всему футеру */
        .lavea-footer.is-compact,
        .lavea-footer.is-compact *{
          font-size: 13px !important;               /* компактный текст */
          line-height: 1.5 !important;
        }
        .lavea-footer__title{ font-family: var(--font-heading); font-size: 15px !important; margin: 0 0 4px !important; }
        .lavea-footer__subtitle{ font-family: var(--font-heading); font-size: 14px !important; margin: 8px 0 4px !important; }
        .lavea-footer__text{ color: var(--ink-soft,#666); margin: 0 0 6px !important; }
        .lavea-footer__contacts{ margin: 6px 0 !important; padding: 0 !important; list-style: none; }
        .lavea-footer__contacts li{ margin: 2px 0 !important; }

        /* золотые ссылки (перебиваем footer.css и браузерные стили) */
        .lavea-footer.is-compact a{
          color: var(--gold, #C7A251) !important;
          text-decoration: none !important;
        }
        .lavea-footer.is-compact a:hover{
          opacity: .82;
        }
        .lavea-footer__link{
          text-decoration: underline !important;
          text-underline-offset: 3px !important;
        }

        /* список карты сайта — плотнее */
        .lavea-footer__sitemap{
          list-style: none; padding: 0; margin: 4px 0 0 !important;
          display: grid; gap: 4px;
        }

        /* мобильная адаптация */
        @media (max-width: 880px){
          .lavea-footer__wrap{ grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  );
}
