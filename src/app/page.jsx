'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Section from '@/components/Section/Section';
import MySlider from '@/components/Slider/Slider';

export default function Home() {
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
      <section className="flex tablette:flex-col items-center bg-textColor">
        <div className="w-full flex  justify-center h-16">
          <h1 className="flex items-end font-titleFont font-bold text-4xl mobile:text-2xl  p-2 text-primary">
            Rural <b className="pl-1 text-tertinary ">W</b>eb Factory
          </h1>
        </div>
        <div class="search flex justify-center my-10 w-full">
          <input
            class="border border-borderColor shadow shadow-white w-1/4 rounded-l-lg px-2 tablette:w-2/4"
            type="search"
            name="search"
            id="search"
            placeholder="Saisissez votre recherche"
          />
          <button
            class="btn shadow rounded-r-lg shadow-white"
            type="submit"
          >
            <img
              class="border border-borderColor rounded-r-lg"
              src="/logo/logo_search.webp"
              alt="Logo search"
              title="Logo de recherche"
              width="45"
              height="45"
            />
          </button>
        </div>
      </section>
      <div className="relative">
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
        <Section />
      </div>
    </main>
  );
}
