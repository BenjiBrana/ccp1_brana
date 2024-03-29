'use client';
import Link from 'next/link';
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
    if (!menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
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
        className={`flex w-full justify-between pt-4 fixed  items-start ${
          menuOpen ? 'bg-primary/90 z-30' : 'bg-transparent z-10'
        }`}
      >
        <div className="ml-4 cursor-pointer">
          <Link href="/">
            <Image
              className="imgCircle tablette:w-1/2 mobile:w-1/3"
              src="/circle_rwf.webp"
              alt="Logo RWF"
              title="Logo Rural Web Factory"
              width={80}
              height={80}
            />
          </Link>
        </div>
        <ul
          className={`flex flex-col ${
            menuOpen ? 'h-screen' : 'hidden'
          } items-center gap-2 w-full justify-evenly tablette:justify-center`}
        >
          {items.map((item) => (
            <li
              className={`itemMenu font-bold text-3xl uppercase leading-10 hover:bg-textColor/80 hover:text-primary scale-95 hover:scale-125 hover:text-4xl hover:rounded-lg w-1/2 py-4 text-center transition-all ${
                menuOpen ? 'fade-out' : ''
              }`}
              key={item.id}
              onClick={() => handleMenuItemClick(item.lienItem)}
            >
              <Link href={item.lienItem}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div
          className="h-12 w-12 cursor-pointer justify-center items-center tablette:flex mr-2 mobile:mr-1"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <>
              <Image
                id="closeIcon"
                className="h-8 w-8 hover:bg-red-500/70 hover:border-black/50 hover:border-2 rounded-full p-1"
                src="/logo/close.svg"
                alt="Logo fermeture"
                title="Logo Rural Web Factory"
                width={30}
                height={30}
              />
              <div class="btnGroup">
                <button
                  className="buttonMode bg-blue-500/50"
                  id="nightModeBtn"
                >
                  <Image
                    class="moon  h-5 w-5"
                    src="/logo/moon.svg"
                    alt="Logo dark mode"
                    title="Logo pour activer le dark mode"
                    width={30}
                    height={30}
                  />
                </button>
                <button
                  className="buttonMode bg-yellow-500/50"
                  id="dayModeBtn"
                >
                  <Image
                    class="sun  h-5 w-5"
                    src="/logo/sun.svg"
                    alt="Logo light mode"
                    title="Logo pour activer le light mode"
                    width={30}
                    height={30}
                  />
                </button>
              </div>
            </>
          ) : (
            <Image
              id="menuIcon"
              className="h-10 w-10 z-10 bg-primary/70 hover:bg-tertinary/70 rounded-full p-1 shadow-lg shadow-black mobile:h-6 mobile:w-6  "
              src="/logo/burger_menu.svg"
              alt="Logo burger menu"
              title="Logo pour ouvrir le menu"
              width={30}
              height={30}
            />
          )}
        </div>
      </nav>
    </header>
  );
}
