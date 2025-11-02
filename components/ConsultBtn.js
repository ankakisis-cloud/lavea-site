"use client";

export default function ConsultBtn({ className = "", children = "Получить консультацию" }) {
  const open = () => {
    if (typeof window !== "undefined" && typeof window.openContactModal === "function") {
      window.openContactModal();
    }
  };
  return (
    <button type="button" className={`btn ${className}`} onClick={open}>
      {children}
    </button>
  );
}
