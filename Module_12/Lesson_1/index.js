const baseUrl = "https://jsonplaceholder.typicode.com/posts";

function fetchData(method, url, body = null) {
  return new Promise((onResolve, onReject) => {
    const xml = new XMLHttpRequest();
    xml.open(method, url);
    xml.responseType = "json";
    xml.setRequestHeader("Content-Type", "application/json");
    xml.onload = () => {
      if (xml.status < 400) {
        onResolve(xml.response);
      } else onReject(xml.response);
    };
    xml.onerror = () => {
      onReject(xml.response);
    };
    xml.send(JSON.stringify(body));
  });
}

fetchData("GET", baseUrl)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

const post = {
  title: "Lorem",
  body: "Lorem ipsum dolor sit amet.",
};


fetchData("POST", baseUrl, post)
  .then((response) => {
    console.log(response);
    return response.id
  })
  .then((id) =>
    fetchData("GET", `${baseUrl}/${id}`)
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  )
  .catch((error) => console.log(error));
