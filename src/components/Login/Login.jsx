import React from "react";

import Form from "../Form/Form";

import { useFormWithValidation } from "../../utils/Hooks/useForm";

function Login({ onLogin, isSucces, errMessage }) {
  const { values, handleChange, errors } = useFormWithValidation();
  const myError = { ...errors };
  const disableBtn = () => {
    if (errors.email !== "" || errors.password !== "") {
      return true;
    }
  };
  console.log(myError);
  const handleSumbit = (e) => {
    e.preventDefault();
    onLogin(values.email, values.password);
  };
  return (
    <>
      <Form
        header={"Рады видеть!"}
        button={"Войти"}
        caption={"Ещё не зарегистрированы?"}
        text={"Регистрация"}
        link={"/signup"}
        onSubmit={handleSumbit}
        errMessage={errMessage}
        isSucces={isSucces}
        isDisabled={disableBtn()}
      >
        <label htmlFor="email" className="form__label">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          className="form__input"
          name="email"
          value={values.email || ""}
          placeholder="example@yandex.ru"
          required
          onChange={handleChange}
        ></input>
        {errors.email ? (
          <span className="form__error">{errors.email}</span>
        ) : (
          <span className="form__error"></span>
        )}
        <label htmlFor="password" className="form__label">
          Пароль
        </label>
        <input
          id="password"
          type="password"
          className="form__input"
          name="password"
          value={values.password || ""}
          placeholder="••••••••••"
          required
          onChange={handleChange}
          minLength={6}
        ></input>
        {errors.password ? (
          <span className="form__error">{errors.password}</span>
        ) : (
          <span className="form__error"></span>
        )}
      </Form>
    </>
  );
}
export default Login;
