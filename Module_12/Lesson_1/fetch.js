import { getData, postData } from "./api.js";

// getData("GET")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

getData()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

const data = {
  title: "Lorem",
  body: "Lorem ipsum dolor sit amet.",
};

postData(data).then((data) => console.log(data));
