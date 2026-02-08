import {useEffect, useState} from 'react';
import {Movies} from './Movies';
// import {data} from 'react-router';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export function Moviesdata () {
  const [movies, setMovies] = useState ([]);

  useEffect (() => {
    fetch ('https://6971d21532c6bacb12c49d43.mockapi.io/moviesdata', {
      method: 'GET',
    })
      .then (res => res.json ())
      .then (moviesdata => setMovies (moviesdata));
  }, []);

  const moviedataclone = () => {
    fetch ('https://6971d21532c6bacb12c49d43.mockapi.io/moviesdata', {
      method: 'GET',
    })
      .then (res => res.json ())
      .then (moviedata => setMovies (moviedata));
  };

  const deletemovie = id => {
    fetch (`https://6971d21532c6bacb12c49d43.mockapi.io/moviesdata/${id}`, {
      method: 'DELETE',
    })
      .then (res => res.json ())
      .then (() => moviedataclone ());
  };

  return (
    <section className="movisdata-list-container">
      <div className="moviedata-list-container">

        {movies.map (({name, poster, rating, summary, id}) => (
          <Movies
            // key={id}
            id={id}
            name={name}
            poster={poster}
            rating={rating}
            summary={summary}
            deletemovie={
              <div className="delete-button">
                {/* <Button variant="outlined" onClick={() => deletemovie (id)}> */}
                <IconButton
                  aria-label="delete"
                  color="error"
                  onClick={() => deletemovie (id)}
                >
                  <DeleteIcon />
                </IconButton>
                {/* </Button> */}
              </div>
            }
          />
        ))}
      </div>

    </section>
  );
}
