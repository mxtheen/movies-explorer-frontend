import { useState, useEffect, useRef, useContext } from "react";

import InfoToolTip from "../InfoToolTip/InfoToolTip";

import { useFormWithValidation } from "../../utils/Hooks/useForm";
import { CurrentUserContext } from "../../utils/contexts/CurrentUserContext";

function Profile({
  onLogout,
  onUpdateUserData,
  isOpen,
  isSucces,
  onClose,
  errMessage,
}) {
  const { handleChange, errors } = useFormWithValidation();
  const { user } = useContext(CurrentUserContext);
  const [userName, setUserName] = useState(user.name || "");
  const [userEmail, setUserEmail] = useState(user.email || "");
  const [isActive, setIsActive] = useState(false);
  const myError = { ...errors };
  const changeName = (e) => {
    setUserName(e.target.value);
    handleChange(e);
  };
  const changeEmail = (e) => {
    setUserEmail(e.target.value);
    handleChange(e);
  };
  const disableBtn = () => {
    myError.name = errors.name || "";
    myError.email = errors.email || "";
    if (myError.name !== "" || myError.email !== "") {
      return true;
    }
    return user.name === userName && user.email === userEmail;
  };

  const firstInputRef = useRef();

  const handleActive = (e) => {
    e.preventDefault();
    setIsActive(true);
  };

  useEffect(() => {
    if (isActive) {
      firstInputRef.current.focus();
    }
  }, [isActive]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUserData({
      name: userName,
      email: userEmail,
    });
  };

  return (
    <>
      <InfoToolTip
        isOpen={isOpen}
        isSucces={isSucces}
        onClose={onClose}
        errMessage={errMessage}
      ></InfoToolTip>
      <section className="profile">
        <h2 className="profile__greetings">Привет, {user.name}!</h2>
        <form className="profile__form" noValidate onSubmit={handleSubmit}>
          <div className="profile__form-containter">
            <label htmlFor="name" className="profile__form-label">
              Имя
            </label>
            <input
              className="profile__form-input"
              id="name"
              placeholder="Виталий"
              name="name"
              value={userName}
              onChange={(e) => changeName(e)}
              disabled={!isActive}
              ref={firstInputRef}
              minLength={2}
              maxLength={60}
              required
            ></input>
          </div>
          <div className="profile__form-containter">
            <label htmlFor="email" className="profile__form-label">
              E-mail
            </label>
            <input
              className="profile__form-input"
              id="email"
              placeholder="example@yandex.ru"
              name="email"
              value={userEmail}
              onChange={(e) => changeEmail(e)}
              disabled={!isActive}
              required
            ></input>
          </div>
          <div className="profile__form-containter-btn">
            {isActive ? (
              <>
                <button
                  type="submit"
                  className="profile__form-submit-btn"
                  disabled={disableBtn()}
                >
                  Сохранить
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className="profile__form-btn profile__form-btn_edit"
                  onClick={handleActive}
                >
                  Редактировать
                </button>
                <button
                  type="button"
                  className="profile__form-btn profile__form-btn_exit"
                  onClick={onLogout}
                >
                  Выйти из аккаунта
                </button>
              </>
            )}
          </div>
        </form>
      </section>
    </>
  );
}
export default Profile;
