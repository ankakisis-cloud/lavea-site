"use client";

export default function HeaderClient() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <button className="btn dark" onClick={() => window.openContactModal?.()}>
        Написать
      </button>
    </div>
  );
}
