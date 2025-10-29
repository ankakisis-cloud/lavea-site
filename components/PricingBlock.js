"use client";

import { useEffect, useState } from "react";
import { createClient } from "next-sanity";

// ⚙️ Твои параметры Sanity
const client = createClient({
  projectId: "1e9ly1np",
  dataset: "production",
  apiVersion: "2023-10-01",
  useCdn: true,
});

export default function PricingBlock() {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type=="price"] | order(order asc) {
          _id, order, name, subtitle, includes, price
        }`
      )
      .then(setItems)
      .catch(console.error);
  }, []);

  if (!items?.length) return null;

  return (
    <section style={{ padding: "40px 0" }}>
      <h2 style={{ fontSize: 28, marginBottom: 16 }}>Цены</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
          gap: 16,
        }}
      >
        {items.map((it, idx) => (
          <div
            key={it._id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 12,
              padding: 16,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => setOpen(open === idx ? null : idx)}
            >
              <div>
                <div style={{ fontWeight: 600 }}>{it.name}</div>
                {it.subtitle && (
                  <div style={{ opacity: 0.7, fontSize: 14 }}>{it.subtitle}</div>
                )}
              </div>
              <div style={{ fontWeight: 700 }}>{it.price}</div>
            </div>

            {open === idx && (
              <ul style={{ marginTop: 12, paddingLeft: 18 }}>
                {(it.includes || []).map((row, i) => (
                  <li key={i} style={{ marginBottom: 6 }}>
                    {row}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
