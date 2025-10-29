export default {
  name: "project",
  title: "Проекты",
  type: "document",
  fields: [
    { name: "title", title: "Название", type: "string" },
    { name: "slug", title: "Ссылка", type: "slug", options: { source: "title" } },
    { name: "cover", title: "Обложка", type: "image", options: { hotspot: true } },
    { name: "gallery", title: "Галерея", type: "array", of: [{ type: "image" }] },
    { name: "area", title: "Метраж (м²)", type: "number" },
    { name: "style", title: "Стиль", type: "string" },
    { name: "city", title: "Город", type: "string" },
    { name: "description", title: "Описание", type: "text" }
  ]
};
