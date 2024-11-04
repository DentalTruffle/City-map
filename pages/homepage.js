import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function AboutUs() {
  return (
    <>
    <Header/>
    <main className="flex flex-col items-center bg-gradient-to-b from-zinc-50 to-lime-200 min-h-screen p-4">
  <div className="flex max-w-4xl w-full mx-auto items-center">
    <div className="w-1/2 p-4">
      <h2 className="text-3xl font-bold mb-6 text-green-800 mt-16">About Us</h2>
      <p className="text-gray-700 leading-relaxed">
        Our mission is to make nomad travel easy and safe for everyone.
        Are you introverted and like to discover the world at your own pace? With us you will discover the most visited cities in the world, their safety score, and how accessible they are by public transport.
        Do you want to be able to travel at night without worrying that you will be robbed or assaulted by an aggressive local? Here we are!
        Are you a girl and afraid of unwanted attention from people? We are the right place for you.
        Do you have a small budget and don't know if you will be able to complete your plans? Don't worry, our destinations are suitable for any wallet!
        Your journey starts here. 
        Be a traveler, be a nomad!
      </p>
    </div>
    <div className="w-1/2 p-4 flex justify-center">
      <img src="/images/pic1.webp" alt="Travel inspiration" className="rounded-lg shadow-lg size-auto mt-20 ml-40" />
    </div>
  </div> 
</main>
      <Footer/>
    </>
  );
}
