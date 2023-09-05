function AboutProjects() {
  return (
    <section className="about-projects" id="projects">
      <h2 className="about-projects__header">О проекте</h2>
      <ul className="about-projects__table">
        <li className="about-projects__table-cell">
          <h3 className="about-projects__table-header">Дипломный проект включал 5 этапов</h3>
          <p className="about-projects__table-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="about-projects__table-cell">
          <h3 className="about-projects__table-header">На выполнение диплома ушло 5 недель</h3>
          <p className="about-projects__table-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className="about-projects__interval">
        <div className="about-projects__interval-time">
          <p className="about-projects__interval-period about-projects__interval-period_backend">1 неделя</p>
          <p className="about-projects__interval-period about-projects__interval-period_frontend">4 недели</p>
        </div>
        <div className="about-projects__interval-development">
          <p className="about-projects__interval-mode about-projects__interval-mode_backend">Back-end</p>
          <p className="about-projects__interval-mode about-projects__interval-mode_frontend">Front-end</p>
        </div>
      </div>
    </section>
  )
}

export default AboutProjects;
