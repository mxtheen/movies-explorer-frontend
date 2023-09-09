import { useState, useEffect } from 'react'
const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLength, setMinLength] = useState(false)
  const [isEmail, setEmail] = useState(false)
  const [inputValid, setInputValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Пустое поле')

  useEffect(() => {
    for (const validation in validations) {
      // eslint-disable-next-line default-case
      switch (validation) {
        case 'isEmpty':
          if (value.length ) {
            setEmpty(false)
          } else {
            setEmpty(true)
            setErrorMessage("Пустое поле");
          }
          break;
        case 'minLength':
          if (value.length < validations[validation]) {
            setMinLength(true)
            setErrorMessage('Маленькое кол-во символов')
          } else {
            setMinLength(false)
          }
          break;
        case 'isEmail':
          const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          if (regExp.test(String(value).toLowerCase())) {
            setEmail(false)
          } else {
            setEmail(true)
            setErrorMessage("Ошибка ввода email");
          }
      }
    }
  }, [value])

  useEffect(() => {
    if (isEmail || isEmpty || minLength) {
      setInputValid(false)
    } else {
      setInputValid(true);
    }
  }, [isEmail, isEmpty, minLength])

  return {
    isEmpty, minLength, isEmail, inputValid, errorMessage
  }
}
export default useValidation
