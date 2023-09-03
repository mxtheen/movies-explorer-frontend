import { Link } from 'react-router-dom'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
function Header({ isLoggedIn }) {
  return (
    <header className="header">
      <Link to="/" className='header__logo'></Link>
      {isLoggedIn ?
        <>
          <ul className="header__menu">
            <li className='header__menu-item'>
              <Link to="/movies" className='header__menu-link'>Фильмы</Link>
            </li>
            <li className='header__menu-item'>
              <Link to="/saved-movies" className='header__menu-link'>Сохранённые фильмы</Link>
            </li>
          </ul>
          <Link to="/profile" className='header__menu-button'>Аккаунт</Link>
        </>
        :
        <div className='header__links'>
          <Link to="/signup" className="header__register-link">Регистрация</Link>
          <Link to="/signin" className="header__login-link">Войти</Link>
        </div>}
      <BurgerMenu isLoggedIn={isLoggedIn}></BurgerMenu>
    </header>
  )
}

export default Header
