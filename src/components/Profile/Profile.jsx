import Header from "../Header/Header";
import React from "react";
function Profile({ isLoggedIn }) {
  const [isActive, setIsActive] = React.useState(false)

  const handleActive = () => {
    setIsActive(true)
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn}></Header>
      <section className="profile">
        <h2 className="profile__greetings">Привет, Виталий!</h2>
        <form className="profile__form">
          <div className="profile__form-containter">
            <label htmlFor="name" className="profile__form-label">Имя</label>
            <input className="profile__form-input" id="name" placeholder="Виталий"></input>
          </div>
          <div className="profile__form-containter">
            <label htmlFor="email" className="profile__form-label">E-mail</label>
            <input className="profile__form-input" id="email" placeholder="example@yandex.ru"></input>
          </div>
          <span className="profile__error"></span>
          {
            isActive ?
              <>
                <button type="button" className="profile__form-submit-btn">Сохранить</button>
              </>
              :
              <>
                <button className="profile__form-btn profile__form-btn_edit" onClick={handleActive}>Редактировать</button>
                <button className="profile__form-btn profile__form-btn_exit">Выйти из аккаунта</button>
              </>
          }

        </form>
      </section>
    </>
  )
};
export default Profile;
