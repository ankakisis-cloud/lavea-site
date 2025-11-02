// app/layout.js
import "../styles/lavea-additions.css";
import "./globals.css";

import Footer from "../components/Footer";

import HeaderClient from "./HeaderClient";
import ConsultModal from "../components/ConsultModal";
import FloatingContacts from "../components/FloatingContacts";

export const metadata = {
  title: "LAVEA — премиальная студия интерьера",
  description:
    "Интерьеры с любовью к деталям: от концепции и 3D до комплектации и авторского надзора.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <header className="wrap" style={{position:"sticky", top:0, zIndex:50, background:"#fff"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:16, height:76}}>
            <a href="/" style={{textDecoration:"none",color:"#111"}}>
              <div style={{fontFamily:"Prata,serif",fontSize:26,lineHeight:1}}>LAVEA</div>
              <div style={{fontSize:12,letterSpacing:".12em",opacity:.65}}>ИНТЕРЬЕР С ЛЮБОВЬЮ К ДЕТАЛЯМ</div>
            </a>
            <HeaderClient />
          </div>
        </header>

        {/* БЕЗ .wrap — чтобы герои не сжимались */}
        <main>{children}</main>
          // app/layout.js (фрагмент)
export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <HeaderClient />

        <main>{children}</main>

        <Footer />            {/* ← футер здесь */}

        <ConsultModal />
        <FloatingContacts />
      </body>
    </html>
  );
}

<html lang="ru">
  <body>
    <Header />
    <main>{children}</main>

    <Footer />         {/* ← вставь сюда */}

    <ConsultModal />
    <FloatingContacts />
  </body>
</html>

        <ConsultModal />
       <FloatingContacts />

      </body>
    </html>
  );
}
