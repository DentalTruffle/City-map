import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import  {continents}  from "@/data/continents.json";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CountryPage() {
  const router = useRouter();
  const { continentId } = router.query;
  
  const [selectedContinent, setSelectedContinent] = useState('');
  const [countries, setCountries] = useState([]);

  const handleContinentChange = (e) => {
    const selected = e.target.value;
    setSelectedContinent(selected);
    
    const continent = continents.find(cont => cont.name === selected);
    if (continent) {
      router.push(`/country-page?continentId=${continent.id}`);
    }};

  useEffect(() => {
    if (continentId) {
      const continent = continents.find(cont => cont.id === parseInt(continentId));
      if (continent) {
        setCountries(continent.countries);
      }}
  }, [continentId]);

  return (
    <>
      <Header />
      <main className="flex flex-col items-center bg-gradient-to-b from-zinc-50 to-lime-200 min-h-screen p-4">
        <div className="w-full max-w-sm mx-auto mt-10">
          <h1 className="text-3xl font-bold mb-6 text-center">Select a Continent</h1>
          <label className="block mb-2">Continent:</label>
          <select 
            value={selectedContinent} 
            onChange={handleContinentChange} 
            className="w-full p-2 border rounded-md mb-6"
          >
            <option>Select a continent</option>
            {continents.map(cont => (
              <option key={cont.id} value={cont.name}>{cont.name}</option>
            ))}
          </select>

          {countries.length > 0 && (
            <>
              <label className="block mb-2">Countries:</label>
              <select className="w-full p-2 border rounded-md">
                <option>Select a country</option>
                {countries.map(country => (
                  <option key={country.name} value={country.name}>{country.name}</option>
                ))}
              </select>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
