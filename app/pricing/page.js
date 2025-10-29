import { createClient } from "next-sanity";

const client = createClient({
  projectId: "1e9ly1np", // твой Sanity project ID
  dataset: "production",
  apiVersion: "2023-10-01",
  useCdn: true,
});

export default async function PricingPage() {
  const data = await client.fetch(`*[_type == "price"] | order(order asc)`);

  return (
    <main className="container" style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "30px" }}>Пакеты дизайна</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "32px",
        }}
      >
        {data.map((item) => (
          <div
            key={item._id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "16px",
              padding: "24px",
              background: "#fff",
              boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
            }}
          >
            <h2 style={{ marginBottom: "8px", fontSize: "22px" }}>{item.name}</h2>
            <p style={{ color: "#555", marginBottom: "12px" }}>{item.subtitle}</p>

            <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
              {item.includes?.map((line, i) => (
                <li key={i} style={{ marginBottom: "6px" }}>
                  {line}
                </li>
              ))}
            </ul>

            <p style={{ fontWeight: "bold", color: "#111" }}>{item.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
