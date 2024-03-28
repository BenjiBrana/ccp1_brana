import Image from 'next/image';
const cards = [
  {
    id: 'card1',
    titleImg: 'Photo card 1',
    alt: 'card 1',
    lien: './transformation_numérique.jpg',
    titleCard: 'Conseil pour la transformation numérique',
    contenu:
      'Dans un monde de plus en plus numérique, il est essentiel pour les entreprises de s’adapter et d’évoluer. Notre équipe d’experts vous guide à travers ce processus, en vous aidant à comprendre les technologies émergentes et à les intégrer dans votre entreprise. Nous travaillons avec vous pour développer une stratégie numérique qui correspond à vos objectifs commerciaux et maximise votre potentiel de croissance.',
  },
  {
    id: 'card2',
    titleImg: 'Photo card 2',
    alt: 'card 2',
    lien: './transformation_numérique.jpg',
    titleCard: 'Conseil pour la transformation numérique',
    contenu:
      'Dans un monde de plus en plus numérique, il est essentiel pour les entreprises de s’adapter et d’évoluer. Notre équipe d’experts vous guide à travers ce processus, en vous aidant à comprendre les technologies émergentes et à les intégrer dans votre entreprise. Nous travaillons avec vous pour développer une stratégie numérique qui correspond à vos objectifs commerciaux et maximise votre potentiel de croissance.',
  },
  {
    id: 'card3',
    titleImg: 'Photo card 3',
    alt: 'card 3',
    lien: './transformation_numérique.jpg',
    titleCard: 'Conseil pour la transformation numérique',
    contenu:
      'Dans un monde de plus en plus numérique, il est essentiel pour les entreprises de s’adapter et d’évoluer. Notre équipe d’experts vous guide à travers ce processus, en vous aidant à comprendre les technologies émergentes et à les intégrer dans votre entreprise. Nous travaillons avec vous pour développer une stratégie numérique qui correspond à vos objectifs commerciaux et maximise votre potentiel de croissance.',
  },
  {
    id: 'card4',
    titleImg: 'Photo card 4',
    alt: 'card 4',
    lien: './transformation_numérique.jpg',
    titleCard: 'Conseil pour la transformation numérique',
    contenu:
      'Dans un monde de plus en plus numérique, il est essentiel pour les entreprises de s’adapter et d’évoluer. Notre équipe d’experts vous guide à travers ce processus, en vous aidant à comprendre les technologies émergentes et à les intégrer dans votre entreprise. Nous travaillons avec vous pour développer une stratégie numérique qui correspond à vos objectifs commerciaux et maximise votre potentiel de croissance.',
  },
  {
    id: 'card5',
    titleImg: 'Photo card 5',
    alt: 'card 5',
    lien: './transformation_numérique.jpg',
    titleCard: 'Conseil pour la transformation numérique',
    contenu:
      'Dans un monde de plus en plus numérique, il est essentiel pour les entreprises de s’adapter et d’évoluer. Notre équipe d’experts vous guide à travers ce processus, en vous aidant à comprendre les technologies émergentes et à les intégrer dans votre entreprise. Nous travaillons avec vous pour développer une stratégie numérique qui correspond à vos objectifs commerciaux et maximise votre potentiel de croissance.',
  },
  {
    id: 'card6',
    titleImg: 'Photo card 6',
    alt: 'card 6',
    lien: './transformation_numérique.jpg',
    titleCard: 'Conseil pour la transformation numérique',
    contenu:
      'Dans un monde de plus en plus numérique, il est essentiel pour les entreprises de s’adapter et d’évoluer. Notre équipe d’experts vous guide à travers ce processus, en vous aidant à comprendre les technologies émergentes et à les intégrer dans votre entreprise. Nous travaillons avec vous pour développer une stratégie numérique qui correspond à vos objectifs commerciaux et maximise votre potentiel de croissance.',
  },
];
export default function Realisation() {
  return (
    <div>
      <section className="flex flex-col items-center bg-primary mb-40">
        <h2
          id="realisations"
          className="text-center font-titleFont font-bold text-3xl uppercase pb-8"
        >
          Nos Réalisation
        </h2>

        <div className="cards flex flex-row flex-wrap justify-evenly  h-full w-3/4">
          {cards.map((card) => (
            <div className="card cursor-pointer" key={card.id}>
              <div className="card-image">
                <Image
                  className="rounded-lg shadow-2xl"
                  src={`/${card.lien}`}
                  alt={card.alt}
                  title={card.titleImg}
                  width={200}
                  height={200}
                />
              </div>
              <div className="card-body">
                <h3 className="card-title font-bold font-titleFont py-4">
                  {card.titleCard}
                </h3>
                <p className="card-text">{card.contenu}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
