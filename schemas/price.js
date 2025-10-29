export default {
  name: "price",
  title: "Пакеты цен",
  type: "document",
  fields: [
    { name: "order",  title: "Порядок", type: "number" },
    { name: "name",   title: "Название пакета", type: "string" },
    { name: "subtitle", title: "Кому и зачем (краткое описание)", type: "text" },
    { name: "includes", title: "Что входит (списком)", type: "array", of: [{ type: "string" }] },
    { name: "price",  title: "Стоимость (строка)", type: "string" }
  ],
  orderings: [{ name: "orderAsc", title: "По порядку", by: [{ field: "order", direction: "asc" }] }]
};
