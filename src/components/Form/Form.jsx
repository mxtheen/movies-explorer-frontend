import { Link } from "react-router-dom";

function Form({
  onSubmit,
  header,
  children,
  isDisabled,
  caption,
  link,
  text,
  button,
  errMessage,
  isSucces,
}) {
  return (
    <section className="auth">
      <div className="auth__container">
        <Link to="/" className="auth__link"></Link>
        <form className="form" noValidate onSubmit={onSubmit}>
          <h2 className="form__greetings">{header}</h2>
          <div className="form__body">{children}</div>
          {isSucces ? (
            <p className="form__error-submit"></p>
          ) : (
            <p className="form__error-submit">{errMessage}</p>
          )}
          <button
            type="submit"
            className="form__submit-btn"
            disabled={isDisabled}
          >
            {button}
          </button>
          <div className="form__container">
            <p className="form__caption">{caption}</p>
            <Link to={link} className="form__link">
              {text}
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
export default Form;
