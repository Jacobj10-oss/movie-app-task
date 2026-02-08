import {useState} from 'react';
import {Likedislike} from './Likedislike';

import Button from '@mui/material/Button';

export function Movies({name, poster, rating, summary, deletemovie}) {
  const [show, setShow] = useState (false);

  return (
    <div className="movies-container">
      <div className="movie-poster">
        <img src={poster} alt={name} />
      </div>
      <div className="movie-name-rating">
        <div className="movie-name">
          <h3>{name}</h3>
        </div>

        <div className="movie-rating">
          <h3>
            ⭐{rating}
          </h3>
        </div>

      </div>

      <div className="movie-summary-button">
        <Button variant="outlined" onClick={() => setShow (!show)}>
          Summary
        </Button>
      </div>

      {show
        ? <div className="movie-summary">
            <p>
              {summary}
            </p>

          </div>
        : null}

      <div className="like-edit-delete-container">
        <div className="like-dislike-full-container">
          <Likedislike />
        </div>
        <div>
          {deletemovie}
        </div>

      </div>

    </div>
  );
}
