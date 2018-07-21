const api = "http://localhost:3001"

// Generate a unique token
let token = localStorage.token
if (!token) {
  token = localStorage.token = Math.random().toString(36).substr(-8)
}

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Content-Type': 'application/json'
}

// GET deals
export const getDeals = () =>
fetch(`${api}/deals`, { headers })
.then(res => res.json());

// POST signup
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

// GET authenticated status of user by token
export const checkAuthUser = () =>
fetch(`${api}/auth/check`, { headers })
.then(res => res.json());

// POST login user
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

// PUT logout user
export const logout = () =>
fetch(`${api}/logout`, { headers })
.then(res => res.json());

// POST new deal
export const createNewDeal = (deal) => (
  fetch(`${api}/create-new-deal`, {
    method: 'POST',
    headers: {
      ...headers
    },
    body: JSON.stringify({ ...deal }),
  })
  .then(res => res.json())
)
