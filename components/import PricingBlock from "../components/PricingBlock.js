"use client";
import { useState, useEffect } from "react";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "1e9ly1np", // твой Sanity project ID
  dataset: "production",
  apiVersion: "2023-10-01",
  useCdn: true,
});

export default function PricingBlock() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await client.fetch(`*[_type == "price"] | order(order asc)`);
      setData(res);
    }
    fetchData();
  }, []);

  if (!data.length) return null;

  return (
    <section style={{ padding: "60px 20px", background: "#f8f8f8" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "30px",
            textAlign: "center",
            marginBottom: "40px",
            fontWeight: "600",
          }}
        >
          Пакеты дизайна
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {data.map((item) => (
            <Accordion key={item._id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Accordion({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "16px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
        padding: "24px",
        transition: "all 0.3s ease",
      }}
    >
      <div
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <div>
          <h3 style={{ margin: "0 0 4px 0", fontSize: "20px" }}>{item.name}</h3>
          <p style={{ margin: 0, color: "#666" }}>{item.subtitle}</p>
        </div>
        <span style={{ fontSize: "24px", color: "#999" }}>
          {open ? "−" : "+"}
        </span>
      </div>

      {open && (
        <div
          style={{
            marginTop: "16px",
            borderTop: "1px solid #eee",
            paddingTop: "16px",
            animation: "fadeIn 0.3s ease",
          }}
        >
          <ul style={{ paddingLeft: "20px", margin: "0 0 16px 0" }}>
            {item.includes?.map((line, i) => (
              <li key={i} style={{ marginBottom: "6px" }}>
                {line}
              </li>
            ))}
          </ul>
          <p style={{ fontWeight: "bold", color: "#111" }}>{item.price}</p>
        </div>
      )}
    </div>
  );
}
