import Link from 'next/link';
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { useState } from 'react';
import { continents } from "/data/continents";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CountryPage() {
  const [selectedContinent, setSelectedContinent] = useState('');
  const [countryOptions, setCountryOptions] = useState([]);

  const handleContinentChange = (value) => {
    const continent = continents.find(cont => cont.value === value);
    if (continent) {
      setSelectedContinent(continent);
      setCountryOptions(continent.countries);
    }
  };

  return (
    <>
      <Header />
      <main className="flex flex-col items-center bg-gradient-to-b from-zinc-50 to-lime-200 min-h-screen p-4">
        <div className="w-full max-w-sm mx-auto mt-10">
          <h1 className="text-3xl font-bold mb-6 text-center">Select a Continent</h1>
          <Autocomplete
            defaultItems={continents}
            label="Continents"
            placeholder="Select a continent"
            onSelectionChange={handleContinentChange}
          >
            {continents.map(cont => (
              <AutocompleteItem key={cont.value} className="text-lg p-2">
                {cont.label}
              </AutocompleteItem>
            ))}
          </Autocomplete>

          {selectedContinent && (
            <>
              <h2 className="text-2xl font-bold mt-8 text-center">Discover our top destinations</h2>
              <Autocomplete
                label="Countries"
                placeholder="Select a country"
              >
                {countryOptions.map(choice => (
                  <AutocompleteItem key={choice} className="text-lg p-2">
                    {choice}
                  </AutocompleteItem>
                ))}
              </Autocomplete>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
