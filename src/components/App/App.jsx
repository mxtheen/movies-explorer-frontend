import React, { useState, useEffect, useContext } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import PageNotFound from "../PageNotFound/PageNotFound";
import Movies from "../Movies/Movies";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";

import * as api from "../../utils/MainApi";
import { CurrentUserContext } from "../../utils/contexts/CurrentUserContext";
import { MovieProvider } from "../../utils/contexts/SavedMovieContext";
import { messages } from "../../utils/constants";
import { errMessageCheck } from "../../utils/checkResponse";
function App() {
  const navigate = useNavigate();

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isSucces, setSucces] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [isCheckAuth, setCheckAuth] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const { addCurrentUser } = useContext(CurrentUserContext);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/signin" || pathname === "/signup") {
      setErrMessage("");
    }
  }, [pathname]);

  const handleCheckToken = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      api
        .checkToken(jwt)
        .then((data) => {
          if (data) {
            setCheckAuth(true);
            handleLoggedIn();
            addCurrentUser({
              name: data.name,
              email: data.email,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setCheckAuth(false);
        });
    } else {
      setCheckAuth(false);
    }
  };

  const handleRegister = (name, email, password) => {
    setErrMessage("");
    api
      .register(name, email, password)
      .then(() => {
        setSucces(true);
        handleLogin(email, password);
      })
      .catch((err) => {
        console.log(err);
        setSucces(false);
        errMessageCheck(err, setErrMessage);
      });
  };

  const handleLogin = (email, password) => {
    setErrMessage("");
    api
      .login(email, password)
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        handleLoggedIn();
        setSucces(true);
        navigate("/movies", { replace: true });
        handleCheckToken();
      })
      .catch((err) => {
        console.log(err);
        setSucces(false);
        errMessageCheck(err, setErrMessage);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("storedMovies");
    localStorage.removeItem("moviesCopy");
    localStorage.removeItem("searchText");
    localStorage.removeItem("checkboxStatus");
    navigate("/");
    setLoggedIn(false);
  };

  useEffect(() => {
    if (!isLoggedIn) handleCheckToken();
  }, [isLoggedIn]);

  const handleUpdateUserData = (currentUser) => {
    handleClosePopup();
    setErrMessage("");
    api
      .setUserInfo(currentUser)
      .then((data) => {
        setErrMessage(messages.succes.changeData);
        addCurrentUser({
          name: data.name,
          email: data.email,
        });
        handleOpenPopup();
        setSucces(true);
      })
      .catch((err) => {
        console.log(err);
        setSucces(false);
        handleOpenPopup();
        errMessageCheck(err, setErrMessage);
      });
  };

  function handleLoggedIn() {
    setLoggedIn(true);
  }
  function handleOpenPopup() {
    setIsOpen(true);
  }
  function handleClosePopup() {
    setIsOpen(false);
  }
  return (
    <MovieProvider>
      <Routes>
        <Route path="/*" element={<PageNotFound />} />
        <Route
          path="/signup"
          element={
            <Register
              onRegister={handleRegister}
              isSucces={isSucces}
              errMessage={errMessage}
            />
          }
        />
        <Route
          path="/signin"
          element={
            <Login
              onLogin={handleLogin}
              isSucces={isSucces}
              errMessage={errMessage}
            />
          }
        />
        <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
        <Route
          path="/profile"
          element={
            <ProtectedRouteElement
              isCheckAuth={isCheckAuth}
              isLoggedIn={isLoggedIn}
            >
              <Header isLoggedIn={isLoggedIn}></Header>
              <Profile
                isOpen={isOpen}
                onClose={handleClosePopup}
                onUpdateUserData={handleUpdateUserData}
                isSucces={isSucces}
                onLogout={handleLogout}
                errMessage={errMessage}
              />
            </ProtectedRouteElement>
          }
        />
        <Route
          path="/movies"
          element={
            <ProtectedRouteElement
              isCheckAuth={isCheckAuth}
              isLoggedIn={isLoggedIn}
            >
              <Header isLoggedIn={isLoggedIn}></Header>
              <Movies />
              <Footer></Footer>
            </ProtectedRouteElement>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRouteElement
              isCheckAuth={isCheckAuth}
              isLoggedIn={isLoggedIn}
            >
              <Header isLoggedIn={isLoggedIn}></Header>
              <SavedMovies />
              <Footer></Footer>
            </ProtectedRouteElement>
          }
        />
      </Routes>
    </MovieProvider>
  );
}

export default App;
