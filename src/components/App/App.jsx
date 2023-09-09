import React, {useState, useEffect} from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';
import Movies from '../Movies/Movies';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';

import * as auth from "../../utils/auth";
import apiInit from '../../utils/apiInit';
function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isInfoToolTipOpen, setInfoToolTipOpen] = useState(false);
  const [isSucces, setSucces] = useState(false);
  const [movies, setMovies] = useState([])

  useEffect(()=> {
    const jwt = localStorage.getItem('jwt');
    if(jwt) {
      Promise.all([
        apiInit.getInitialCards()
      ])
      .then(([movieData])=> {
        setMovies(movieData)
      })
      .catch((err)=> {
        console.log(err)
      })
    }
  },[isLoggedIn])

  const handleRegister = (name, email, password) => {
    auth.register(name, email, password)
    .then((data) =>{
      setInfoToolTipOpen(true)
      setSucces(true)
      handleLogin(email, password)
    })
    .catch ((err) => {
      setInfoToolTipOpen(true)
      setSucces(false)
    })
  }
  const handleLogin = (email, password) => {
    auth.login(email, password)
    .then((data) =>{
      localStorage.setItem('jwt', data.token)
      handleLoggedIn()
      navigate('/movies')
    })
    .catch ((err) => {
      console.log(err)
      setInfoToolTipOpen(true)
      setSucces(false)
    })
  }

  const handleCheckToken = () => {
    const jwt = localStorage.getItem("jwt")
    if (jwt) {
      auth.checkToken(jwt)
        .then((data) => {
          handleLoggedIn()
          navigate("/movies")
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
  useEffect (()=> {
    handleCheckToken()
  }, [])

  const handleLoggedIn = () => {
    setLoggedIn(true)
  }
  const closePopup = () => {
    setInfoToolTipOpen(false)
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/signup" element={<Register onRegister={handleRegister} isOpen={isInfoToolTipOpen} isSucces={isSucces} isClose={closePopup}/>} />
        <Route path="/signin" element={<Login onLogin={handleLogin}/>} />
        <Route path="/" element={<Main isLoggedIn={isLoggedIn}/>} />
        <Route path="/profile" element={<ProtectedRouteElement isLoggedIn={isLoggedIn} element={Profile}></ProtectedRouteElement>}/>
        <Route path="/movies" element={<ProtectedRouteElement isLoggedIn={isLoggedIn} element={Movies} movies={movies}></ProtectedRouteElement>}/>
        <Route path="/saved-movies" element={<ProtectedRouteElement isLoggedIn={isLoggedIn} element={SavedMovies}></ProtectedRouteElement>}/>
      </Routes>
    </div>
  );
}

export default App;
