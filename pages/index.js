import Footer from '@/components/Footer';
import CarouselComponent from '@/components/Carousel';

export default function StartPage() {
  const images = [
    '/images/img1.jpg',
    '/images/img2.jpg',
    '/images/img3.jpg',
    '/images/img4.jpg',
    '/images/img5.jpg',
    '/images/img6.jpg',
  ];
  return (
    <>
     <main className="flex flex-col items-center bg-gradient-to-b from-zinc-50 to-lime-200 min-h-screen p-4">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-blue-900 mt-10">Are you a nomad traveler?</h1>
        <h2 className="text-2xl font-light text-blue-800 mt-4">Your favourite destinations, under a single <a href="./homepage" className='underline'>click</a></h2>
      </div>
      <CarouselComponent items={images}/>
    </main>
    <Footer/>
    </>
  );
}
