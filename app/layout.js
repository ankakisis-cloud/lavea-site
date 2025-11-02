// app/layout.js
import "../styles/lavea-additions.css";
import "./globals.css";                 // ← globals.css лежит в app/
import "../styles/footer.css";

import HeaderClient from "./HeaderClient";                 // ← файл в app/
import ConsultModal from "../components/ConsultModal";     // ← в components/
import FloatingContacts from "../components/FloatingContacts";
import Footer from "../components/Footer";

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

        <Footer /> {/* общий подвал на всех страницах */}

        <ConsultModal />
        <FloatingContacts />
      </body>
    </html>
  );
}
