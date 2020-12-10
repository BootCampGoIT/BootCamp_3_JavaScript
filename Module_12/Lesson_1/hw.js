const finder = document.querySelector(".finder");
const content = document.querySelector(".content");

const createMarkup = (country) => {
  return `
    <li>
    <h2>${country.name}</h2>
    <h2>${country.capital}</h2>
    </li>
    `;
};

const getData = (e) => {
  console.log(e.target.value);
  fetch(`https://restcountries.eu/rest/v2/name/${e.target.value}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      content.innerHTML = `<ul>${data.reduce((acc, item) => {
        acc += createMarkup(item);
        return acc;
      }, "")}</ul>`;
    });
};

finder.addEventListener("input", getData);
