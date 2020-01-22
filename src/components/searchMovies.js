import React, {useState} from 'react';

export default function SearchMovies() {

  // state => { input-query, movies }

  const searchMovies = async (e) => {
    e.preventDefault();

    const query = 'Transformers';

    const Movies_URL = `https://api.themoviedb.org/3/search/movie?api_key=de16157e6a74d761b27aea01fad1ae48&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const response = await fetch(Movies_URL);
      const data = await response.json();
      
    } catch (err) {
      console.error(err);
    }


    console.log('submiting');
  };

  return (
    <form className="form" onSubmit={searchMovies}>
      <label className="label" htmlFor="query">
        Movie Name
      </label>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="i.e. Jurassic Park"
        autoFocus
        spellCheck="false"
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}