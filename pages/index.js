import { useState } from 'react';
import { useRouter } from 'next/router';

export default function StartPage() {
  const [input, setInput] = useState('');
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
      const response = await fetch(`https://restcountries.com/v3.1/name/${input}`);
      if (!response.ok) throw new Error('Country not found');

      const countryData = await response.json();
      router.push({
        pathname: '/selectedCountry',
        query: { countryData: JSON.stringify(countryData[0]) }
      });
    }

    function handleChange(e){
      setInput(e.target.value)
    }
  
  return (
    <main className="flex flex-col items-center bg-gradient-to-b from-zinc-50 to-lime-200 min-h-screen p-4">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-blue-900 mt-20">Are you a nomad traveler?</h1>
        <h2 className="text-2xl font-light text-blue-800 mt-4">Your favourite destinations, under a single <a href="./homepage" className='underline'>click</a></h2>
      </div>
      <form id="form" className="mt-4 content-center" onSubmit={handleSubmit}>
        <input
          type="search"
          value={input}
          onChange={handleChange}
          placeholder="Search..."
          className="border border-green-500 rounded-md p-2 w-1/2" />
        <button className="ml-2 bg-lime-700 text-white p-2 rounded-md">Explore</button>
      </form>
    </main>
  );
}
