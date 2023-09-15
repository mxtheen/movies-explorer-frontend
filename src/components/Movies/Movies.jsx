import { useEffect, useState } from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import * as db from "../../utils/MoviesApi";
import { SHORT_MOVIE_DURATION } from "../../utils/constants";

function Movies({ setValue, onDelete }) {
  const [windowSize, setWindowSize] = useState({});
  const [filmsCount, setFilmsCount] = useState(0);

  function getWindowSize() {
    const { innerWidth } = window;
    if (innerWidth < 768) {
      setFilmsCount(5);
    } else if (innerWidth < 1271) {
      setFilmsCount(8);
    } else setFilmsCount(12);
    return innerWidth;
  }

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const [movies, setMovies] = useState(
    JSON.parse(localStorage.getItem("storedMovies")) || []
  );
  const [moviesCopy, setMoviesCopy] = useState(
    JSON.parse(localStorage.getItem("moviesCopy")) || []
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [firstSubmit, setFirstSubmit] = useState(false);

  const fliterData = (someData, filterValue) => {
    return someData.filter(
      (item) =>
        item.nameRU.toLowerCase().includes(filterValue.toLowerCase()) ||
        item.nameEN.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  const handleInitialMovies = () => {
    setIsLoading(true);
    db.getInitialMovies()
      .then((data) => {
        const filterName = localStorage.getItem("searchText");
        let updatedData = fliterData(data, filterName);
        const isOn = localStorage.getItem("checkboxStatus") === "true";
        if (isOn) {
          updatedData = updatedData.filter(
            (item) => item.duration <= SHORT_MOVIE_DURATION
          );
        }
        setMovies(updatedData);
        setMoviesCopy(data);
        localStorage.setItem("moviesCopy", JSON.stringify(data));
        localStorage.setItem("storedMovies", JSON.stringify(updatedData));
        setError(false);
        const updatedFilmsCount =
          windowSize < 768 ? 5 : windowSize < 1271 ? 8 : 12;
        setFilmsCount(updatedFilmsCount);
        setFilmsCount(updatedFilmsCount);
        setFirstSubmit(true);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleCheckboxChange = (e, input) => {
    if (!firstSubmit) {
      handleInitialMovies();
    }
    const isOn = e.target.checked;
    let updatedData = fliterData(moviesCopy, input);
    if (isOn) {
      updatedData = updatedData.filter(
        (item) => item.duration <= SHORT_MOVIE_DURATION
      );
      setMovies(updatedData);
    } else {
      updatedData = fliterData(moviesCopy, input);
      setMovies(updatedData);
    }
    localStorage.setItem("checkboxStatus", isOn);
    localStorage.setItem("storedMovies", JSON.stringify(updatedData));
    localStorage.setItem("searchText", input);
  };

  const getFilmsToShow = () => {
    return movies.slice(0, filmsCount);
  };

  const handleFirstSubmit = (inputValue) => {
    if (firstSubmit) {
      const updatedData = fliterData(moviesCopy, inputValue);
      setMovies(updatedData);
      localStorage.setItem("storedMovies", JSON.stringify(updatedData));
      const updatedFilmsCount =
        windowSize < 768 ? 5 : windowSize < 1271 ? 8 : 12;
      setFilmsCount(updatedFilmsCount);
      console.log(updatedFilmsCount);
    } else {
      handleInitialMovies();
    }
  };

  const addMoreFilms = () => {
    let countToPlus = 3;
    if (windowSize < 1271) {
      countToPlus = 2;
    }
    setFilmsCount((prev) => prev + countToPlus);
  };

  const isShowMoreBtn = () => movies.length > filmsCount;
  return (
    <main className="main">
      <SearchForm
        setValue={setValue}
        handleCheckboxChange={handleCheckboxChange}
        onSubmit={handleFirstSubmit}
      ></SearchForm>
      <MoviesCardList
        movies={getFilmsToShow()}
        isLoading={isLoading}
        onDelete={onDelete}
        addMoreFilms={addMoreFilms}
        showMoreBtn={isShowMoreBtn()}
        error={error}
      />
    </main>
  );
}
export default Movies;
