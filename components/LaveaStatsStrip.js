export default function LaveaStatsStrip() {
  const items = [
    { value: "8", label: "лет работы" },
    { value: "120", label: "реализованных проектов" },
    { value: "17", label: "городов" },
    { value: "98%", label: "довольных клиентов" },
  ];

  return (
    <section className="aboutStats" aria-label="Статистика LAVEA">
      <div className="aboutStats__grid">
        {items.map((it, i) => (
          <div className="stat" key={i} aria-label={it.label}>
            <div className="stat__num">{it.value}</div>
            <div className="stat__label">{it.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
