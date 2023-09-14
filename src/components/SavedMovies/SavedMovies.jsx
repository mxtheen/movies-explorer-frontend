import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../utils/contexts/SavedMovieContext";
import { SHORT_MOVIE_DURATION } from "../../utils/constants";

function SavedMovies({ onDelete }) {
  const { savedMovies } = useContext(MovieContext);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(savedMovies);
  }, []);

  const fliterData = (someData, filterValue) => {
    return someData.filter(
      (item) =>
        item.nameRU.toLowerCase().includes(filterValue.toLowerCase()) ||
        item.nameEN.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  const handleCheckboxChange = (e, input) => {
    const isOn = e.target === undefined ? e : e.target.checked;
    let updatedData = fliterData(savedMovies, input);
    if (isOn) {
      updatedData = updatedData.filter(
        (item) => item.duration <= SHORT_MOVIE_DURATION
      );
      setMovies(updatedData);
    } else {
      updatedData = fliterData(savedMovies, input);
      setMovies(updatedData);
    }
  };

  const handleFirstSubmit = (inputValue) => {
    const updatedData = fliterData(savedMovies, inputValue);
    setMovies(updatedData);
  };

  return (
    <main className="main">
      <SearchForm
        onSubmit={handleFirstSubmit}
        handleCheckboxChange={handleCheckboxChange}
      ></SearchForm>
      <MoviesCardList movies={movies} showMoreBtn={false} />
    </main>
  );
}
export default SavedMovies;
