import "../styles/globals.css";
import Link from "next/link";
import HeaderClient from "./HeaderClient";
import ContactModal from "../components/Modal";

export const metadata = {
  title: "LAVEA — студия интерьерного дизайна",
  description: "Премиальный дизайн интерьеров.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        {/* ШАПКА САЙТА: закреплена сверху и всегда над контентом */}
        <header className="header">
          <div className="header__container">
            <nav className="header__nav">
              <Link href="/" className="logo">LAVEA</Link>

              <div className="menu">
                <Link href="/portfolio">Портфолио</Link>
                <Link href="/process">Процесс</Link>
                <Link href="/#pricing">Цены</Link>
                <Link href="/reviews">Отзывы</Link>
                <Link href="/contacts">Контакты</Link>
                <Link href="/sitemap">Карта сайта</Link>
              </div>

              {/* Кнопка “Написать” и соцсети — как у тебя */}
              <HeaderClient />
            </nav>
          </div>
        </header>

        {/* Контент страниц */}
        <main>{children}</main>

        {/* Модалка контактов, если используешь */}
        <ContactModal />

        {/* Стили шапки — ГЛОБАЛЬНЫЕ */}
        <style jsx global>{`
          .header {
            position: sticky;
            top: 0;
            z-index: 1000; /* выше любых секций/героев */
            background: rgba(255, 255, 255, 0.78);
            -webkit-backdrop-filter: blur(10px);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          }
          .header__container {
            max-width: 1180px;
            margin: 0 auto;
            padding: 10px 24px;
          }
          .header__nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
          }
          .logo {
            font-weight: 800;
            letter-spacing: 0.02em;
          }
          .menu {
            display: flex;
            align-items: center;
            gap: 18px;
            flex-wrap: wrap;
          }
          @media (max-width: 640px) {
            .header__container { padding: 8px 16px; }
            .menu { gap: 12px; }
          }
        `}</style>
      </body>
    </html>
  );
}
