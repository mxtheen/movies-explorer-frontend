import Form from "../Form/Form";
function Login() {
  return (
    <section className="login">
      <Form header={"Рады видеть!"} button={"Войти"} caption={"Ещё не зарегистрированы?"} text={"Регистрация"} link={"/signup"}>
        <label htmlFor="email" className="form__label">E-mail</label>
        <input id="email" type="email" className="form__input" placeholder="example@yandex.ru" required></input>
        <span className="form__error"></span>
        <label htmlFor="password" className="form__label">Пароль</label>
        <input id="password" type="password" className="form__input" placeholder="••••••••••" required></input>
        <span className="form__error"></span>
      </Form>
    </section>
  )
}
export default Login
