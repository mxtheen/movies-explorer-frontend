import React, { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

function BurgerMenu({ isLoggedIn }) {
  const [isActive, setActive] = React.useState(false);
  const location = useLocation();

  useEffect(() => {
    setActive(false);
  }, [location]);

  const handleActive = () => {
    setActive((prevActive) => !prevActive);
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <button
            className={`burger ${isActive ? "burger_active" : ""}`}
            onClick={handleActive}
          >
            <span className="burger__visible"></span>
          </button>
          <div
            className={`burger__sidebar ${
              isActive ? "burger__sidebar_active" : ""
            }`}
          >
            <ul className="burger__list">
              <li className="burger__list-item">
                <NavLink className="burger__list-link" to="/">
                  Главная
                </NavLink>
              </li>
              <li className="burger__list-item">
                <NavLink className="burger__list-link" to="/movies">
                  Фильмы
                </NavLink>
              </li>
              <li className="burger__list-item">
                <NavLink className="burger__list-link" to="/saved-movies">
                  Сохранённые фильмы
                </NavLink>
              </li>
            </ul>
            <Link className="burger__link" to="/profile">
              Аккаунт
            </Link>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
export default BurgerMenu;
