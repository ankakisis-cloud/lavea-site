// app/layout.js
import "../styles/globals.css";
import "../styles/lavea-additions.css";
import "./globals.css";
import "../styles/footer.css";
import "../styles/responsive.css";

import HeaderClient from "./HeaderClient";
import ConsultModal from "../components/ConsultModal";
import FloatingContacts from "../components/FloatingContacts";
import Footer from "../components/Footer";
import Script from "next/script"; // ⬅️ добавили

export const metadata = {
  title: "LAVEA — премиальная студия интерьера",
  description:
    "Интерьеры с любовью к деталям: от концепции и 3D до комплектации и авторского надзора.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <HeaderClient />

        <main>{children}</main>

        <Footer />

        <ConsultModal />
        <FloatingContacts />

        {/* ⬇️ фикс дублей модалки */}
        <Script src="/modal-dedupe.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
