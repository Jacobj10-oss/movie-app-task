import {useEffect, useState} from 'react';
import {Movies} from './Movies';
// import {data} from 'react-router';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import TextField from '@mui/material/TextField';


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

  const editmovie = id => {
    fetch (`https://6971d21532c6bacb12c49d43.mockapi.io/moviesdata/${id}`, {
      method: 'UPDATE',
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

                <IconButton
                  aria-label="delete"
                  color="error"
                  onClick={() => deletemovie (id)}
                >
                  <DeleteIcon />
                </IconButton>

              </div>
            }
            editmovie={
              <div className="delete-button">

                <IconButton
                  aria-label="delete"
                  color="primary"
                  onClick={() => editmovie (id)}
                >
                  <ModeEditIcon />
                </IconButton>

              </div>
            }
          />
        ))}
      </div>

    </section>
  );
}

// export function AddMovie () {
//   const [name, setName] = useState ('');
//   const [poster, setPoster] = useState ('');
//   const [rating, setRating] = useState ('');
//   const [summary, setSummary] = useState ('');
//   const createMovie = () => {
//     const newMovie = {
//       name: name,
//       poster: poster,
//       rating: rating,
//       summary: summary,
//     };
//     fetch ('https://6971d21532c6bacb12c49d43.mockapi.io/moviesdata', {
//       method: 'POST',
//       headers: {'Content-Type': 'application/json'},
//       body:JSON.stringify(newMovie)
//     });
//   };

//   return (
//     <div className="add-movie-container">

//       <div className="movie-add-container">

//         <TextField
//           label="Movie-Name"
//           variant="outlined"
//           onChange={event => setName (event.target.value)}
//           value={name}
//         />

//         <TextField
//           label="Movie-Poster"
//           variant="outlined"
//           onChange={event => setPoster (event.target.value)}
//           value={poster}
//         />

//         <TextField
//           label="Movie-Rating"
//           variant="outlined"
//           onChange={event => setRating (event.target.value)}
//           value={rating}
//         />

//         <TextField
//           label="Movie-Summary"
//           variant="outlined"
//           onChange={event => setSummary (event.target.value)}
//           value={summary}
//         />
//       </div>

//       <div className="add-more-movies-button">
//         <Button variant="outlined" onClick={() => createMovie ()}>
//           Add More Movie
//         </Button>
//       </div>

//     </div>
//   );
// }
