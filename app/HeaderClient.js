"use client"

import { Social } from "../components/Social"

export default function HeaderClient() {
  return (
    <div style={{display:'flex',alignItems:'center',gap:10}}>
      <Social telegram="https://t.me/annushka" whatsapp="https://wa.me/79990000000" />
      <button
        className="btn dark"
        onClick={() => window.openContactModal?.()}
      >
        Написать
      </button>
    </div>
  )
}
