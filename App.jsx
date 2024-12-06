import React, { useState } from 'react';
import axios from 'axios';
import Search from './components/Search';
import MovieList from './components/MovieList';
import './App.css';
import Practice from './components/Practice';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = (query) => {
    setLoading(true);
    setError(null);
    const apiKey = '48877f7e55df558a0f0da254128d015f';
    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`)
      .then((response) => {
        setMovies(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching movies. Please try again.');
        setLoading(false);
      });
  };

  return (
    <div className="App">
      <h1>Movie Search App</h1>
      <Search fetchMovies={fetchMovies} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
