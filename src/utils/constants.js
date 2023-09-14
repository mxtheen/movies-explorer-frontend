export const messages = {
  error: {
    internalMessage:
      "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз ",
    notFoundMovie: "Ничего не найдено",
    conflictMessage: "Введеная почта уже используется",
    badRequestMessage: "Что-то пошло не так, попробуйте еще раз",
    unauthorizedMessage: "Неправильная почта или пароль",
  },
  validation: {
    name: "Имя пользователя должно содержать только латиницу, кириллицу, пробел или дефис",
    email: "Поле email должно соответствовать шаблону электронной почты",
  },
  succes: {
    registration: "Вы успешно зарегистрировались!",
    changeData: "Вы успешно изменили данные!",
  },
};
export const errors = {
  confilctError: "Ошибка: 409",
  badRequestError: "Ошибка: 400",
  unauthorizedError: "Ошибка: 401",
};
export const INITIAL_COUNT_MOVIES = 12;
export const SHORT_MOVIE_DURATION = 40;
export const regExpName = /[^a-zA-Zа-яА-Я\s-]/g;
export const regExpEmail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
