'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const articles = [
  {
    id: 'image1',
    image: '/slide1.jfif',
    title: 'CDI ou Freelance, comment choisir ?',
    contenu:
      'Découvrez les clés pour faire le choix crucial entre un contrat à durée indéterminée (CDI) et le statut de freelance, pour optimiser votre carrière professionnelle.',
  },
  {
    id: 'image2',
    image: '/communication_webmarketing.jpg',
    title:
      'Le SEA est-il essentiel, ou le SEO seul peut-il être adéquat ?',
    contenu:
      'Plongez dans le débat entre SEA et SEO pour découvrir si le référencement payant est vraiment indispensable ou si une stratégie SEO bien ficelée peut suffire à propulser votre présence en ligne.',
  },
];

export default function MySlider() {
  const [page, setPage] = useState(1);

  useEffect(() => {
    let int = setInterval(() => {
      setPage((prev) => (prev + 1 >= articles.length ? 1 : prev + 1));
    }, 5000);
    return () => clearInterval(int);
  }, []);

  const handlePagePrecedante = () => {
    setPage((prev) => (prev + 1 >= articles.length ? 1 : prev + 1));
  };
  const handlePageSuivante = () => {
    setPage((prev) => (prev - 1 <= 0 ? articles.length : prev - 1));
  };

  return (
    <section className="relative flex h-[calc(100vh-70px)] w-full flex-col justify-center items-center bg-primary">
      {articles.map(
        (article, index) =>
          page === index + 1 && (
            <div
              key={article.id}
              className="absolute top-1/2 -translate-y-1/2 w-full h-3/4 scale-75 rounded-lg"
            >
              <div className="z-20 absolute left-1/2  border-2 border-textColor/20 -translate-x-1/2 top-0 -translate-y-full w-full py-3 px-6 bg-secondary rounded-t-lg ">
                <h2 className="text-4xl tracking-widest py-6 font-titleFont text-black font-bold text-center">
                  {article.title}
                </h2>
              </div>
              <Image
                className=" h-full object-cover object-center max-w-full border-x-2 border-textColor/50"
                fill
                alt="Image slide"
                src={article.image}
              />
              <div className="z-20 absolute left-1/2 border-2  border-textColor/20 -translate-x-1/2 bottom-0 translate-y-full w-full py-3 px-6 bg-secondary rounded-b-lg">
                <p className="text-2xl mt-4 py-3 font-bold w-full text-center text-black">
                  {article.contenu}
                </p>
              </div>
            </div>
          )
      )}

      <div
        onClick={handlePagePrecedante}
        className="z-10 absolute flex h-16 hover:h-1/6 -translate-y-1/2 top-1/2 left-0 text-2xl font-semibold  rounded-r-lg overflow-hidden bg-primary/10 hover:shadow-tertinary  hover:shadow-md"
      >
        <span className="flex hover:bg-tertinary/50 hover:border-tertinary  transition-transform hover:translate-x-1 motion-reduce:transform-none cursor-pointer  ">
          <Image
            className="mx-4 "
            alt="Slide à droite"
            src="/circle-chevron-left-solid.svg"
            width={40}
            height={40}
          />
        </span>
      </div>
      <div
        onClick={handlePageSuivante}
        className="z-10 absolute bg-primary/10 flex h-16 hover:h-1/6 -translate-y-1/2 top-1/2 right-0 text-2xl font-semibold  rounded-l-lg overflow-hidden hover:shadow-tertinary  hover:shadow-md"
      >
        <span className="flex hover:bg-tertinary/50 hover:border-tertinary  transition-transform hover:-translate-x-1 motion-reduce:transform-none cursor-pointer  ">
          <Image
            className="mx-4"
            alt="slide à gauche"
            src="/circle-chevron-right-solid.svg"
            width={40}
            height={40}
          />
        </span>
      </div>
    </section>
  );
}
