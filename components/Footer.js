// components/Footer.js
"use client";

import Link from "next/link";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="lavea-footer">
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
            <Link href="/oferta" className="lavea-footer__link">Публичная оферта</Link> •{" "}
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

          <h4 className="lavea-footer__subtitle" style={{ marginTop: 14 }}>Карта сайта</h4>
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

      {/* Мини-override, чтобы подвал стал компактнее и ссылки были золотыми */}
      <style jsx>{`
        .lavea-footer{
          padding: 24px 16px;                  /* было больше — сделали компактным */
          background: linear-gradient(180deg, rgba(248,244,238,1) 0%, rgba(255,255,255,1) 100%);
          border-top: 1px solid var(--border, #eee);
        }
        .lavea-footer__wrap{
          max-width: 1200px; margin: 0 auto;
          display: grid; gap: 18px;            /* меньше расстояние */
          grid-template-columns: 1.2fr .8fr;   /* две колонки */
          align-items: start;
        }
        .lavea-footer__col{ font-size: 14px; line-height: 1.6; }   /* уменьшили шрифт */
        .lavea-footer__title{ font-size: 16px; margin: 0 0 6px; font-family: var(--font-heading); }
        .lavea-footer__subtitle{ font-size: 15px; margin: 10px 0 6px; font-family: var(--font-heading); }
        .lavea-footer__text{ font-size: 14px; margin: 0 0 8px; color: var(--ink-soft,#666); }
        .lavea-footer__contacts{ margin: 8px 0; padding: 0; list-style: none; }
        .lavea-footer__contacts li{ margin: 4px 0; }

        /* Золотые ссылки в подвале */
        .lavea-footer a{
          color: var(--gold, #C7A251);         /* вместо синих — золото */
          text-decoration: none;
          transition: opacity .18s ease;
        }
        .lavea-footer a:hover{ opacity: .85; }
        .lavea-footer__link{ text-decoration: underline; text-underline-offset: 3px; }

        /* Список карты сайта */
        .lavea-footer__sitemap{
          list-style: none; padding: 0; margin: 6px 0 0;
          display: grid; gap: 6px;
        }
        .lavea-footer__bar{
          border-top: 1px solid var(--border,#eee);
          margin-top: 18px;
          padding-top: 10px;
        }
        .lavea-footer__wrap-small{
          max-width: 1200px; margin: 0 auto; padding: 0 4px;
          font-size: 12px; color: var(--ink-soft,#666);
        }

        @media (max-width: 880px){
          .lavea-footer__wrap{ grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  );
}
