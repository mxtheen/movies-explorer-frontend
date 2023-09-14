import React, { useCallback } from "react";
import { regExpEmail, regExpName, messages } from "../constants";
export function useForm() {
  const [values, setValues] = React.useState({});
  const [isChanged, setIsChanged] = React.useState(false);

  const handleChange = (event) => {
    setIsChanged(true);
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setValues({ ...values, [name]: value });
  };

  return { values, handleChange, setValues, isChanged };
}

export function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const [isChanged, setIsChanged] = React.useState(false);

  const handleChange = (event) => {
    setIsChanged(true);
    const target = event.target;
    const name = target.name;
    let value = target.value;
    let localError = "";
    if (name === "name") {
      if (value.match(regExpName)) {
        localError = messages.validation.name;
      }
    } else if (name === "email") {
      if (!value.match(regExpEmail)) {
        localError = messages.validation.email;
      }
    }

    setValues({ ...values, [name]: value });
    setErrors({
      ...errors,
      [name]:
        target.validationMessage === "" ? localError : target.validationMessage,
    });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    isChanged,
    setValues,
  };
}
