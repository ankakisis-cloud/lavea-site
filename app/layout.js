// app/layout.js
import "../styles/globals.css";
import "../styles/lavea-additions.css";
import Link from "next/link";

import HeaderClient from "./HeaderClient";
import ContactModal from "../components/Modal";
import FloatingContacts from "../components/FloatingContacts";

import { Prata, Manrope } from "next/font/google";

const prata = Prata({ subsets: ["latin","cyrillic"], weight: ["400"], display: "swap", variable: "--font-heading" });
const manrope = Manrope({ subsets: ["latin","cyrillic"], weight: ["400","500","600","700","800"], display: "swap", variable: "--font-body" });

export const metadata = {
  title: "LAVEA — премиальная студия интерьерного дизайна",
  description: "Создаём личные миры: от концепции и 3D-визуализации до комплектации и авторского надзора.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${prata.variable} ${manrope.variable}`}>
      <body>
        <FloatingContacts />

        <header className="header">
          <nav className="header__container" aria-label="Основная навигация">
            {/* ЛОГО */}
            <Link href="/" className="logo" aria-label="LAVEA — на главную">
              <span className="logoText">LAVEA</span>
              <span className="logoSub">интерьер с любовью к деталям</span>
            </Link>

            {/* МЕНЮ */}
            <div className="menu">
              <Link href="/portfolio">Портфолио</Link>
              <Link href="/pricing">Цены</Link>
              <Link href="/about">О нас</Link>
              <Link href="/#process">Процесс</Link>   {/* ВЕРНУЛ */}
              <Link href="/#contacts">Контакты</Link>
            </div>

            {/* ПРАВАЯ ЗОНА */}
            <div className="header__right">
              <HeaderClient />
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <ContactModal />

        <footer className="footer">
          <div className="footer__inner">
            <span>© {new Date().getFullYear()} LAVEA</span>
            <nav aria-label="Ссылки в подвале">
              <Link href="/sitemap">Карта сайта</Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
