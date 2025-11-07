'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import ConsultBtn from './ConsultBtn';

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
        <h1 className="heroTitle">
          LAVEA — премиальная студия интерьерного дизайна
        </h1>
        <p className="heroLead">
          Создаём личные миры: от концепции и 3D-визуализации до комплектации и авторского надзора.
        </p>

        <div className="heroActions">
          <a href="/#portfolio" className="goldBtn heroBtn">Портфолио</a>
          <ConsultBtn className="goldBtn heroBtn">Связаться</ConsultBtn>
        </div>
      </div>

      <style jsx>{`
        .heroShell{
          position: relative;
          height: min(84vh, 920px);
          border-radius: 28px;
          overflow: hidden;
          margin: 16px;
        }
        .heroSlide{
          position: absolute;
          inset: 0;
          object-fit: cover;
          opacity: 0;
          transition: opacity .6s ease;
        }
        .heroSlide.isActive{ opacity: 1; }

        .heroOverlay{
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,.28);
          z-index: 1;
        }

        .heroContent{
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 16px;
          color: #fff;
          text-shadow: 0 2px 24px rgba(0,0,0,.35);
          /* растягиваем содержимое на всю ширину */
          max-width: 100% !important;
          padding: 0 24px;
        }

        .heroTitle{
          font-family: var(--font-heading, Prata, serif);
          font-weight: 400;
          line-height: 1.1;
          font-size: clamp(32px, 4.6vw, 64px);
          margin: 0;
          max-width: none !important;
        }
        .heroLead{
          line-height: 1.7;
          margin: 0 0 8px;
          max-width: none !important;
        }
        .heroActions{ display: flex; gap: 12px; flex-wrap: wrap; }

        /* Кнопки в герое — одинаковые (как «Связаться») */
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
          color: #fff !important;
          background: linear-gradient(90deg, #E8C980 0%, #C7A251 100%) !important;
          border-color: #C7A251 !important;
        }
      `}</style>
    </section>
  );
}
