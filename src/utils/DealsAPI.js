const api = "http://localhost:3001"

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
token = localStorage.token = Math.random().toString(36).substr(-8)
const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Content-Type': 'application/json'
}

// GET deals
export const getDeals = () =>
fetch(`${api}/deals`, { headers })
.then(res => res.json());



//
// POST
// export const postPost = (post) => (
//   fetch(`${api}/posts`, {
//     method: 'POST',
//     headers: {
//       ...headers
//     },
//     body: JSON.stringify({ ...post }),
//   })
//   .then(res => res.json())
// )
