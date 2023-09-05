import me from '../../images/Self-portrait.jpg'

function AboutMe() {
  return (
    <section className="about-me" id="student">
      <h2 className="about-me__header">Студент</h2>
      <div className='about-me__info'>
        <div className='about-me__bio'>
          <h3 className="about-me__heading">Максим</h3>
          <h4 className="about-me__subheading">Фронтенд-разработчик, 24 года</h4>
          <p className="about-me__text">Родился и&nbsp;вырос в&nbsp;Ленинградской области. В&nbsp;2020 году закончил Санкт-Петербургский государственный технологический институт (СПБГТИ (ТУ)) по&nbsp;специальности &laquo;Реклама и&nbsp;связь с&nbsp;общественностью&raquo;. В&nbsp;этом&nbsp;же году был призван на&nbsp;военную службу по&nbsp;призыву в&nbsp;войсковую часть 45445, 28-я гвардейская понтонно-мостовая бригада. В&nbsp;2022 году поступил на&nbsp;обучение в&nbsp;Яндекс.Практикум, с&nbsp;этого момента увлекаюсь программированием и&nbsp;версткой.</p>
          <a href='https://github.com/mxtheen' target='blank' className='about-me__link'>Github</a>
        </div>
        <div className='about-me__containter'>
          <img src={me} alt='Максим Шуляев' className='about-me__image'></img>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
