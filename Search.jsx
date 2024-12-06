import React, { useState } from 'react';

function Search({ fetchMovies }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies(query);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
