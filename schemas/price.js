export default {
  name: "price",
  title: "Пакеты цен",
  type: "document",
  fields: [
    { name: "name",  title: "Название пакета", type: "string" },
    { name: "price", title: "Цена (строка)",  type: "string" },
    { name: "items", title: "Что входит",      type: "array", of: [{ type: "string" }] },
    { name: "order", title: "Порядок",         type: "number" }
  ],
  orderings: [{ name: "orderAsc", title: "По порядку", by: [{ field: "order", direction: "asc" }] }]
};
