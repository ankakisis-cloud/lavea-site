// components/ConsultBtn.js
"use client";

export default function ConsultBtn({ className = "", children = "Получить консультацию" }) {
  const open = () => {
    if (typeof window !== "undefined" && typeof window.openContactModal === "function") {
      window.openContactModal();
    } else {
      const el = document.getElementById("contacts");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button type="button" className={`btn btn-lavea ${className}`} onClick={open}>
      {children}
    </button>
  );
}
