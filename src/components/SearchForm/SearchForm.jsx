import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"

function SearchForm() {
  function handleSubmit() {
  }
  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <input className="search__input" placeholder="Фильм" type="text" required></input>
        <button type="submit" className="search__button"></button>
      </form>
      <FilterCheckbox></FilterCheckbox>
    </section>
  )
}

export default SearchForm
