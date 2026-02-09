import {useState} from 'react';
import {Likedislike} from './Likedislike';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export function Movies({
  name,
  poster,
  rating,
  summary,
  deletemovie,
  editmovie,
}) {
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
        <div className="movie-summary-button">
          <IconButton aria-label="toggle" onClick={() => setShow (!show)}>
            {show
              ? <ExpandMoreIcon color="primary" />
              : <ExpandLessIcon color="primary" />}

          </IconButton>

        </div>

        <div className="movie-rating">
          <h3>
            ⭐{rating}
          </h3>
        </div>

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
        <div className="edit-delete">
          {editmovie}
          {deletemovie}
        </div>

      </div>

    </div>
  );
}
