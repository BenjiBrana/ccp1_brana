import Image from 'next/image';
const formations = [
  {
    id: 'formation1',
    titleImg: 'Photo formation 1',
    alt: 'formaion 1',
    lien: './transformation_numérique.jpg',
    class: 'article',
    titleFormation: 'Conseil pour la transformation numérique',
    contenu:
      'Dans un monde de plus en plus numérique, il est essentiel pour les entreprises de s’adapter et d’évoluer. Notre équipe d’experts vous guide à travers ce processus, en vous aidant à comprendre les technologies émergentes et à les intégrer dans votre entreprise. Nous travaillons avec vous pour développer une stratégie numérique qui correspond à vos objectifs commerciaux et maximise votre potentiel de croissance.',
  },
  {
    id: 'formation2',
    titleImg: 'Photo formation 2',
    alt: 'formation 2',
    lien: './transformation_numérique.jpg',
    class: 'articleReverse',
    titleFormation: 'Conseil pour la transformation numérique',
    contenu:
      'Dans un monde de plus en plus numérique, il est essentiel pour les entreprises de s’adapter et d’évoluer. Notre équipe d’experts vous guide à travers ce processus, en vous aidant à comprendre les technologies émergentes et à les intégrer dans votre entreprise. Nous travaillons avec vous pour développer une stratégie numérique qui correspond à vos objectifs commerciaux et maximise votre potentiel de croissance.',
  },
  {
    id: 'card3',
    titleImg: 'Photo formation 3',
    alt: 'formation 3',
    lien: './transformation_numérique.jpg',
    class: 'article',
    titleFormation: 'Conseil pour la transformation numérique',
    contenu:
      'Dans un monde de plus en plus numérique, il est essentiel pour les entreprises de s’adapter et d’évoluer. Notre équipe d’experts vous guide à travers ce processus, en vous aidant à comprendre les technologies émergentes et à les intégrer dans votre entreprise. Nous travaillons avec vous pour développer une stratégie numérique qui correspond à vos objectifs commerciaux et maximise votre potentiel de croissance.',
  },
];
export default function Formations() {
  return (
    <section className="flex flex-col items-center bg-primary mb-40">
      <h2
        id="formations"
        className="text-center font-titleFont font-bold text-3xl uppercase pb-8"
      >
        Nos Formations
      </h2>
      {formations.map((formation) => (
        <article className={formation.class} key={formation.id}>
          <Image
            className="2xl:w-4/12 lg:w-3/8 tablette:w-3/6 mobile:w-2/3 rounded-lg shadow-2xl"
            src={`/${formation.lien}`}
            alt={formation.alt}
            title={formation.titleImg}
            width={500}
            height={500}
          />
          <div className="flex flex-col justify-evenly 2xl:w-1/4 xl:w-2/6 lg:w-2/6 tablette:w-2/3 mobile:w-10/12 tablette:py-12  h-3/4">
            <h3 className="font-titleFont font-bold text-3xl mobile:text-2xl leading-10 tablette:pb-8 tablette:text-center">
              {formation.titleFormation}
            </h3>
            <p className="xl:text-xl lg:text-lg  leading-10">
              {formation.contenu}
            </p>
            <a
              href="#"
              className="border cursor-pointer rounded-lg p-2 bg-red-500 text-textColor text-center text-xl font-bold"
              type="button"
            >
              Pour plus d'informations, cliquez ici
            </a>
          </div>
        </article>
      ))}
    </section>
  );
}
