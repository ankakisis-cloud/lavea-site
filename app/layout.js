import "./../styles/globals.css"
import Link from "next/link"
import HeaderClient from "./HeaderClient" // 👈 клиенточная шапка
import ContactModal from "../components/Modal"

export const metadata = {
  title: "LAVEA — студия интерьерного дизайна",
  description: "Премиальный дизайн интерьеров",
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <header className="header">
          <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:64}}>
            <Link href="/" className="logo">LAVEA</Link>
            <nav style={{display:'flex',gap:8}}>
              <Link href="/portfolio">Портфолио</Link>
              <Link href="/process">Процесс</Link>
              <Link href="/#pricing">Цены</Link>
              <Link href="/reviews">Отзывы</Link>
              <Link href="/contacts">Контакты</Link>
              <Link href="/sitemap">Карта сайта</Link>
            </nav>

            {/* Кнопка и соцсети перенесены в клиенточный компонент */}
            <HeaderClient />
          </div>
        </header>

        <main className="container">{children}</main>

        <footer>
          <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:16,padding:'20px 24px'}}>
            <div>© {new Date().getFullYear()} LAVEA Studio</div>
            <div style={{display:'flex',gap:12,alignItems:'center'}}>
              <Link href="/sitemap">Карта сайта</Link>
              <Link href="/admin">Админка</Link>
            </div>
          </div>
        </footer>

        {/* Плавающая кнопка и модалка делают клиенточный код внутри себя */}
        <ContactModal />
      
      </body>
    </html>
  )
}
