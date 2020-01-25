import React, { useState } from 'react';

export default function SearchMovies() {
  const [query, setQuery] = useState('');

  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const Movies_URL = `https://api.themoviedb.org/3/search/movie?api_key=de16157e6a74d761b27aea01fad1ae48&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const response = await fetch(Movies_URL);
      const data = await response.json();
      setMovies(data.results);
      console.log(data.results);
    } catch (err) {
      console.error(err);
    }

    console.log('submiting');
  };

  return (
    <div>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="i.e. Jurassic Park"
          autoFocus
          spellCheck="false"
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <div className="card" key={movies.id}>
              <img
                className="card--image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + ' poster'}
                title={movie.title + ' poster'}
              />
              <div className="card--content">
                <h3 className="card--title">{movie.title}</h3>
                <p><small>Release data: {movie.release_date}</small></p>
                <p><small>Rating: {movie.vote_average}</small></p>
                <p className="card--desc">{movie.overview}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
