import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import DB_URL from "../../utils/MoviesApi";
import formatDuration from "../../utils/formatDuration";
import { MovieContext } from "../../utils/contexts/SavedMovieContext";

function MoviesCard({ movie }) {
  const location = useLocation();
  const isLocationSavedMovies = location.pathname === "/saved-movies";
  const { addMovieToSaved, handleDeleteMovie } = useContext(MovieContext);
  const { savedMovies } = useContext(MovieContext);
  const isSaved = (items) => {
    return items.some((item) => item.movieId === movie.id);
  };

  return (
    <article className="movie">
      <a href={movie.trailerLink} target="_blank" rel="noreferrer">
        <img
          src={
            isLocationSavedMovies ? movie.image : `${DB_URL}/${movie.image.url}`
          }
          alt="Изображение фильма"
          className="movie__image"
        />
      </a>
      {isLocationSavedMovies ? (
        <button
          type="button"
          className=" movie__button movie__button_active-cross"
          onClick={() => handleDeleteMovie(movie)}
        ></button>
      ) : (
        <button
          className={`movie__button ${
            isSaved(savedMovies)
              ? "movie__button_active"
              : "movie__button_inactive"
          }`}
          onClick={
            isSaved(savedMovies)
              ? () => {
                  handleDeleteMovie(movie);
                }
              : () => {
                  addMovieToSaved(movie);
                }
          }
        >
          {isSaved(savedMovies) ? "" : "Сохранить"}
        </button>
      )}
      <div className="movie__caption">
        <h3 className="movie__title">{movie.nameRU}</h3>
        <p className="movie__dutarion">{formatDuration(movie.duration)}</p>
      </div>
    </article>
  );
}
export default MoviesCard;
