"use client";
import Link from "next/link";
import PricingBlock from "../components/PricingBlock";

function openModal() {
  if (typeof window !== "undefined" && window.openContactModal) {
    window.openContactModal();
  }
}

export default function Home() {
  return (
    <>
      <section style={{display:'grid',gridTemplateColumns:'1.1fr .9fr',gap:24,alignItems:'center'}}>
        <div>
          <h1>LAVEA — премиальная студия интерьерного дизайна</h1>
          <p>Создаём личные миры: от концепции и 3D-визуализаций до комплектации и авторского надзора.</p>
          <div style={{display:'flex',gap:10,marginTop:16,flexWrap:'wrap'}}>
            <Link className="btn dark" href="/portfolio">Портфолио</Link>
            <Link className="btn" href="/pricing">Цены</Link>
            <button className="btn" onClick={openModal}>Связаться</button>
          </div>
          <div className="grid grid-3" style={{gridTemplateColumns:'repeat(4,1fr)',marginTop:24}}>
            {["02—04 мес.","Топ-материалы","Авторский надзор","Конфиденциальность"].map((x,i)=>(
              <div className="card" key={i}>
                <div className="badge">Ключевое преимущество</div>
                <div style={{fontWeight:600,marginTop:6}}>{x}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="card" style={{aspectRatio:'4/3',display:'flex',alignItems:'center',justifyContent:'center'}}>Тут будет видео/рендер</div>
      </section>

      {/* остальной код секций оставь как был, только у кнопок используй onClick={openModal} */}
    </>
  );
}
