function Footer() {
  const date = new Date()
  return (
    <footer className="footer">
      <h2 className="footer__header">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__info">
        <p className="footer__date">&copy;&nbsp;{date.getFullYear()}</p>
        <ul className="footer__list">
          <li className="footer__list-item"><a href="https://practicum.yandex.ru/" target="_blank" className="footer__link" rel="noreferrer">Яндекс.Практикум</a></li>
          <li className="footer__list-item"><a href="https://github.com/" target="_blank" className="footer__link" rel="noreferrer">Github</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
