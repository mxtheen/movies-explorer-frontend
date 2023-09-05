import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

function Movies({ isLoggedIn }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn}></Header>
      <main className='main'>
        <SearchForm></SearchForm>
        <MoviesCardList></MoviesCardList>
      </main>
      <Footer></Footer>
    </>
  )
}
export default Movies
