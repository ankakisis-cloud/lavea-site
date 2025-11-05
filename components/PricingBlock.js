"use client";

import { useEffect, useState } from "react";
import ConsultBtn from "./ConsultBtn";

export default function PricingBlock() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const resp = await fetch("/api/prices", { cache: "no-store" });
        const data = await resp.json();
        setPlans(Array.isArray(data) ? data : []);
      } catch (e) {
        console.error(e);
        setPlans([]);
      }
    }
    load();
  }, []);

  return (
    <section id="pricing" className="pricingBlock" aria-label="Цены">
      <div className="pricingBlock__inner">
        <h2 className="sectionTitle">Цены</h2>
        <p className="sectionLead">Пакеты работ с детальным наполнением.</p>

        <div className="pricingGrid">
          {plans.map((item, idx) => (
            <article
              key={item._id || idx}
              className={`priceCard ${
                (item.popular || (item.price && String(item.price).includes("7000")))
                  ? "priceCard--popular"
                  : ""
              }`}
            >
              {(item.popular || (item.price && String(item.price).includes("7000"))) && (
                <span className="priceCard__badge">популярный тариф</span>
              )}

              <h3 className="priceCard__title">{item.name}</h3>
              {item.subtitle && <p className="priceCard__desc">{item.subtitle}</p>}

              {Array.isArray(item.includes) && item.includes.length > 0 && (
                <ul className="priceCard__list">
                  {item.includes.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              )}

              <div className="priceCard__price">{item.price}</div>

              {/* Внутренние кнопки по требованию удалены — вместо них одна общая кнопка под сеткой */}
            </article>
          ))}
        </div>

        {/* ОДНА общая кнопка под карточками */}
        <div className="pricingCTA">
          <ConsultBtn className="goldBtn">Обсудить проект</ConsultBtn>
        </div>
      </div>
    </section>
  );
}
