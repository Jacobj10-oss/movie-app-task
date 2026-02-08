import {useEffect, useState} from 'react';
import {Movies} from './Movies';
// import {data} from 'react-router';

export function Moviesdata () {
  const [movies, setMovies] = useState ([]);

  useEffect (() => {
    fetch ('https://6971d21532c6bacb12c49d43.mockapi.io/moviesdata', {
      method: 'GET',
    })
      .then (res => res.json ())
      .then (moviesdata => setMovies (moviesdata));
  }, []);

  return (
    <section className="movisdata-list-container">
      <div className="moviedata-list-container">

      {movies.map (({name, poster, rating, summary,id}) => (
        <Movies
          // key={id}
          // id={id}
          name={name}
          poster={poster}
          rating={rating}
          summary={summary}
        />
      ))}
      </div>

    </section>
  );
}
