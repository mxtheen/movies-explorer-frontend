import Promo from '../Promo/Promo';
import AboutProjects from '../AboutProjects/AvoutProjects';
import Techs from '../Techs/Techs'
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
function Main({isLoggedIn}) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} ></Header>
      <main className='main'>
        <Promo></Promo>
        <AboutProjects></AboutProjects>
        <Techs></Techs>
        <AboutMe></AboutMe>
        <Portfolio></Portfolio>
      </main>
      <Footer></Footer>
    </>

  )
}
export default Main
