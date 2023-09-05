import SearchForm from "../SearchForm/SearchForm"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import MoviesCardList from '../MoviesCardList/MoviesCardList';
function SavedMovies({ isLoggedIn }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn}></Header>
      <main className="main">
        <SearchForm></SearchForm>
        <MoviesCardList></MoviesCardList>
      </main>
      <Footer></Footer>
    </>

  )
}
export default SavedMovies
