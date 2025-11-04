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

        <div className="ctaRow">
          <a href="#portfolio" className="goldBtn">Портфолио</a>
          <a href="#contact" className="btnSecondary">Связаться</a>
        </div>
      </div>
    </section>
  );
}
