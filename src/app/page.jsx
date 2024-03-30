'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Section from '@/components/Section/Section';
import MySlider from '@/components/Slider/Slider';

export default function Home({ children }) {
  useEffect(() => {
    const handleClick = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget
        .querySelector('a')
        .getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
        });
      }
    };

    const btnTop = document.querySelector('.arrowTop');
    if (btnTop) {
      btnTop.addEventListener('click', handleClick);
    }

    return () => {
      if (btnTop) {
        btnTop.removeEventListener('click', handleClick);
      }
    };
  }, []);

  return (
    <main>
      <Section className="relative">
        <div class="arrowTop">
          <a href="#top" aria-label="Retour au début de la page">
            <Image
              className=" tablette:w-6 tablette:h-6"
              src="/logo/arrow_up.svg"
              alt="Logo flèche vers le haut"
              title="Logo pour retourner en haut de la page"
              width={25}
              height={25}
            />
          </a>
        </div>
        <MySlider />
        {children}
      </Section>
    </main>
  );
}
