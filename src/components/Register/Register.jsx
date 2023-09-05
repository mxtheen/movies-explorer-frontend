import Form from "../Form/Form"
function Register() {
  return (
    <Form header={"Добро пожаловать!"} button={"Зарегистрироваться"} caption={"Уже зарегистрированы?"} text={"Войти"} link={"/signin"}>
      <label htmlFor="name" className="form__label">Имя</label>
      <input id="name" type="text" className="form__input" placeholder="Василий" required></input>
      <span className="form__error"></span>
      <label htmlFor="email" className="form__label">E-mail</label>
      <input id="email" type="email" className="form__input" placeholder="example@yandex.ru" required></input>
      <span className="form__error"></span>
      <label htmlFor="password" className="form__label">Пароль</label>
      <input id="password" type="password" className="form__input" placeholder="••••••••••" required></input>
      <span className="form__error"></span>
    </Form>
  )
}
export default Register
