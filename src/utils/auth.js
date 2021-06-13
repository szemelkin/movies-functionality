export const BASE_URL = 'http://api.zmovies.nomoredomains.icu';

const responseCheck = (response) => response.ok ? response : Promise.reject(`Ошибка ${response.status}`);

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password })
  })
    .then(responseCheck)
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });  
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password })
  })
    .then(responseCheck)
    .then((res) => {
        if (res.ok){
            return res.json();
        } else {
            return;
        }
    }) 
};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    //   'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGMwMWViNzIwOGE2MDZlNmQ2YTJjMTciLCJpYXQiOjE2MjMyMTM2MzB9.VkUpI9O9bf1xxBBlN5g20qoNWYG7a6boORZNuecrxDo`,
    }
  })
    .then(responseCheck)

}
