import Image from 'next/image';
const articles = [
  {
    id: 'article1',
    titleImg: 'Photo conseil pour la transformation numérique',
    alt: 'Transformation numérique',
    lien: './transformation_numérique.jpg',
    class: 'article',
    titleArticle: 'Conseil pour la transformation numérique',
    contenu:
      'Dans un monde de plus en plus numérique, il est essentiel pour les entreprises de s’adapter et d’évoluer. Notre équipe d’experts vous guide à travers ce processus, en vous aidant à comprendre les technologies émergentes et à les intégrer dans votre entreprise. Nous travaillons avec vous pour développer une stratégie numérique qui correspond à vos objectifs commerciaux et maximise votre potentiel de croissance.',
  },
  {
    id: 'article2',
    titleImg: 'Photo audit d’entreprise',
    alt: 'Audit d’entreprise',
    lien: './audit_entreprise.jpg',
    class: 'articleReverse',
    titleArticle: 'Audit d’entreprise',
    contenu:
      'Un audit d’entreprise est une évaluation complète de votre entreprise qui identifie les domaines d’amélioration et les opportunités de croissance. Nos auditeurs expérimentés examinent tous les aspects de votre entreprise, y compris les finances, les opérations, la gestion et la stratégie. Nous vous fournissons un rapport détaillé avec des recommandations sur la façon d’améliorer votre entreprise.',
  },
  {
    id: 'article3',
    titleImg: 'Photo concernant la commmunication et le webmarketing',
    alt: 'Communication et webmarketing',
    lien: './communication_webmarketing.jpg',
    class: 'article',
    titleArticle: 'Stratégie de communication et de webmarketing',
    contenu:
      'Une stratégie de communication efficace est essentielle pour atteindre votre public cible et promouvoir votre entreprise. Nous utilisons les dernières techniques de webmarketing, y compris le SEO, le marketing par e-mail, les médias sociaux et le marketing de contenu, pour augmenter votre visibilité en ligne et attirer plus de clients.',
  },
  {
    id: 'article4',
    titleImg: 'Photo concernant la campagnes publicitaires',
    alt: 'Campagnes publicitaires',
    lien: './campagnes_publicitaires.jpg',
    class: 'articleReverse',
    titleArticle: 'Offre et mise en place de campagnes publicitaires',
    contenu:
      'Nous créons des campagnes publicitaires innovantes qui captent l’attention de votre public cible et promeuvent votre entreprise. Nous gérons tous les aspects de la campagne, de la conception à la mise en œuvre, pour vous assurer un retour sur investissement maximal.',
  },
  {
    id: 'article5',
    titleImg: 'Photo concernant la Création d’identité visuelle',
    alt: 'Création d’identité visuelle',
    lien: './identite_visuelle.jpg',
    class: 'article',
    titleArticle: 'Création d’identité visuelle',
    contenu:
      'Une identité visuelle forte est essentielle pour se démarquer de la concurrence. Notre équipe de designers crée une identité visuelle unique pour votre entreprise qui reflète vos valeurs et votre vision. Que vous ayez besoin d’un nouveau logo, d’une refonte de site web ou d’une campagne de branding complète, nous avons les compétences et l’expérience nécessaires pour vous aider.',
  },
  {
    id: 'article6',
    titleImg:
      'Photo concernant le Développement web et reseaux sociaux',
    alt: 'Développement web et reseaux sociaux',
    lien: './dev_web_rs.jpg',
    class: 'articleReverse',
    titleArticle: 'Développement web et gestion des réseaux sociaux',
    contenu:
      'Une identité visuelle forte est essentielle pour se démarquer de la concurrence. Notre équipe de designers crée une identité visuelle unique pour votre entreprise qui reflète vos valeurs et votre vision. Que vous ayez besoin d’un nouveau logo, d’une refonte de site web ou d’une campagne de branding complète, nous avons les compétences et l’expérience nécessaires pour vous aider.',
  },
  {
    id: 'article7',
    titleImg: 'Photo concernant le community management',
    alt: 'Community management',
    lien: './community_management.jpg',
    class: 'article',
    titleArticle: 'Service de community management',
    contenu:
      'Une communauté en ligne engagée peut être un atout précieux pour votre entreprise. Nous gérons votre communauté en ligne, en publiant du contenu intéressant, en répondant aux commentaires et en encourageant l’interaction. Nous travaillons pour renforcer votre marque et créer un lien fort avec vos clients.',
  },
];
export default function Faq() {
  return (
    <div>
      <section className="flex flex-col  bg-primary w-full">
        <h2
          id="faq"
          className="text-center font-titleFont font-bold text-3xl uppercase pb-8"
        >
          FAQ
        </h2>
        <div className="flex flex-col items-center w-full mb-8">
          <h3 className="faq font-titleFont font-bold">
            Pourquoi c'est important d'avoir un site web ?
          </h3>
          <div className="faq">
            La présence en ligne est essentielle car un site web
            permet de renforcer la visibilité de votre entreprise,
            d'atteindre un public plus large et d'établir une
            crédibilité dans un monde de plus en plus connecté.
          </div>
        </div>
        <div className="flex justify-center ">
          <a
            href="#"
            className="border cursor-pointer rounded-lg p-2 bg-red-500 text-textColor  text-center text-xl font-bold"
            type="button"
          >
            Vous n'avez pas trouvé votre réponse, cliquez ici
          </a>
        </div>
      </section>
    </div>
  );
}
