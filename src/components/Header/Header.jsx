import Image from 'next/image';
export default function Header() {
  const items = [
    { id: 'item1', lienItem: '#services', name: 'Services' },
    { id: 'item2', lienItem: '#realisation', name: 'Réalisations' },
    { id: 'item3', lienItem: '#formation', name: 'Formations' },
    { id: 'item4', lienItem: '#offres', name: 'Offres' },
    { id: 'item5', lienItem: '#faq', name: 'FAQ' },
    { id: 'item6', lienItem: '#blog', name: 'Blog' },
    { id: 'item7', lienItem: '#evenement', name: 'Evènement' },
    { id: 'item8', lienItem: '#contact', name: 'Contact' },
  ];
  return (
    <header className="pt-2 pb-2 border-b bg-secondary text-black">
      <nav className="flex w-full">
        <div className="ml-10">
          <Image
            className="imgCircle"
            src="/circle_rwf.webp"
            alt="Logo RWF"
            title="Logo Rural Web Factory"
            width={100}
            height={100}
          />
        </div>
        <ul className="flex items-center gap-2 w-full justify-evenly">
          {items.map((item) => (
            <li className="font-bold" key={item.id}>
              <a href={item.lienItem}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
