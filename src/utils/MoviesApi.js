import checkResponse from "./checkResponse";
const DB_URL = 'https://api.nomoreparties.co'

export const getInitialMovies = () => {
  return fetch(`${DB_URL}/beatfilm-movies`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "GET"
  }).then(checkResponse)
}

export default DB_URL
