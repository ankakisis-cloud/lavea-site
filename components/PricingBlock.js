"use client";

import { useEffect, useState } from "react";
import { createClient } from "next-sanity";

// 👇 твой Sanity-проект
const client = createClient({
  projectId: "1e9y1np",
  dataset: "production",
  apiVersion: "2023-10-01",
  useCdn: true,
});

export default function PricingBlock() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const query =
      `*[_type == "price"] | order(order asc){
        _id, order, name, subtitle, includes, price
      }`;
    client.fetch(query).then((data) => setItems(data || []));
  }, []);

  if (!items.length) {
    return (
      <section style={{ padding: "48px 0" }}>
        <div className="container">
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>
            Цены
          </h2>
          <p>Пакеты ещё не добавлены в админке.</p>
        </div>
      </section>
    );
  }

  return (
    <section style={{ padding: "48px 0" }}>
      <div className="container">
        <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24 }}>
          Цены
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 16,
          }}
        >
          {items.map((it) => (
            <article
              key={it._id}
              style={{
                border: "1px solid #e5e5e5",
                borderRadius: 12,
                padding: 16,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3 style={{ fontSize: 20, margin: 0 }}>{it.name}</h3>
                <span style={{ fontWeight: 700 }}>{it.price}</span>
              </div>

              {it.subtitle && (
                <p style={{ marginTop: 8, opacity: 0.8 }}>{it.subtitle}</p>
              )}

              {/* раскрывающийся список */}
              <details style={{ marginTop: 12 }}>
                <summary style={{ cursor: "pointer" }}>Что входит</summary>
                <ul style={{ marginTop: 8, paddingLeft: 18 }}>
                  {(it.includes || []).map((line, idx) => (
                    <li key={idx} style={{ marginBottom: 6 }}>
                      {line}
                    </li>
                  ))}
                </ul>
              </details>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
