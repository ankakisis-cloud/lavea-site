"use client";

import { useEffect, useState } from "react";
import { createClient } from "next-sanity";

// 👇 твой проект Sanity
const client = createClient({
  projectId: "1e9y1np",
  dataset: "production",
  apiVersion: "2023-10-01",
  useCdn: true,
});

// GROQ-запрос: берём документы типа price, сортируем по полю order
const query = `*[_type == "price"] | order(order asc){
  _id,
  order,
  name,
  subtitle,
  includes,
  price
}`;

export default function PricingBlock() {
  const [items, setItems] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    client.fetch(query).then((data) => setItems(data || []));
  }, []);

  return (
    <section
      id="pricing"
      style={{
        padding: "56px 0",
        display: "grid",
        gap: 24,
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      <h2 style={{ fontSize: 32, margin: 0 }}>Тарифы</h2>
      <p style={{ opacity: 0.75, marginTop: 4 }}>
        Выберите формат сотрудничества. Состав карточек редактируется в админке.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 16,
        }}
      >
        {items.map((it, i) => (
          <details
            key={it._id || i}
            open={openIndex === i}
            onToggle={(e) => {
              if (e.currentTarget.open) setOpenIndex(i);
              else if (openIndex === i) setOpenIndex(null);
            }}
            style={{
              border: "1px solid #e5e5e5",
              borderRadius: 12,
              padding: 16,
              background: "#fff",
            }}
          >
            <summary
              style={{
                listStyle: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "baseline",
                gap: 8,
                fontWeight: 600,
                fontSize: 18,
              }}
            >
              <span style={{ flex: 1 }}>
                {it.name}
                {it.subtitle ? (
                  <span style={{ fontWeight: 400, opacity: 0.7 }}>
                    {" "}
                    — {it.subtitle}
                  </span>
                ) : null}
              </span>
              {it.price ? (
                <span style={{ whiteSpace: "nowrap", fontWeight: 700 }}>
                  {it.price}
                </span>
              ) : null}
            </summary>

            <div style={{ marginTop: 12, lineHeight: 1.6 }}>
              {Array.isArray(it.includes) && it.includes.length > 0 ? (
                <ul style={{ margin: "8px 0 0 18px" }}>
                  {it.includes.map((row, idx) => (
                    <li key={idx}>{row}</li>
                  ))}
                </ul>
              ) : (
                <p style={{ opacity: 0.7, marginTop: 8 }}>
                  Содержание пакета не заполнено.
                </p>
              )}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
