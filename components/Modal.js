
"use client"
import {useState,useEffect} from "react"
export default function ContactModal(){
  const [open,setOpen]=useState(false); useEffect(()=>{window.openContactModal=()=>setOpen(true)},[])
  if(!open) return null
  return (<div className="modal-backdrop" onClick={()=>setOpen(false)}>
    <div className="modal" onClick={e=>e.stopPropagation()}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h3>Обратная связь</h3><button className="btn" onClick={()=>setOpen(false)}>✕</button>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,marginTop:12}}>
        <input placeholder="Имя"/><input placeholder="Телефон или Email"/>
      </div>
      <textarea rows={5} placeholder="Ваш запрос" style={{marginTop:12}}/>
      <button className="btn dark" style={{marginTop:12,width:'100%'}}>Отправить</button>
    </div></div>)
}
