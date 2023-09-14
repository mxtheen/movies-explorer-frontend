import { useFormWithValidation } from "../../utils/Hooks/useForm";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MovieContext } from "../../utils/contexts/SavedMovieContext";

function SearchForm({ onSubmit, handleCheckboxChange }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const { pathname } = useLocation();
  const { savedMovies } = useContext(MovieContext);
  const [isChecked, setIsChecked] = useState(
    pathname === "/movies"
      ? localStorage.getItem("checkboxStatus") === "true"
      : false
  );

  useEffect(() => {
    pathname === "/saved-movies" && handleCheckboxChange(isChecked, inputValue);
  }, [savedMovies]);

  const [inputValue, setInputValue] = useState(
    pathname === "/movies" ? localStorage.getItem("searchText") || "" : ""
  );

  function handleSubmit(e) {
    e.preventDefault();
    pathname === "/movies" && localStorage.setItem("searchText", inputValue);
    onSubmit(inputValue);
  }

  const changeSearch = (e) => {
    handleChange(e);
    setInputValue(e.target.value);
  };

  const checkboxChange = (e) => {
    setIsChecked((prev) => !prev);
    handleCheckboxChange(e, inputValue);
  };

  return (
    <section className="search">
      <form
        className="search__form"
        onSubmit={(e) => handleSubmit(e)}
        noValidate
      >
        <div className="search__wrapper">
          <input
            className="search__input"
            placeholder="Фильм"
            type="text"
            name="search"
            value={inputValue}
            onChange={(e) => changeSearch(e)}
            required
          ></input>
          <button
            type="submit"
            disabled={!isValid}
            className="search__button"
          ></button>
        </div>
        {errors.search ? (
          <span className="search__error">Нужно ввести ключевое слово</span>
        ) : (
          <span className="search__error">&nbsp;</span>
        )}
      </form>
      <div className="search__checkbox">
        <label className="search__checkbox-label">
          <input
            checked={isChecked}
            type="checkbox"
            disabled={inputValue.length === 0}
            onChange={(e) => checkboxChange(e)}
            className="search__checkbox-invisible"
          ></input>
          <span className="search__checkbox-visible"></span>
          Короткометражки
        </label>
      </div>
    </section>
  );
}

export default SearchForm;
