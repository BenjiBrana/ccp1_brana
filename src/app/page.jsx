import Image from 'next/image';
import Section from '@/components/Section/Section';
export default function Home() {
  return (
    <main>
      <div className="search">
        <div className="searchBar">
          <input type="search" name="search" id="search" />
          <Image src="" alt="" />
        </div>
      </div>
      <div className="slider flex items-center justify-between bg-black">
        <span className="arrowLeft text-red-500">G</span>
        <div className="slide relative">
          <Image
            src="/slide1.jfif"
            alt="Image slide 1"
            width={600}
            height={600}
          />
          <div className="btnSlide absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-8">
            <span className="text-red-500 text-lg">0</span>
            <span className="text-red-500 text-lg">0</span>
            <span className="text-red-500 text-lg">0</span>
          </div>
        </div>
        <span className="arrowRight text-red-500">D</span>
      </div>
      <Section />
    </main>
  );
}
