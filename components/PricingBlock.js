"use client";

import { useEffect, useState } from "react";
import { createClient } from "@sanity/client";

// 👇 твой Sanity-проект
const client = createClient({
  projectId: "1e9ly1np",
  dataset: "production",
  apiVersion: "2023-10-01",
  useCdn: true,
});

export default function PricingBlock() {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(null); // какой аккордеон раскрыт

  useEffect(() => {
    const query = `*[_type == "price"] | order(order asc) {
      _id, order, name, subtitle, includes, price
    }`;
    client.fetch(query).then(setItems).catch(console.error);
  }, []);

  if (!items.length) {
    return (
      <section style={{ padding: "40px 0" }}>
        <h2 style={{ fontSize: 28, marginBottom: 16 }}>Цены</h2>
        <p>Загружаем пакеты…</p>
      </section>
    );
  }

  return (
    <section id="pricing" style={{ padding: "40px 0" }}>
      <h2 style={{ fontSize: 28, marginBottom: 16 }}>Цены</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 16,
        }}
      >
        {items.map((it, idx) => {
          const opened = open === it._id;
          return (
            <div
              key={it._id}
              style={{
                border: "1px solid #ddd",
                borderRadius: 12,
                padding: 16,
              }}
            >
              <div
                onClick={() => setOpen(opened ? null : it._id)}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  gap: 12,
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, fontSize: 18 }}>{it.name}</div>
                  {it.subtitle ? (
                    <div style={{ color: "#666", fontSize: 14 }}>{it.subtitle}</div>
                  ) : null}
                </div>

                <div style={{ fontWeight: 700 }}>{it.price}</div>
              </div>

              {/* раскрывающаяся часть */}
              <div
                style={{
                  maxHeight: opened ? 400 : 0,
                  overflow: "hidden",
                  transition: "max-height 220ms ease",
                }}
              >
                <div style={{ marginTop: 12 }}>
                  {(it.includes || []).map((row, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "6px 0",
                        borderTop: i === 0 ? "1px dashed #eee" : "none",
                      }}
                    >
                      <span style={{ fontSize: 18, lineHeight: 1 }}>•</span>
                      <span>{row}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  if (typeof window !== "undefined" && window.openContactModal) {
                    window.openContactModal();
                  }
                }}
                style={{
                  marginTop: 12,
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: 10,
                  border: "1px solid #222",
                  background: "#111",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                Обсудить проект
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
