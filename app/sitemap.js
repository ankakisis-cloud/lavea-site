// app/sitemap.js
export default function sitemap() {
  const base = "https://lavea.studio"; // TODO: твой домен

  /** перечисляем существующие страницы */
  const routes = [
    "",
    "/about",
    "/portfolio",
    "/contacts",
    "/reviews",
    "/privacy",
    "/oferta",
  ];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1.0 : 0.7,
  }));
}
