import './globals.css';
import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import FilAriane from '@/components/FilAriane/FilAriane';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: 'Rural Web Factory',
  description:
    "La Rural Web Factory offre une gamme de services pour aider votre entreprise à naviguer dans le monde numérique. Nos services incluent la transformation numérique, les audits d'entreprise, la communication et le webmarketing, la création de campagnes publicitaires, la création d'identité visuelle, le développement web et la gestion des réseaux sociaux, ainsi que le community management.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        id="top"
        className="changeMode font-textFont text-textColor bg-primary"
      >
        <Header />
        <FilAriane />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
