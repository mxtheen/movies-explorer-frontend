import React from "react";

import Form from "../Form/Form";
import { useFormWithValidation } from "../../utils/Hooks/useForm";

function Register({ onRegister, isSucces, errMessage }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const disableBtn = () => {
    if (errors.name !== "" || errors.email !== "" || errors.password !== "") {
      return true;
    }
  };
  function handleSubmit(e) {
    e.preventDefault();
    onRegister(values.name, values.email, values.password);
  }

  return (
    <>
      <Form
        header={"Добро пожаловать!"}
        button={"Зарегистрироваться"}
        caption={"Уже зарегистрированы?"}
        text={"Войти"}
        link={"/signin"}
        onSubmit={handleSubmit}
        isDisabled={disableBtn()}
        errMessage={errMessage}
        isSucces={isSucces}
      >
        <label htmlFor="name" className="form__label">
          Имя
        </label>
        <input
          id="name"
          type="text"
          className="form__input"
          name="name"
          placeholder="Василий"
          value={values.name || ""}
          onChange={handleChange}
          required
          minLength={2}
        />
        {errors.name ? (
          <span className="form__error">{errors.name}</span>
        ) : (
          <span className="form__error"></span>
        )}
        <label htmlFor="email" className="form__label">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          className="form__input"
          name="email"
          placeholder="example@yandex.ru"
          value={values.email || ""}
          onChange={handleChange}
          required
        />
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
          placeholder="••••••••••"
          value={values.password || ""}
          onChange={handleChange}
          required
          minLength={6}
        />
        {errors.password ? (
          <span className="form__error">{errors.password}</span>
        ) : (
          <span className="form__error"></span>
        )}
      </Form>
    </>
  );
}
export default Register;
