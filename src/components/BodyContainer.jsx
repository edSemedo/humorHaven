import React, { useEffect, useState } from 'react';
import HH_logo from '../assets/HH_logo.jpg';


export default function BodyContainer() {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);

  const API_KEY = import.meta.env.VITE_API_KEY;

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/jokes/random?api-key=${API_KEY}`);
      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      console.error('Error fetching joke:', error);
      setJoke('Failed to fetch joke. Please try again.');
    }
    setLoading(false);
  };

  useEffect(() => {
    // fetchJoke();
  }, []);

  return (
    <div className="bodyContainer">
      <div className="header">
        <img src={HH_logo} alt="Header Logo" />
        <h2>Welcome to Humour Haven</h2>
        <h3>The best place to get your daily dose of jokes</h3>
      </div>
      <div className="board">
        <h3>Joke of the Day</h3>
        <div className="joke">
          {loading ? 'Loading...' : joke}
        </div>
        <button onClick={fetchJoke}>Generate a new Joke</button>
      </div>
    </div>
  );
}
