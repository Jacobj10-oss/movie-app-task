import {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function AddMovie () {
  const [name, setName] = useState ('');
  const [poster, setPoster] = useState ('');
  const [rating, setRating] = useState ('');
  const [summary, setSummary] = useState ('');

  const createMovie = () => {
    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
    };
    fetch ('https://6971d21532c6bacb12c49d43.mockapi.io/moviesdata', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify (newMovie),
    });
  };

  return (
    <div className="add-movie-container">

      <div className="movie-add-container">

        <TextField
          label="Movie-Name"
          variant="outlined"
          onChange={event => setName (event.target.value)}
          value={name}
        />

        <TextField
          label="Movie-Poster"
          variant="outlined"
          onChange={event => setPoster (event.target.value)}
          value={poster}
        />

        <TextField
          label="Movie-Rating"
          variant="outlined"
          onChange={event => setRating (event.target.value)}
          value={rating}
        />

        <TextField
          label="Movie-Summary"
          variant="outlined"
          onChange={event => setSummary (event.target.value)}
          value={summary}
        />
      </div>

      <div className="add-more-movies-button">
        <Button variant="outlined" onClick={() => createMovie ()}>
          Add More Movie
        </Button>
      </div>

    </div>
  );
}
