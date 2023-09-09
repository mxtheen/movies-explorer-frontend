import React from "react"

import Form from "../Form/Form";
function Login(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handleSumbit = (e) => {
    e.preventDefault()
    props.onLogin(email, password)
  }
  return (
    <Form header={"Рады видеть!"} button={"Войти"} caption={"Ещё не зарегистрированы?"} text={"Регистрация"} link={"/signup"} onSubmit={handleSumbit}>
      <label htmlFor="email" className="form__label">E-mail</label>
      <input id="email" type="email" className="form__input" value={email} placeholder="example@yandex.ru" required onChange={handleEmailChange}></input>
      <span className="form__error"></span>
      <label htmlFor="password" className="form__label">Пароль</label>
      <input id="password" type="password" className="form__input" value={password} placeholder="••••••••••" required onChange={handlePasswordChange}></input>
      <span className="form__error"></span>
    </Form>
  )
}
export default Login
