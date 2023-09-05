import arrow from '../../images/portfolio__image.svg'
function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__header">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a className="portfolio__link" href="https://mxtheen.github.io/how-to-learn/" target='_blank' rel="noreferrer">
            <p className='portfolio__link-text'>Статичный сайт</p>
            <img src={arrow} alt='Переход на страницу' className="portfolio__link-image"></img>
          </a>
        </li>
        <li className="portfolio__list-item">
          <a className="portfolio__link" href="https://mxtheen.github.io/russian-travel/" target='_blank' rel="noreferrer">
            <p className='portfolio__link-text'>Адаптивный сайт</p>
            <img src={arrow} alt='Переход на страницу' className="portfolio__link-image"></img>
          </a>
        </li>
        <li className="portfolio__list-item">
          <a className="portfolio__link" href="https://mxtheen.github.io/react-mesto-auth/" target='_blank' rel="noreferrer">
            <p className='portfolio__link-text'>Одностраничное приложение</p>
            <img src={arrow} alt='Переход на страницу' className="portfolio__link-image"></img>
          </a>
        </li>
      </ul>
    </section>
  )
}
export default Portfolio;
