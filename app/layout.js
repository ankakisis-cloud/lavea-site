
import "./../styles/globals.css"
import Link from "next/link"
import ContactModal from "../components/Modal"
import { Social } from "../components/Social"

export const metadata = { title:"LAVEA — студия интерьерного дизайна", description:"Премиальный дизайн" }

export default function RootLayout({children}){
  return (<html lang="ru"><body>
    <header className="header">
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:64}}>
        <Link href="/" className="logo">LAVEA</Link>
        <nav style={{display:'flex',gap:8}}>
          <Link href="/portfolio">Портфолио</Link>
          <Link href="/process">Процесс</Link>
          <Link href="/pricing">Цены</Link>
          <Link href="/reviews">Отзывы</Link>
          <Link href="/contacts">Контакты</Link>
          <Link href="/sitemap">Карта сайта</Link>
        </nav>
        <div style={{display:'flex',gap:10,alignItems:'center'}}>
          <Social telegram="https://t.me/annushka" whatsapp="https://wa.me/79990000000"/>
          <button className="btn dark" onClick={()=>window.openContactModal?.()}>Написать</button>
        </div>
      </div>
    </header>
    <main className="container">{children}</main>
    <footer><div className="container" style={{display:'flex',justifyContent:'space-between',padding:'20px 0'}}>
      <div>© {new Date().getFullYear()} LAVEA Studio</div>
      <div style={{display:'flex',gap:12,alignItems:'center'}}>
        <Link href="/sitemap">Карта сайта</Link>
        <Link href="/admin">Админка</Link>
        <Social telegram="https://t.me/annushka" whatsapp="https://wa.me/79990000000"/>
      </div>
    </div></footer>
    <button className="fab" onClick={()=>window.openContactModal?.()}>Связаться</button>
    <ContactModal/>
  </body></html>)
}
