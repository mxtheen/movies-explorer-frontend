import me from '../../images/Self-portrait.jpg'

function AboutMe() {
  return (
    <section className="about-me" id="student">
      <h2 className="about-me__header">Студент</h2>
      <div className='about-me__info'>
        <div className='about-me__bio'>
          <h3 className="about-me__heading">Виталий</h3>
          <h4 className="about-me__subheading">Фронтенд-разработчик, 25 лет</h4>
          <p className="about-me__text">Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У&nbsp;меня есть жена
            и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.</p>
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
