import React from 'react';

function Movie({ movie }) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
    : 'https://via.placeholder.com/200';

  return (
    <div className="movie">
      <img src={imageUrl} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>Rating: {movie.vote_average}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>{movie.overview}</p>
    </div>
  );
}

export default Movie;
