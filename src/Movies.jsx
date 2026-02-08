import {Likedislike} from './Likedislike';

export function Movies({name, poster, rating, summary}) {

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
          <h3>⭐{rating}</h3>
        </div>

      </div>
      <div className="movie-summary">
        <p>
          {summary}
        </p>

      </div>
      <div className="like-edit-delete-container">
        <div className="like-dislike-full-container">
          <Likedislike />
        </div>

      </div>

    </div>
  );
}
