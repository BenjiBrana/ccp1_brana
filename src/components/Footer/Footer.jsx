import Image from 'next/image';
export default function Footer() {
  const liensReseauxSociaux = [
    {
      id: 'rs1',
      title: 'Lien Linkedin',
      alt: 'Logo Linkedin',
      lien: './logo_linkedin.webp',
    },
    {
      id: 'rs2',
      title: 'Lien Facebook',
      alt: 'Logo Facebook',
      lien: './logo_fb.webp',
    },
    { id: 'rs3', title: 'Lien X', lien: './logo_x.webp' },
    { id: 'rs4', title: 'Lien Youtube', lien: './logo_ytb.webp' },
  ];
  return (
    <footer className="flex py-5 border-t bg-secondary text-black">
      <div className="reseauxSociaux flex  w-1/4 justify-evenly items-center">
        {liensReseauxSociaux.map((lienReseauSocial) => (
          <Image
            key={lienReseauSocial.id}
            className="imgCircle h-12"
            src={`/${lienReseauSocial.lien}`}
            alt={lienReseauSocial.alt}
            title={lienReseauSocial.title}
            width={50}
            height={50}
          />
        ))}
      </div>
      <div className="contact flex flex-col flex-1  justify-between items-center gap-10">
        <div className="flex flex-col items-center">
          <h2 className="titleFont text-xl font-bold">
            Rural Web Factory
          </h2>
          <h3 className="titleFont text-s">Aubeterre-sur-Dronne</h3>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-s">&copy; RuralWebFactory|2024</span>
          <span className="text-xs">
            Site réalisé par Brana Benjamin
          </span>
        </div>
      </div>
      <div className="mentions flex flex-1 justify-evenly gap-10">
        <ul className="flex flex-col gap-4 justify-center">
          <li>Mentions légales</li>
          <li>Confidentialité</li>
          <li>Cookies</li>
        </ul>
        <ul className="flex flex-col gap-4 justify-center">
          <li className="flex gap-4 items-center">
            <Image
              className="imgCircle"
              src="/logo_accessibilite.webp"
              alt="Logo accessibilité"
              title="Accessibility"
              width={32}
              height={32}
            />
            Accessibilité : non conforme
          </li>
          <li className="flex gap-4 items-center">
            <Image
              className="imgCircle"
              src="/logo_faciliti.webp"
              alt="Logo facil'iti"
              title="Facil'iti"
              width={32}
              height={32}
            />
            Facil'iti
          </li>
        </ul>
        <div className="flex items-center ">
          <Image
            className="rounded-md"
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
