import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function CountryPage() {
  const router = useRouter();
  const { countryData } = router.query;
  const [country, setCountry] = useState(null);

  useEffect(() => {
    if (countryData) {
      try {
        const parsedData = JSON.parse(countryData);
        setCountry(parsedData);
      } catch (error) {
        console.error('Failed to parse country data:', error);
      }
    }
  }, [countryData]);

  const handleSaveToFavourites = async () => {
    try {
      const response = await fetch('/api/favourites-countries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ country }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to save country');
      }
      alert('Country saved to favourites!');
    } catch (error) {
      console.error('Error saving country:', error);
      alert('Something went wrong while saving the country.');
    }
  };

  return (
    <>
      <Header />
      <main className="flex flex-col items-center bg-gradient-to-b from-zinc-50 to-lime-200 min-h-screen p-4">
        <h1 className="text-3xl font-bold mb-4">Country Information</h1>
        <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4">
          <h1 className="text-2xl font-bold">{country.name.common}</h1>
          <ul>
            <li><strong>Capital:</strong> {country.capital}</li>
            <li><strong>Population:</strong> {country.population.toLocaleString()}</li>
            <li><strong>Region:</strong> {country.region}</li>
            <li><strong>Subregion:</strong> {country.subregion}</li>
            <li><strong>Currency:</strong> {Object.values(country.currencies)[0]?.name}</li>
            <li><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</li>
            <li><strong>Flag:</strong> <img src={country.flags.png} width={100} /></li>
          </ul>
        </div>
        <button
          onClick={handleSaveToFavourites}
          className="rounded-md bg-slate-800 p-2.5 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
        >
          Save to Favourites
        </button>
      </main>
      <Footer />
    </>
  );
}
