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
        {/* ШАПКА — фикс сверху, всегда над контентом */}
        <header className="header">
          <div className="header__container">
            <nav className="header__nav">
 <div className="menu">
  <Link href="/#portfolio">Портфолио</Link>
  <Link href="/#pricing">Цены</Link>
  <Link href="/#reviews">Отзывы</Link>
  <Link href="/#contacts">Контакты</Link>
  <Link href="/sitemap">Карта сайта</Link>
</div>


              {/* кнопка "Написать" и соцсети — клиентский компонент */}
              <HeaderClient />
            </nav>
          </div>
        </header>

        <main>{children}</main>

        {/* модалка контактов, если используешь */}
        <ContactModal />
      </body>
    </html>
  );
}
