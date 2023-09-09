import image from '../../images/movie__image.jpg'
import React from 'react';
import { useLocation } from 'react-router-dom';
function MoviesCard({movie}) {
  const [isSaved, setSaved] = React.useState(false)
  const location = useLocation();
  const isLocationSavedMovies = location.pathname === "/saved-movies";
  const handleActive = () => {
    setSaved((prevActive) => !prevActive);
  };
  console.log(movie)
  return (
    <article className="movie">
      <img src={movie.image} alt="Изображение фильма" className='movie__image'></img>
      {isLocationSavedMovies ?
       <button className=" movie__button movie__button_active-cross"></button>
       :
       <button className={`movie__button ${isSaved ? 'movie__button_active' : 'movie__button_inactive'}`} onClick={handleActive}> {isSaved ? '' : 'Сохранить'}</button>}
      <div className='movie__caption'>
        <h3 className='movie__title'>{movie.nameRU}</h3>
        <p className='movie__dutarion'>1ч 17м</p>
      </div>
    </article>
  )
}
export default MoviesCard
