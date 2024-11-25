
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';

export default function FavouritesPage() {
  const [favouriteCountries, setFavouriteCountries] = useState([]);

  useEffect(() => {
    async function fetchFavouriteCountries() {
      try {
        const response = await fetch('/api/favourites-countries');
        if (response.ok) {
          const data = await response.json();
          setFavouriteCountries(data.countries || []);
        } else {
          console.error('Failed to fetch favourite countries');
        }
      } catch (error) {
        console.error('Error fetching favourite countries:', error);
      }
    }
    fetchFavouriteCountries();
  }, []);

  return (
    <>
    <Header/>
<main className="flex flex-col items-center bg-gradient-to-b from-zinc-50 to-lime-200 min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Favourite Countries</h1>
      {favouriteCountries.length > 0 ? (
        favouriteCountries.map((country) => (
          <div key={country.id} className="p-4 border rounded mb-2">
            <h2 className="text-xl">{country.name}</h2>
            <p>ID: {country.country_id}</p>
          </div>
        ))
      ) : (
        <p>No favourite countries saved yet.</p>
      )}
    </main>
    <Footer/>
    </> 
  );
}
