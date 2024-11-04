// import CarouselTransition from "@/components/Carousel";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center bg-gradient-to-b from-zinc-50 to-lime-200 min-h-screen p-4">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-blue-900 mt-20">Are you a nomad traveler?</h1>
          <h2 className="text-2xl font-light text-blue-800 mt-4 ">Your favourite destinations, under a single <a href="/homepage" className='underline decoration-solid'>click</a></h2>
        </div>
        <div>
          <form id="form" className="mt-4 content-center">
            <input type="search" id="query" name="q" placeholder="Search..." className="border border-green-500 rounded-md p-2 w-1/2"/>
            <button className="ml-2 bg-lime-700 text-white p-2 rounded-md">Explore</button>
          </form>
        </div>
        
      </main>
    </>
  );
}
