// components/Footer.js
"use client";

import Link from "next/link";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="lavea-footer is-compact3">
      <div className="lf-wrap">
        {/* 1) Бренд + контакты */}
        <div className="lf-col">
          <h3 className="lf-title">LAVEA - премиальная студия интерьера</h3>
          <p className="lf-text">
            Интерьеры с любовью к деталям - от концепции и 3D до комплектации и авторского надзора.
          </p>
          <ul className="lf-contacts">
            <li><strong>Тел:</strong> 8 (495) 215-54-71</li>
            <li><strong>Адрес:</strong> Москва, ул. Ильинка, 4</li>
            <li><strong>Email:</strong> <a href="mailto:laveastudio@yandex.ru">laveastudio@yandex.ru</a></li>
          </ul>
          <p className="lf-legal">
            <Link href="/oferta" className="lf-link">Публичная оферта</Link>{" • "}
            <Link href="/privacy" className="lf-link">Политика конфиденциальности</Link>
          </p>
        </div>

        {/* 2) Карта сайта */}
        <nav className="lf-col" aria-label="Карта сайта">
          <h4 className="lf-sub">Карта сайта</h4>
          <ul className="lf-sitemap">
            <li><Link href="/">Главная</Link></li>
            <li><Link href="/portfolio">Портфолио</Link></li>
            <li><Link href="/about">О студии</Link></li>
            <li><Link href="/contacts">Контакты</Link></li>
            <li><Link href="/reviews">Отзывы</Link></li>
            <li><a href="/sitemap.xml" rel="nofollow">sitemap.xml</a></li>
          </ul>
        </nav>

        {/* 3) Часы + соцсети */}
        <div className="lf-col">
          <h4 className="lf-sub">Часы работы</h4>
          <p className="lf-text">Пн-Пт 09:00–19:00</p>

          <h4 className="lf-sub" style={{ marginTop: 10 }}>Мы в социальных сетях</h4>
          <p className="lf-social">
            <a href="#" className="lf-link">Instagram</a>{" "}
            <a href="#" className="lf-link">Telegram</a>{" "}
            <a href="#" className="lf-link">VK</a>
          </p>
        </div>
      </div>

      <div className="lf-bar">
        <div className="lf-wrap-sm">
          <small>© {new Date().getFullYear()} LAVEA. Все права защищены.</small>
        </div>
      </div>

      {/* Глобальные компакт-override, чтобы перебить footer.css */}
      <style jsx global>{`
        .lavea-footer.is-compact3{
          padding: 12px 12px !important; /* ещё ниже */
          background: linear-gradient(180deg, rgba(248,244,238,1) 0%, #fff 100%);
          border-top: 1px solid var(--border,#eee);
        }
        .lf-wrap{
          max-width: 1200px; margin: 0 auto;
          display: grid; gap: 14px;
          grid-template-columns: 1fr 0.7fr 0.7fr; /* 3 колонки */
          align-items: start;
        }
        .lf-col, .lf-wrap, .lavea-footer.is-compact3 *{
          font-size: 13px !important; line-height: 1.5 !important;
        }
        .lf-title{ font-family: var(--font-heading); font-size: 15px !important; margin: 0 0 4px !important; }
        .lf-sub{ font-family: var(--font-heading); font-size: 14px !important; margin: 6px 0 6px !important; }
        .lf-text{ color: var(--ink-soft,#666); margin: 0 0 6px !important; }
        .lf-contacts{ list-style: none; padding: 0 !important; margin: 6px 0 !important; }
        .lf-contacts li{ margin: 2px 0 !important; }

        /* ссылки — золото */
        .lavea-footer.is-compact3 a{ color: var(--gold,#C7A251) !important; text-decoration: none !important; }
        .lavea-footer.is-compact3 a:hover{ opacity: .82; }
        .lf-link{ text-decoration: underline !important; text-underline-offset: 3px !important; }

        /* карта сайта — плотный список */
        .lf-sitemap{ list-style: none; padding: 0 !important; margin: 4px 0 0 !important; display: grid; gap: 4px; }

        .lf-bar{ border-top: 1px solid var(--border,#eee); margin-top: 10px; padding-top: 8px; }
        .lf-wrap-sm{ max-width: 1200px; margin: 0 auto; padding: 0 4px; font-size: 12px !important; color: var(--ink-soft,#666); }

        @media (max-width: 960px){
          .lf-wrap{ grid-template-columns: 1fr; gap: 10px; }
        }
      `}</style>
    </footer>
  );
}
