// app/layout.js
import "../styles/lavea-additions.css";
import "../globals.css";
import "../styles/footer.css";

import HeaderClient from "../components/HeaderClient";
import ConsultModal from "../components/ConsultModal";
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
