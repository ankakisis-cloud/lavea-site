export default function LaveaStatsStrip() {
  const items = [
    { value: "8", label: "лет опыта" },
    { value: "120", label: "реализованных проектов" },
    { value: "17", label: "городов" },
    { value: "98 %", label: "довольных клиентов" },
  ];

  return (
    <section className="laveaStats">
      <div className="laveaStats__inner">
        {items.map((it, i) => (
          <div className="laveaStats__item" key={i} aria-label={it.label}>
            <div className="laveaStats__value">{it.value}</div>
            <div className="laveaStats__label">{it.label}</div>
            {i < items.length - 1 && <span className="laveaStats__divider" aria-hidden="true" />}
          </div>
        ))}
      </div>
    </section>
  );
}
