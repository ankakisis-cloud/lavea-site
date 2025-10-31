// app/layout.js
import "../styles/globals.css";
import Link from "next/link";

import HeaderClient from "./HeaderClient";
import ContactModal from "../components/Modal";
import FloatingContacts from "../components/FloatingContacts";

import { Prata, Manrope } from "next/font/google";

const prata = Prata({ subsets: ["latin", "cyrillic"], weight: ["400"], display: "swap", variable: "--font-heading" });
const manrope = Manrope({ subsets: ["latin", "cyrillic"], weight: ["400","500","600","700","800"], display: "swap", variable: "--font-body" });

export const metadata = {
  title: "LAVEA — премиальная студия интерьерного дизайна",
  description: "Создаём личные миры: от концепции и 3D-визуализаций до комплектации и авторского надзора.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${prata.variable} ${manrope.variable}`}>
      <body>
        <FloatingContacts />

        <header className="header">
          <nav className="header__container">
            {/* ЛОГО */}
            <Link href="/" className="logo" aria-label="LAVEA — на главную">
              <span className="logoText">LAVEA</span>
              <span className="logoSub">интерьер с любовью к деталям</span>
            </Link>

            {/* МЕНЮ */}
            <div className="menu">
              <Link href="/portfolio">Портфолио</Link>
              <Link href="/pricing">Цены</Link>
              <Link href="/reviews">Отзывы</Link>
              <Link href="/contacts">Контакты</Link>
              <Link href="/sitemap">Карта сайта</Link>
            </div>

            {/* ПРАВАЯ ЗОНА (кнопка «Написать») */}
            <div className="header__right">
              <HeaderClient />
            </div>
          </nav>
        </header>

        <main>{children}</main>
        <ContactModal />
      </body>
    </html>
  );
}
