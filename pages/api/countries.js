import path from 'path';
import fs from 'fs/promises';

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), 'data', 'continents.json'); 
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(jsonData);

  if (req.method === 'GET') {
    const option = req.query;
    const continentId = parseInt(option.continent);
    const countryName = option.input.toLowerCase();

    if (continentId) {
      const currentContinent = data.continents.find(c => c.id === continentId);
      if (!currentContinent) {
        return res.status(400).json({ message: 'Continent not found' });
      }
        return res.status(200).json(currentContinent.countries);
     } 
    
    if (countryName) {
      const foundCountry = data.continents
        .flatMap(continent => continent.countries)
        .find(country => country.name.toLowerCase() === countryName);

      if (foundCountry) {
        return res.status(200).json(foundCountry);
      } else {
        return res.status(404).json({ message: 'Country not found' });
      }
   }}}
