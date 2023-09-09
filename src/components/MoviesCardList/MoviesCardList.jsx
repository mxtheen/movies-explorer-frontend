import MoviesCard from '../../components/MoviesCard/MoviesCard'
import { useLocation } from 'react-router-dom';

function MoviesCardList({ movies }) {
  const location = useLocation();
  const isLocationSavedMovies = location.pathname === "/saved-movies";
  return (
    <section className="movies">
      <div className='movies__list'>
      {movies.map((movie) => (
          <MoviesCard key={movie.id} movie={movie}>
          </MoviesCard>
        ))}
      </div>
      {isLocationSavedMovies ?
        <div className="movie__space-devider">
        </div>
        :
        <div className='movie__load'>
          <button className='movies__load-button'>Еще</button>
        </div>}
    </section>
  )
}
export default MoviesCardList
