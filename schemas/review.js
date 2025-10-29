export default {
  name: "review",
  title: "Отзывы",
  type: "document",
  fields: [
    { name: "author", title: "Автор", type: "string" },
    { name: "city", title: "Город", type: "string" },
    { name: "text", title: "Текст отзыва", type: "text" },
    { name: "rating", title: "Оценка (1–5)", type: "number", options: { list: [1,2,3,4,5] } }
  ]
};
