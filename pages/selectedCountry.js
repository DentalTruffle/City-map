import { useRouter } from 'next/router';

export default function SelectedCountry() {
  const router = useRouter();
  const { countryData } = router.query;
  const country = JSON.parse(countryData);

  return (
    <>
    <main className="flex flex-col items-center bg-gradient-to-b from-zinc-50 to-lime-200 min-h-screen p-4">
        <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4">
          <h1 className="text-2xl font-bold">{country.name.common}</h1>
          <ul>
            <li><strong>Capital:</strong> {country.capital }</li>
            <li><strong>Population:</strong> {country.population.toLocaleString()}</li>
            <li><strong>Region:</strong> {country.region}</li>
            <li><strong>Subregion:</strong> {country.subregion}</li>
            <li><strong>Currency:</strong> {Object.values(country.currencies)[0].name}</li>
            <li><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</li>
            <li><strong>Flag:</strong> <img src={country.flags.png} width={100} /></li>
          </ul>
        </div>
    </main> 
    </>
  );
}
