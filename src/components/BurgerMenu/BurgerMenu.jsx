import React from "react"
import { Link } from "react-router-dom";


function BurgerMenu({ isLoggedIn }) {
  const [isActive, setActive] = React.useState(false);

  const handleActive = () => {
    setActive((prevActive) => !prevActive);
  };

  return (
    <>
      {isLoggedIn ?
        <>
          <div className={`burger ${isActive ? 'burger_active' : ""}`} onClick={handleActive}>
            <span className="burger__visible"></span>
          </div>
          <div className={`burger__sidebar ${isActive ? 'burger__sidebar_active' : ""}`} >
            <ul className="burger__list">
              <li className="burger__list-item">
                <Link className="burger__list-link" to="/">Главная</Link>
              </li>
              <li className="burger__list-item">
                <Link className="burger__list-link" to="/movies">Фильмы</Link>
              </li>
              <li className="burger__list-item">
                <Link className="burger__list-link" to="/saved-movies">Сохранённые фильмы</Link>
              </li>
            </ul>
            <Link className="burger__link" to="/profile">Аккаунт</Link>
          </div>
        </>
        :
        <></>}
    </>
  );
}
export default BurgerMenu
