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
        <div className="search flex justify-center my-10  w-full">
          <input
            className="border border-borderColor shadow shadow-white w-1/4 rounded-l-lg px-2 tablette:w-2/4"
            type="search"
            name="search"
            id="search"
            placeholder="Saisissez votre recherche"
          />
          <button
            className="btn shadow rounded-r-lg shadow-white"
            type="submit"
          >
            <Image
              className="border border-borderColor rounded-r-lg"
              src="/logo_search.webp"
              alt="Logo search"
              title="Logo de recherche"
              width={45}
              height={45}
            />
          </button>
        </div>
      </section>
      <div className="relative">
        <div class="arrowTop">
          <a href="#top" aria-label="Retour au début de la page">
            <svg
              className="w-10 tablette:w-6 h-10 tablette:h-6"
              xmlns="https://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
            </svg>
          </a>
        </div>

        <MySlider />
        <Section />
      </div>
    </main>
  );
}
