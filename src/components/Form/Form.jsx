import { Link } from "react-router-dom";
function Form(props) {
  return (
    <div className="auth">
      <Link to="/" className='auth__link'></Link>
      <form className="form">
        <h2 className="form__greetings">{props.header}</h2>
        <div className="form__body">
          {props.children}
        </div>
        <button type="submit" className="form__submit-btn">{props.button}</button>
        <div className="form__container">
          <p className="form__caption">{props.caption}</p>
          <Link to={props.link} className="form__link">{props.text}</Link>
        </div>
      </form>
    </div>
  )
}
export default Form
