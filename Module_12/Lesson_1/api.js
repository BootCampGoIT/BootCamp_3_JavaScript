const baseUrl = "https://jsonplaceholder.typicode.com/posts";

// export function getData(method, body) {
//   return fetch(baseUrl, {
//     method,
//     body: JSON.stringify(body),
//     headers: {
//       "Content-Type": "Application/json",
//     },
//   }).then((response) => response.json());
// }

export function getData() {
  return fetch(baseUrl).then((response) => response.json());
}
export function postData(body) {
    return fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "Application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiI4OGNkNWJjOS05YjBjLTRlODYtYTBmOC1jOGFmNjkyOGVhYzUiLCJpYXQiOjE2MDc1OTU5MTUsImV4cCI6MTAwMDAwMDE2MDc1OTU5MTZ9.KBrNE6kORtcLgMzpVo2cTOVcaX5a1bUafAwALVHv2tY"
    },
  }).then((response) => response.json());
}
