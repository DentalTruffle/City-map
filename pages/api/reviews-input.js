import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database:process.env.REVIEW_DB,
  password: process.env.REVIEW_DB_PASSWORD,
  port: 5432,
});

db.connect();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const result = await db.query("SELECT * FROM reviews");
      res.status(200).json({ success: true, reviews: result.rows });
    } catch (error) {
      console.error("Error fetching reviews:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else if (req.method === "POST") {
    const { name, title, description } = req.body;

    try {
      const result = await db.query("INSERT INTO reviews (name, title, description) VALUES ($1, $2, $3) RETURNING *", [name, title, description] );
      const newReview = result.rows[0];
      res.status(201).json({ success: true, review: newReview });
    } catch (error) {
      console.error("Error saving review:", error);
      res.status(500).json({ error: "Failed to save review" });
    }} else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
