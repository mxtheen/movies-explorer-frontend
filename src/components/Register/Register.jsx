import React, { useEffect, useState } from "react"
import Form from "../Form/Form"
import InfoToolTip from "../InfoToolTip/InfoToolTip";
import useValidation from "../../utils/Hooks/useValidation";

const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false)
  const valid = useValidation(value, validations)

  const onChange = (e) => {
    setValue(e.target.value)
  }
  const onBlur = (e) => {
    setDirty(true)
  }
  return {
    value,
    onChange,
    onBlur,
    ...valid,
    isDirty,
  }
}
function Register({ onRegister, isOpen, isSucces, isClose }) {

  const name = useInput('', { isEmpty: true, minLength: 4 ,  });
  const email = useInput('', { isEmpty: true, isEmail: true, })
  const password = useInput('', { isEmpty: true, minLength: 2, })

  const {inputValid} = useValidation({name, email, password})

  function handleSubmit(e) {
    e.preventDefault()
    onRegister(name.value, email.value, password.value)
  }
  return (
    <>
      <InfoToolTip isOpen={isOpen} isSucces={isSucces} isClose={isClose}></InfoToolTip>
      <Form header={"Добро пожаловать!"} button={"Зарегистрироваться"} caption={"Уже зарегистрированы?"} text={"Войти"} link={"/signin"} onSubmit={handleSubmit} disabled={inputValid} >
        <label htmlFor="name" className="form__label">Имя</label>
        <input id="name" type="text" className="form__input" value={name.value} placeholder="Василий" onChange={e => name.onChange(e)} onBlur={e => name.onBlur(e)} required></input>
        {(name.isEmpty && name.isDirty ) && <span className="form__error">{name.errorMessage}</span> }
        <label htmlFor="email" className="form__label">E-mail</label>
        <input id="email" type="email" className="form__input" value={email.value} placeholder="example@yandex.ru" onChange={e => email.onChange(e)} onBlur={e => email.onBlur(e)} required></input>
        {(email.isEmpty && email.isDirty ) ? <span className="form__error">{email.errorMessage}</span> : <span className="form__error"></span> }
        <label htmlFor="password" className="form__label">Пароль</label>
        <input id="password" type="password" className="form__input" value={password.value} placeholder="••••••••••" onChange={e => password.onChange(e)} onBlur={e => password.onBlur(e)} required></input>
        {(password.isEmpty && password.isDirty ) ? <span className="form__error">{password.errorMessage}</span> : <span className="form__error"></span> }
      </Form>
    </>
  )
}
export default Register
