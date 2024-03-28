import Image from 'next/image';
export default function Footer() {
  const liensReseauxSociaux = [
    {
      id: 'rs1',
      title: 'Lien Linkedin',
      alt: 'Logo Linkedin',
      lien: './logo_linkedin.webp',
      url: 'https://www.linkedin.com/',
    },
    {
      id: 'rs2',
      title: 'Lien Facebook',
      alt: 'Logo Facebook',
      lien: './logo_fb.webp',
      url: 'https://www.facebook.com/',
    },
    {
      id: 'rs3',
      title: 'Lien X',
      lien: './logo_x.webp',
      url: 'https://twitter.com/',
    },
    {
      id: 'rs4',
      title: 'Lien Youtube',
      lien: './logo_ytb.webp',
      url: 'https://www.youtube.com/?hl=FR',
    },
  ];
  return (
    <footer className="flex tablette:flex-col mt-8 py-5 border-t bg-secondary text-textColor">
      <div className="reseauxSociaux flex w-1/4 justify-evenly items-center tablette:w-full tablette:justify-center tablette:gap-8 tablette:mt-8 ">
        {liensReseauxSociaux.map((lienReseauSocial) => (
          <div key={lienReseauSocial.id}>
            <a className="cursor-pointer" href={lienReseauSocial.url}>
              <Image
                className="imgCircle h-12"
                src={`/${lienReseauSocial.lien}`}
                alt={lienReseauSocial.alt}
                title={lienReseauSocial.title}
                width={50}
                height={50}
              />
            </a>
          </div>
        ))}
      </div>
      <div className="contact flex flex-col flex-1  justify-between items-center gap-10  tablette:order-3">
        <div className="flex flex-col items-center">
          <h2 className="titleFont text-xl font-bold">
            Rural Web Factory
          </h2>
          <h3 className="titleFont text-s">Aubeterre-sur-Dronne</h3>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-s">
            &copy; RuralWebFactory | 2024
          </span>
          <span className="text-xs">
            Site réalisé par{' '}
            <a href="https://branabenjamin.fr">Brana Benjamin</a>
          </span>
        </div>
      </div>
      <div className="mentions flex flex-1 justify-evenly gap-4 xl:flex-row lg:flex-col tablette:flex-row mobile:flex-col mobile:items-center tablette:my-16">
        <ul className="flex xl:flex-col lg:flex-row tablette:flex-col gap-4 justify-center">
          <li>
            <a href="#">Mentions légales</a>
          </li>
          <li>
            <a href="#">Confidentialité</a>
          </li>
          <li>
            <a href="#">Cookies </a>{' '}
          </li>
        </ul>
        <ul className="flex xl:flex-col lg:flex-row tablette:flex-col  gap-4 justify-center">
          <li className="flex">
            <a className="flex gap-4 items-center " href="#">
              <Image
                className="imgCircle"
                src="/logo_accessibilite.webp"
                alt="Logo accessibilité"
                title="Accessibility"
                width={32}
                height={32}
              />
              Accessibilité : non conforme
            </a>
          </li>
          <li className="flex   ">
            <a className="flex gap-4 items-center" href="#">
              <Image
                className="imgCircle"
                src="/logo_faciliti.webp"
                alt="Logo facil'iti"
                title="Facil'iti"
                width={32}
                height={32}
              />
              Facil'iti
            </a>
          </li>
        </ul>
        <div className="flex items-center justify-center ">
          <Image
            className="rounded-md mr-4"
            src="/logo_netZero.webp"
            alt="Logo net zéro"
            title="net zéro"
            width={152}
            height={96}
          />
        </div>
      </div>
    </footer>
  );
}
