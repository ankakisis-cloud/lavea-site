import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "1e9ly1np",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-10-01",
  useCdn: true,
});

export const revalidate = 60;

export default async function PricingPage() {
  const data = await client.fetch(`*[_type == "price"] | order(order asc){
    _id, name, subtitle, includes, price
  }`);

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
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <h2 style={{ margin: 0, fontSize: 22 }}>{item.name}</h2>
            {item.subtitle && <p style={{ margin: 0, color: "#555" }}>{item.subtitle}</p>}

            {!!item.includes?.length && (
              <ul style={{ paddingLeft: 20, margin: "8px 0" }}>
                {item.includes.map((line, i) => (
                  <li key={i} style={{ marginBottom: 6 }}>{line}</li>
                ))}
              </ul>
            )}

            <p style={{ marginTop: "auto", fontWeight: 700 }}>{item.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
