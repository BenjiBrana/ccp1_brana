'use client';
import React, { useState } from 'react';
const faqs = [
  {
    id: 'faq1',
    title:
      'Pourquoi est-ce important d’avoir un conseil en transformation numérique ?',
    contenu:
      'Le conseil en transformation numérique est crucial car il aide les entreprises à intégrer efficacement les technologies numériques dans leurs opérations quotidiennes. Cela peut conduire à une amélioration de l’efficacité, une augmentation de la productivité et une compétitivité accrue sur le marché.',
  },
  {
    id: 'faq2',
    title:
      'Pourquoi est-ce important de faire un audit aux entreprises ?',
    contenu:
      'Un audit d’entreprise est important car il fournit une évaluation indépendante des processus et des contrôles financiers d’une entreprise. Cela permet de s’assurer que l’entreprise est gérée efficacement et en toute sécurité, ce qui peut renforcer la confiance des investisseurs et des parties prenantes.',
  },
  {
    id: 'faq3',
    title:
      'Pourquoi est-ce important d’avoir une stratégie de communication et de webmarketing ?',
    contenu:
      'Avoir une stratégie de communication et de webmarketing est essentiel car elle permet à une entreprise de toucher efficacement son public cible, de promouvoir ses produits ou services et de renforcer sa présence en ligne. Cela peut conduire à une augmentation de la notoriété de la marque et à une croissance des ventes.',
  },
  {
    id: 'faq4',
    title: 'Pourquoi est-ce important de créer une identité visuelle',
    contenu:
      'La création d’une identité visuelle est importante car elle aide à définir comment une entreprise est perçue par le public. Une identité visuelle forte et cohérente peut aider à renforcer la reconnaissance de la marque, à établir la crédibilité et à différencier l’entreprise de ses concurrents.',
  },
  {
    id: 'faq5',
    title: 'Pourquoi est-ce important de créer un site web ?',
    contenu:
      'La création d’un site web est importante car elle offre à une entreprise une présence en ligne, ce qui est crucial dans le monde numérique d’aujourd’hui. Un site web peut aider à atteindre un public plus large, à promouvoir les produits ou services de l’entreprise et à établir une crédibilité.',
  },
  {
    id: 'faq6',
    title: 'Pourquoi est-ce important de gérer les réseaux sociaux ?',
    contenu:
      'La gestion des réseaux sociaux est importante car elle permet à une entreprise d’interagir directement avec son public, de renforcer l’engagement et de surveiller les commentaires et les opinions des clients. Cela peut conduire à une meilleure satisfaction de la clientèle et à une amélioration de la réputation de la marque.',
  },
  {
    id: 'faq7',
    title:
      'Pourquoi est-ce important de mener une campagne publicitaire ?',
    contenu:
      'Les campagnes publicitaires sont importantes car elles permettent à une entreprise de promouvoir ses produits ou services à un public cible. Une campagne publicitaire efficace peut augmenter la notoriété de la marque, stimuler les ventes et améliorer la part de marché.',
  },
  {
    id: 'faq8',
    title:
      'Pourquoi est-ce important de faire du community management ?',
    contenu:
      'Le community management est important car il permet à une entreprise de gérer et d’engager une communauté en ligne autour de sa marque ou de son produit. Cela peut conduire à une plus grande fidélité à la marque, à une meilleure satisfaction de la clientèle et à une augmentation de l’engagement des utilisateurs.',
  },
];
export default function Faq() {
  const [open, setOpen] = useState(null);
  const handleClickOpen = (index) => {
    if (open === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };
  return (
    <div>
      <section className="flex flex-col h-screen bg-primary w-full">
        <h2
          id="faq"
          className="text-center font-titleFont font-bold text-3xl uppercase pb-8"
        >
          FAQ
        </h2>
        {faqs.map((faq, index) => (
          <>
            <div
              key={faq.id}
              className="flex flex-col items-center w-full mb-4"
            >
              <h3
                onClick={() => handleClickOpen(index)}
                className="faq justify-between font-titleFont font-bold bg-secondary rounded-t-lg  w-full"
              >
                {faq.title}

                {open ? (
                  <>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                    </svg>
                  </>
                ) : (
                  <>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
                    </svg>
                  </>
                )}
              </h3>

              {open === index && (
                <p className="faq justify-center rounded-b-lg">
                  {faq.contenu}
                </p>
              )}
            </div>
          </>
        ))}
        <div className="flex justify-center mt-12">
          <a
            href="#"
            className="border cursor-pointer rounded-lg p-4 bg-red-500 text-textColor  text-center text-xl font-bold"
            type="button"
          >
            Vous n'avez pas trouvé votre réponse, cliquez ici
          </a>
        </div>
      </section>
    </div>
  );
}
