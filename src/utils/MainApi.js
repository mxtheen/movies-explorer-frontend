import checkResponse from "./checkResponse";
import DB_URL from "./MoviesApi";

export const BASE_URL = 'https://api.mxtheem-movies.nomoreparties.co/';

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  })
    .then(checkResponse)
};
export const login = (email, password) => {
  return fetch(`${BASE_URL}signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then(checkResponse)
}
export const checkToken = (jwt) => {
  return fetch(`${BASE_URL}users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`,
    }
  })
    .then(checkResponse)
}

export const getSavedMovies = () => {
  const jwt = localStorage.getItem('jwt')
  return fetch(`${BASE_URL}movies`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json"
    },
    method: "GET"
  })
  .then(checkResponse)
}

export const saveNewMovie = (item) => {
  const jwt = localStorage.getItem('jwt')
  return fetch(`${BASE_URL}movies`, {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`,
    },
    method: "POST",
    body: JSON.stringify({
      country: item.country ,
      director: item.director ,
      duration: item.duration,
      year: item.year,
      description: item.description,
      image: `${DB_URL}${item.image.url}`,
      trailerLink: item.trailerLink,
      thumbnail: `${DB_URL}${item.image.url}`,
      movieId: item.id,
      nameRU: item.nameRU,
      nameEN: item.nameEN
    })
  })
  .then(checkResponse)
}

export const deleteMovie = (movieId) => {
  const jwt = localStorage.getItem('jwt')
  return fetch(`${BASE_URL}movies/${movieId}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`,
  },
    method: "DELETE"
  })
  .then(checkResponse)
}
export const setUserInfo = (userData) => {
  const jwt = localStorage.getItem('jwt')
  return fetch(`${BASE_URL}users/me`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`,
  },
    method: "PATCH",
    body: JSON.stringify(userData)
  })
  .then(checkResponse)
}
