import Image from 'next/image';
import Section from '@/components/Section/Section';
import MySlider from '@/components/Slider/Slider';
export default function Home() {
  return (
    <main>
      <section className="flex tablette:flex-col items-center bg-textColor">
        <div className="w-full flex  justify-center h-16">
          <h1 className="flex items-end font-titleFont font-bold text-4xl mobile:text-2xl  p-2 text-primary">
            Rural <b className="pl-1 text-tertinary ">W</b>eb Factory
          </h1>
        </div>
        <div className="search flex justify-center my-10  w-full">
          <input
            className="border border-borderColor shadow shadow-white w-1/4 rounded-l-lg px-2 tablette:w-2/4"
            type="search"
            name="search"
            id="search"
          />
          <button
            className="btn shadow rounded-r-lg shadow-white"
            type="submit"
          >
            <Image
              className="border border-borderColor rounded-r-lg"
              src="/logo_search.webp"
              alt="Logo search"
              title="Logo de recherche"
              width={45}
              height={45}
            />
          </button>
        </div>
      </section>
      <MySlider />
      <Section />
    </main>
  );
}
