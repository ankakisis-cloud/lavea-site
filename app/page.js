
import Link from "next/link"
export default function Home(){return (<>
  <section style={{display:'grid',gridTemplateColumns:'1.1fr .9fr',gap:24,alignItems:'center'}}>
    <div>
      <h1>LAVEA — премиальная студия интерьерного дизайна</h1>
      <p>Создаём личные миры: от концепции и 3D‑визуализаций до комплектации и авторского надзора.</p>
      <div style={{display:'flex',gap:10,marginTop:16,flexWrap:'wrap'}}>
        <Link className="btn dark" href="/portfolio">Портфолио</Link>
        <Link className="btn" href="/pricing">Цены</Link>
        <button className="btn" onClick={()=>window.openContactModal?.()}>Связаться</button>
      </div>
      <div className="grid grid-3" style={{gridTemplateColumns:'repeat(4,1fr)',marginTop:24}}>
        {["02—04 мес.","Топ‑материалы","Авторский надзор","Конфиденциальность"].map((x,i)=>(<div className="card" key={i}><div className="badge">Ключевое преимущество</div><div style={{fontWeight:600,marginTop:6}}>{x}</div></div>))}
      </div>
    </div>
    <div className="card" style={{aspectRatio:'4/3',display:'flex',alignItems:'center',justifyContent:'center'}}>Тут будет видео/рендер</div>
  </section>

  <section style={{marginTop:40}}>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end'}}>
      <h2>Избранные проекты</h2><Link href="/portfolio">Смотреть все</Link>
    </div>
    <div className="grid grid-3" style={{marginTop:12}}>
      {Array.from({length:6}).map((_,i)=>(<div className="card" key={i} style={{aspectRatio:'4/3',display:'flex',alignItems:'center',justifyContent:'center',color:'#6b7280'}}>Проект #{i+1}</div>))}
    </div>
  </section>

  <section style={{marginTop:40}}>
    <h2>Как мы работаем</h2>
    <div className="grid grid-3">
      {[["Бриф","Понимаем запрос, бюджет, стиль, функционал."],["Концепция","Мудборды, планировки, первые визуализации."],["Проект","Полный комплект чертежей и 3D‑рендеры."],["Комплектация","Подбор материалов, мебели, света."],["Реализация","Авторский надзор и контроль качества."],["Передача","Сдача объекта и пост‑сопровождение."]].map((s,i)=>(<div className="card" key={i}><div className="badge">Шаг {i+1}</div><h3>{s[0]}</h3><p>{s[1]}</p></div>))}
    </div>
  </section>

  <section style={{marginTop:40}}>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end'}}>
      <h2>Цены</h2><Link href="/pricing">Детали пакетов</Link>
    </div>
    <div className="grid grid-3" style={{gridTemplateColumns:'repeat(4,1fr)'}}>
      {[{name:"Концепция",price:"от 6 000 ₽/м²",items:["Мудборды и ТЗ","2 планировки","3 визуализации"]},
        {name:"Полный проект",price:"от 9 900 ₽/м²",items:["Чертежи","Визуализации","Спецификации"]},
        {name:"Авторский надзор",price:"от 90 000 ₽/мес",items:["Еженедельные выезды","Контроль смет","Приёмка работ"]},
        {name:"Комплектация",price:"индивидуально",items:["Ведомости","Подбор и логистика","Оптимизация бюджета"]},
      ].map((p,i)=>(<div className="card" key={i}><h3>{p.name}</h3><div style={{fontSize:22,marginTop:4}}>{p.price}</div><ul className="list" style={{marginTop:8}}>{p.items.map((t,idx)=>(<li key={idx}>{t}</li>))}</ul><button className="btn" style={{marginTop:10}} onClick={()=>window.openContactModal?.()}>Обсудить</button></div>))}
    </div>
  </section>

  <section style={{marginTop:40}}>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end'}}>
      <h2>Отзывы</h2><Link href="/reviews">Читать все</Link>
    </div>
    <div className="grid grid-2">
      {Array.from({length:4}).map((_,i)=>(<div className="card" key={i}><p>«Восторгаемся качеством и тактом команды. Проект сдан раньше срока, комплектация — top‑notch.»</p><div className="badge" style={{marginTop:6}}>— Имя, город</div></div>))}
    </div>
  </section>

  <section style={{marginTop:40}} id="contacts-inline">
    <h2>Контакты</h2>
    <div className="grid grid-2">
      <div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
          <input placeholder="Имя"/><input placeholder="Телефон или Email"/>
        </div>
        <textarea rows={5} placeholder="Опишите объект (метры, стиль, сроки)" style={{marginTop:12}}/>
        <div style={{display:'flex',gap:10,marginTop:12,flexWrap:'wrap'}}>
          <button className="btn dark">Отправить заявку</button>
          <button className="btn" onClick={()=>window.openContactModal?.()}>Окно обратной связи</button>
        </div>
        <p style={{marginTop:10}}>Москва • Проекты в РФ и Европе • По записи</p>
      </div>
      <div className="card" style={{aspectRatio:'16/9',display:'flex',alignItems:'center',justifyContent:'center'}}>Карта — тут будет iframe</div>
    </div>
  </section>
</>)}
