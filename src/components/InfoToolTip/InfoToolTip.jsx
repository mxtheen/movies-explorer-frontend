import React from "react";
function InfoToolTip(props) {
  return (
    <section className={`popup ${props.isOpen ? "popup_active" : ""}`}>
      <div className="popup__content">
        <button type="button" className="popup__close" onClick={props.isClose}></button>
        {
          props.isSucces ?
            <p className="popup__text">Вы успешно зарегистрировались!</p>
            :
            <p className="popup__text">Что-то пошло не так, попробуйте еще раз!</p>
        }
      </div>
    </section>
  )
}
export default InfoToolTip
