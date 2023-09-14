import React, { createContext, useState, useEffect, useContext } from "react";
import * as api from "../MainApi";
import { CurrentUserContext } from "./CurrentUserContext";

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [savedMovies, setSavedMovies] = useState([]);
  const { user } = useContext(CurrentUserContext);
  const getSavedList = () => {
    api
      .getSavedMovies()
      .then((savedMovies) => {
        setSavedMovies(savedMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addMovieToSaved = (movie) => {
    api
      .saveNewMovie(movie)
      .then((savedMovie) => {
        setSavedMovies((prev) => [...prev, savedMovie]);
        console.log(savedMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteMovie = (movie) => {
    const currentId = savedMovies.find(
      (item) => item.movieId === movie.id || item.movieId === movie.movieId
    )._id;
    api
      .deleteMovie(currentId)
      .then((res) => {
        setSavedMovies((savedMovies) =>
          savedMovies.filter((item) => item._id !== currentId)
        );
        console.log(savedMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (user?.name) {
      getSavedList();
    }
  }, [user]);

  return (
    <MovieContext.Provider
      value={{ savedMovies, addMovieToSaved, handleDeleteMovie }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };
