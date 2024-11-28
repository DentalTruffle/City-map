import { useState, useEffect } from "react";
import {FaStar} from 'react-icons/fa'

export default function ReviewComponent() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [rateColor, setColor] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchReviews(){
      try {
        const response = await fetch("/api/reviews-input");
        const data = await response.json();

        if (data.success) {
          setReviews(data.reviews); 
        } else {
          setError("Failed to load reviews");
        }} catch (error) {
        console.error("Error fetching reviews:", error);
        setError("Failed to load reviews");
      }
    };

    fetchReviews();
  }, []); 


  async function handleSubmit(e){
    e.preventDefault();

    try {
      const response = await fetch("/api/reviews-input", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, title, description }),
      });

      if (!response.ok) {
        throw new Error("Failed to save review");
      }

      const data = await response.json();
      setReviews((prev) => [...prev, data.review]); 
      setName(""); 
      setTitle("");
      setDescription("");
      setRating(0);
    } catch (error) {
      setError("Failed to save review. Please try again.");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Write a Review</h2>
      <div className="flex mb-4">
        {[...Array(5)].map((star, index) => {
          const currentRate = index + 1;
          return (
            <label key={index}>
              <input type="radio" name="rate" value={currentRate} onClick={() => setRating(currentRate)} className="hidden"/>
              <FaStar size={20} color={currentRate <= rating ? "orange" : "grey"}/>
            </label>
          );
        })}
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <input
          type="text"
          placeholder="Your Name"
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <input
          type="text"
          placeholder="Review Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Review Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"></textarea>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">Submit</button>
      </form>

      <h3 className="text-xl font-semibold mb-4">Reviews</h3>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4 mb-4 shadow-sm">
            <h4 className="text-lg font-bold">{review.title}</h4>
            <p className="text-gray-700"><strong>By:</strong> {review.name}</p>
            <p className="text-gray-600">{review.description}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No reviews yet. Be the first to write one!</p>
      )}
    </div>
  );
}
