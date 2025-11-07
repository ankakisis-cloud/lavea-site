'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const IMAGES = [
  '/IMG_9747.jpg',
  '/IMG_9748.jpg',
  '/IMG_9749.jpg',
  '/IMG_9750.jpg',
  '/IMG_9751.jpg'
];

export default function HeroSlider() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="heroShell">
      {IMAGES.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          sizes="100vw"
          priority={i === 0}
          className={`heroSlide ${i === idx ? 'isActive' : ''}`}
        />
      ))}

      <div className="heroOverlay" />

      <div className="heroContent">
        <h1>
          LAVEA — премиальная<br />
          студия интерьерного<br />
          дизайна
        </h1>
        <p>
          Создаём личные миры: от концепции и 3D-визуализации до комплектации и авторского надзора.
        </p>

       <div className="heroActions">
  <a href="/#portfolio" className="goldBtn heroBtn">Портфолио</a>
  <ConsultBtn className="goldBtn heroBtn">Связаться</ConsultBtn>
</div>
/* Контейнер героя — на всю ширину */
.hero :global(.wrap),
.heroWrap,
.heroContent {
  max-width: 100% !important;
  padding-left: 24px;
  padding-right: 24px;
}

/* Растянуть заголовок и подзаголовок */
.heroTitle{ max-width: none !important; }
.heroLead { max-width: none !important; }

/* Сделать обе кнопки как «Связаться» (тонкая чёрная, золото на hover) */
.heroBtn{
  background: transparent !important;
  border: 1px solid #111 !important;
  color: #111 !important;
  padding: 10px 26px !important;
  border-radius: 100px !important;
  font-size: 15px !important;
  font-weight: 400 !important;
  box-shadow: none !important;
  transition: all .25s ease !important;
}
.heroBtn:hover{
  color:#fff !important;
  background: linear-gradient(90deg, #E8C980 0%, #C7A251 100%) !important;
  border-color:#C7A251 !important;
}

        </div>
      </div>
    </section>
  );
}
