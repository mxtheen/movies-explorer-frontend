import { errors, messages } from "./constants";
const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};
export default checkResponse;

export function errMessageCheck(someErr, setValue) {
  if (someErr === errors.confilctError) {
    setValue(messages.error.conflictMessage);
  } else if (someErr === errors.badRequestError) {
    setValue(messages.error.badRequestMessage);
  } else if (someErr === errors.unauthorizedError) {
    setValue(messages.error.unauthorizedMessage);
  } else {
    setValue(messages.error.internalMessage);
  }
}
