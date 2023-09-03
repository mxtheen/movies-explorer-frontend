import SearchForm from "../SearchForm/SearchForm"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import MoviesCardList from '../MoviesCardList/MoviesCardList';
function SavedMovies({ isLoggedIn }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn}></Header>
      <SearchForm></SearchForm>
      <MoviesCardList></MoviesCardList>
      <Footer></Footer>
    </>

  )
}
export default SavedMovies
