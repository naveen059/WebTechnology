import React from 'react';
import Movie from './Movie';

function MovieList({ movies }) {
  return (
    <div>
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.id} movie={movie} />)
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
}

export default MovieList;
