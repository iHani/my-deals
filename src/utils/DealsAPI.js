const api = "http://localhost:3001"

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token) {
  token = localStorage.token = Math.random().toString(36).substr(-8)
}

const headers = {
  'Accept': 'application/json',
  Authorization: token,
  'Content-Type': 'application/json'
}

// GET deals
export const getDeals = () =>
fetch(`${api}/deals`, { headers })
.then(res => res.json());

// POST
export const signup = (user) => (
  fetch(`${api}/signup`, {
    method: 'POST',
    headers: {
      ...headers
    },
    body: JSON.stringify({ ...user }),
  })
  .then(res => res.json())
)

export const checkAuthUser = () =>
fetch(`${api}/auth/check`, { headers })
.then(res => res.json());

export const login = (user) => (
  fetch(`${api}/login`, {
    method: 'POST',
    headers: {
      ...headers
    },
    body: JSON.stringify({ ...user }),
  })
  .then(res => res.json())
)

// PUT
export const logout = () =>
fetch(`${api}/logout`, { headers })
.then(res => res.json());
