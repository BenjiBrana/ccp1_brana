import Image from 'next/image';
import NosServices from '../NosServices/NosServices';
import Realisation from '../Realisation/Realisation';
import Formations from '../Formations/Formation';
import Offres from '../Offres/Offres';
import Faq from '../Faq/Faq';

export default function Section() {
  return (
    <>
      <NosServices />
      <Realisation />
      <Formations />
      <Offres />
      <Faq />
    </>
  );
}
