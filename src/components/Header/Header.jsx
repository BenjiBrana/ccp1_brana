import Image from 'next/image';
export default function Header() {
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
    <header className="pt-2 pb-2 border-b bg-secondary text-textColor ">
      <nav className="flex w-full justify-between items-center">
        <div className="ml-10">
          <Image
            className="imgCircle tablette:w-1/2 mobile:w-1/3"
            src="/circle_rwf.webp"
            alt="Logo RWF"
            title="Logo Rural Web Factory"
            width={100}
            height={100}
          />
        </div>
        <ul className="flex  tablette:flex-col tablette:hidden items-center gap-2 w-full justify-evenly">
          {items.map((item) => (
            <li className="font-bold" key={item.id}>
              <a href={item.lienItem}>{item.name}</a>
            </li>
          ))}
        </ul>
        <div
          id="btnNav"
          className="hidden h-12 w-12 cursor-pointer justify-center items-center tablette:flex mr-2 mobile:mr-1"
        >
          <svg
            id="menuIcon"
            className="h-10 w-10 mobile:h-6 mobile:w-6"
            xmlns="https://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
          <svg
            id="closeIcon"
            className="hidden z-10"
            xmlns="https://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </div>
      </nav>
    </header>
  );
}
