import Image from 'next/image';
const offres = [
  {
    id: 'offre1',
    titleImg: 'Photo offre 1',
    alt: 'offre 1',
    lien: './images/transformation_numérique.webp',
    titleoffre: 'Conseil pour la transformation numérique',
    contenu:
      'Dans un monde de plus en plus numérique, il est essentiel pour les entreprises de s’adapter et d’évoluer. Notre équipe d’experts vous guide à travers ce processus, en vous aidant à comprendre les technologies émergentes et à les intégrer dans votre entreprise. Nous travaillons avec vous pour développer une stratégie numérique qui correspond à vos objectifs commerciaux et maximise votre potentiel de croissance.',
  },
  {
    id: 'offre2',
    titleImg: 'Photo offre 2',
    alt: 'offre 2',
    lien: './images/transformation_numérique.webp',
    titleoffre: 'Conseil pour la transformation numérique',
    contenu:
      'Dans un monde de plus en plus numérique, il est essentiel pour les entreprises de s’adapter et d’évoluer. Notre équipe d’experts vous guide à travers ce processus, en vous aidant à comprendre les technologies émergentes et à les intégrer dans votre entreprise. Nous travaillons avec vous pour développer une stratégie numérique qui correspond à vos objectifs commerciaux et maximise votre potentiel de croissance.',
  },
  {
    id: 'offre3',
    titleImg: 'Photo offre 3',
    alt: 'offre 3',
    lien: './images/transformation_numérique.webp',
    titleoffre: 'Conseil pour la transformation numérique',
    contenu:
      'Dans un monde de plus en plus numérique, il est essentiel pour les entreprises de s’adapter et d’évoluer. Notre équipe d’experts vous guide à travers ce processus, en vous aidant à comprendre les technologies émergentes et à les intégrer dans votre entreprise. Nous travaillons avec vous pour développer une stratégie numérique qui correspond à vos objectifs commerciaux et maximise votre potentiel de croissance.',
  },
];
export default function Offres() {
  return (
    <div>
      <section
        id="offres"
        className="flex flex-col  items-center bg-primary mb-40"
      >
        <h2 className="text-center font-titleFont font-bold text-3xl uppercase pt-4 pb-8">
          Nos Offres
        </h2>

        <div className="offres flex flex-row flex-wrap justify-evenly  h-full w-3/4">
          {offres.map((offre) => (
            <div className="card" key={offre.id}>
              <div className="w-full">
                <Image
                  className="rounded-t-lg shadow-2xl w-full"
                  src={`/${offre.lien}`}
                  alt={offre.alt}
                  title={offre.titleImg}
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex flex-col justify-center p-4">
                <h3 className="font-bold font-titleFont py-4">
                  {offre.titleoffre}
                </h3>
                <p className=" p-2 pb-4">{offre.contenu}</p>
                <a href="#" className="cta">
                  Devis gratuit
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
