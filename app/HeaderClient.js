"use client";

export default function HeaderClient() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <button
        className="btn btn-lavea"
        onClick={() => window.openContactModal?.()}
        aria-label="Написать нам"
      >
        Написать
      </button>
    </div>
  );
}
