'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuItemClick(targetId) {
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
      // Fermer le menu après avoir cliqué sur un élément de la liste
      toggleMenu();
    }
  }
  // Utilisez toggle pour ajouter ou supprimer la classe
  function toggleMenu() {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle('overflow-hidden');
  }

  useEffect(() => {
    const itemMenus = document.querySelectorAll('.itemMenu');

    function handleClick(event) {
      const targetId = event.currentTarget
        .querySelector('a')
        .getAttribute('href');
      handleMenuItemClick(targetId);
    }

    itemMenus.forEach((item) => {
      item.addEventListener('click', handleClick);
    });

    return () => {
      itemMenus.forEach((item) => {
        item.removeEventListener('click', handleClick);
      });
    };
  }, []);

  const items = [
    { id: 'item1', lienItem: '#services', name: 'Services' },
    { id: 'item2', lienItem: '#realisations', name: 'Réalisations' },
    { id: 'item3', lienItem: '#formations', name: 'Formations' },
    { id: 'item4', lienItem: '#offres', name: 'Offres' },
    { id: 'item5', lienItem: '#faq', name: 'FAQ' },
    { id: 'item6', lienItem: '#blog', name: 'Blog' },
    { id: 'item7', lienItem: '#evenement', name: 'Evènement' },
    { id: 'item8', lienItem: '#contact', name: 'Contact' },
  ];

  return (
    <header className="border-b text-textColor">
      <nav
        className={`flex w-full justify-between pt-2 fixed z-30 ${
          menuOpen
            ? 'bg-primary/90 items-start'
            : 'bg-transparent items-center'
        }`}
      >
        <div className="ml-10">
          <Image
            className="imgCircle tablette:w-1/2 mobile:w-1/3"
            src="/circle_rwf.webp"
            alt="Logo RWF"
            title="Logo Rural Web Factory"
            width={100}
            height={100}
          />
        </div>
        <ul
          className={`flex flex-col ${
            menuOpen ? 'h-screen' : 'hidden'
          } items-center gap-2 w-full justify-evenly tablette:justify-center`}
        >
          {items.map((item) => (
            <li
              className={`itemMenu font-bold text-3xl uppercase leading-10 hover:bg-textColor/80 hover:text-primary scale-95 hover:scale-125 hover:text-4xl w-1/2 py-4 text-center transition-all ${
                menuOpen ? 'fade-out' : ''
              }`}
              key={item.id}
              onClick={() => handleMenuItemClick(item.lienItem)}
            >
              <a href={item.lienItem}>{item.name}</a>
            </li>
          ))}
        </ul>
        <div
          className="h-12 w-12 cursor-pointer justify-center items-center tablette:flex mr-2 mobile:mr-1"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <>
              <svg
                id="closeIcon"
                className="h-10 w-10 mobile:h-6 mobile:w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
              <div class="btnGroup">
                <button className="buttonMode" id="nightModeBtn">
                  <svg
                    class="moon fill-bleu h-5 w-5"
                    xmlns="https://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                  </svg>
                </button>
                <button className="buttonMode" id="dayModeBtn">
                  <svg
                    class="sun fill-jaune h-5 w-5"
                    xmlns="https://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
                  </svg>
                </button>
              </div>
            </>
          ) : (
            <svg
              id="menuIcon"
              className="h-10 w-10 mobile:h-6 mobile:w-6 z-10 fill-tertinary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                className="shadow-lg shadow-black"
                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
              />
            </svg>
          )}
        </div>
      </nav>
    </header>
  );
}
