import MoviesCard from "../../components/MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

import { messages } from "../../utils/constants";

function MoviesCardList({
  movies,
  isLoading,
  onDelete,
  addMoreFilms,
  showMoreBtn,
  error,
  children,
}) {
  return (
    <section className="movies">
      <div className="movies__list">
        {children}
        {isLoading && <Preloader />}
        {error && (
          <div className="movies__container">
            <p className="movies__message">{messages.error.internalMessage}</p>
          </div>
        )}

        {movies.length > 0
          ? movies.map((movie) => (
              <MoviesCard
                key={movie.id || movie._id}
                movie={movie}
                onDelete={onDelete}
              />
            ))
          : localStorage.getItem("storedMovies") !== null && (
              <div className="movies__container">
                <p className="movies__message">
                  {messages.error.notFoundMovie}
                </p>
              </div>
            )}
      </div>
      {showMoreBtn ? (
        <div className="movie__load">
          <button onClick={addMoreFilms} className="movies__load-button">
            Еще
          </button>
        </div>
      ) : (
        <div className="movie__space-devider"></div>
      )}
    </section>
  );
}
export default MoviesCardList;
