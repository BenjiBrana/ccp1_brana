'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Section from '@/components/Section/Section';
import MySlider from '@/components/Slider/Slider';
import ParagrapheAccueil from '@/components/ParagrapheAccueil/ParagrapheAccueil';
import Faq from '@/components/Faq/Faq';
import CookieBanner from '@/components/Cookies/Cookies';

export default function Page({ children }) {
  useEffect(() => {
    const handleClick = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget
        .querySelector('a')
        .getAttribute('href');
      const targetElement = document.querySelector(targetId);
      /*Si élément cible existe alors ça défile jusqu'à cette élément*/
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
        });
      }
    };
    /* Sélection et ajout évènement au clic de l'ancre btn arrowTOP  */
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
      <Section className="flex gap-2 relative">
        <div className="arrowTop">
          <a href="#top" aria-label="Retour au début de la page">
            <Image
              className="h-6 w-6"
              src="/logo/arrow_up.svg"
              alt="Logo flèche vers le haut"
              title="Logo pour retourner en haut de la page"
              width={24}
              height={24}
            />
          </a>
        </div>

        <MySlider />
        {children}
        <ParagrapheAccueil />
        <Faq />
      </Section>
      <CookieBanner />
    </main>
  );
}
