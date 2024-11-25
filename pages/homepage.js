import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Map from "@/components/Map";
import { useState } from "react";

export default function AboutUs() {
  const [showMap, setShowMap] = useState(false); 

  function handleClick() {
    setShowMap(true); 
  }

  return (
    <>
      <Header />
      <main className="flex flex-col items-center bg-gradient-to-b from-zinc-50 to-lime-200 min-h-screen p-4">
        <div className="flex max-w-4xl w-full mx-auto items-center">
          <div className="w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-6 text-green-800 mt-16">About Us</h2>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to make nomad travel easy and safe for everyone.
            </p>
            <ul>
              <li>Are you introverted and like to discover the world at your own pace?</li>
              <li>Do you want to be able to travel at night without worrying that you will be robbed or assaulted? We have only the safest countries!</li>
              <li>Are you a girl and afraid of unwanted attention from people? Here are only friendly countries..</li>
              <li>Do you have a small budget and don't know if you will be able to complete your plans? Our destinations are suitable for any wallet!</li>
            </ul>
            <h2>Your journey starts here. Be a traveler, be a nomad!</h2>
            <button
              type="button"
              onClick={handleClick}
              className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg"
            >
              {showMap ? 'Map loaded' : 'My location'}
            </button>
          </div>
          <div className="w-1/2 p-4 flex justify-center">
            <img src="/images/pic1.webp" alt="Travel inspiration" className="rounded-lg shadow-lg size-auto mt-20 ml-40" />
          </div>
        </div>

        {showMap && <Map />} 

      </main>
      <Footer />
    </>
  );
}
