// app/sitemap.js
export default function sitemap() {
  const base = "https://lavea.studio"; // <- замените на реальный домен
  const routes = [
    "",
    "/about",
    "/portfolio",
    "/prices",
    "/process",
    "/contacts",
    "/reviews",
    "/oferta",
    "/privacy",
  ];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: path === "" ? 1.0 : 0.7,
  }));
}
