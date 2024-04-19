'use client';

import Section from '@/components/Section/Section';
import MySlider from '@/components/Slider/Slider';
import ParagrapheAccueil from '@/components/ParagrapheAccueil/ParagrapheAccueil';
import Faq from '@/components/Faq/Faq';
import CookieBanner from '@/components/Cookies/Cookies';

export default function Page({ children }) {
  return (
    <main>
      <Section className="flex gap-2 relative">
        <div className="arrowTop">
          <a href="#top" aria-label="Retour au début de la page">
            <Image
              className=" tablette:w-6 tablette:h-6"
              src="/logo/arrow_up.svg"
              alt="Logo flèche vers le haut"
              title="Logo pour retourner en haut de la page"
              width={25}
              height={25}
            />
          </a>
        </div>

        <MySlider />
        {children}
        <ParagrapheAccueil />
        <Faq />
      </Section>
      <CookieBanner />
    </main>
  );
}
