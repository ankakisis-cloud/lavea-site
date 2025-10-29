export default {
  name: "contacts",
  title: "Контакты (одна запись)",
  type: "document",
  fields: [
    { name: "phone",    title: "Телефон", type: "string" },
    { name: "email",    title: "Email",   type: "string" },
    { name: "address",  title: "Адрес",   type: "string" },
    { name: "telegram", title: "Ссылка на Telegram", type: "url" },
    { name: "whatsapp", title: "Ссылка на WhatsApp", type: "url" },
    { name: "mapIframe",title: "Карта (iframe)", type: "text" }
  ]
};
