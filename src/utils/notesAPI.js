// const api = "http://localhost:3001"
//
// GET
// export const getPost = (id) =>
// fetch(`${api}/posts/${id}`, { headers })
// .then(res => res.json())
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

export const getHelloNote = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve('Hello from Redux!');
    }, 500);
  });
};
