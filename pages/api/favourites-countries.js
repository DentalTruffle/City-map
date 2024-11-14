
import pg from 'pg';

const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'World',
  password: 'itQuicklearner', 
  port: 5432,
});

db.connect();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { country } = req.body;

    try {
      const checkResult = await db.query('SELECT * FROM favourite_countries WHERE country_id = $1', [country.cca3]);
      if (checkResult.rows.length > 0) {
        return res.status(409).json({ message: 'Country already in favourites' });
      }

      await db.query('INSERT INTO favourite_countries (country_id, name) VALUES ($1, $2)', [country.cca3, country.name.common]);
      return res.status(201).json({ message: 'Country added to favourites' });
    } catch (error) {
      console.error('Error saving favourite country:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
  else if (req.method === 'GET') {
    try {
      const result = await db.query('SELECT * FROM favourite_countries');
      return res.status(200).json({ countries: result.rows });
    } catch (error) {
      console.error('Error fetching favourite countries:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
