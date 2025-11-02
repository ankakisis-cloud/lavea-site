// app/layout.js
import "./globals.css";
import "./../styles/lavea-additions.css";

import HeaderClient from "./HeaderClient";
import ConsultModal from "../components/ConsultModal";

export const metadata = {
  title: "LAVEA — премиальная студия интерьера",
  description: "Интерьеры с любовью к деталям: от концепции и 3D до комплектации и авторского надзора.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        {/* ЕДИНСТВЕННЫЙ хедер сайта */}
        <header className="wrap" style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:16}}>
          <div className="brand">
            <a href="/" style={{textDecoration:"none",color:"#111"}}>
              <div style={{fontFamily:"Prata,serif",fontSize:26,lineHeight:1}}>LAVEA</div>
              <div style={{fontSize:12,letterSpacing:".12em",opacity:.65}}>ИНТЕРЬЕР С ЛЮБОВЬЮ К ДЕТАЛЯМ</div>
            </a>
          </div>
          <HeaderClient />
        </header>

        <main className="wrap">{children}</main>

        {/* Глобальная модалка записи (в конце body) */}
        <ConsultModal />
      </body>
    </html>
  );
}
