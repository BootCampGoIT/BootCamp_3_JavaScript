// ... Lesson 1 ...

// document.createDocumentFragment

// 1. Объектная модель документа
// ============================================

// const isActive = true;

// const document_ = {
//     ul: {
//         li: {
//             textContent: `${isActive ? "hello": "signUp, please"}`,
//             textNode: "0"
//         },
//         li: {
//             textContent: `${isActive ? "hello": "signUp, please"}`,
//             textNode: "0",
//             id: "lastElemet"
//         },
//         li: {
//             src: "",
//             alt: ""
//         }
//     },
//     display: {
//         flex(){
//         }
//     },
//     bom: {
//         history: {
//         }
//     }
// }

{
  /* <ul class='list'>
  <li class='listItem first'>Vegas</li>
  <li class='listItem second'>LA</li>
  <li class='listItem third'>NY</li>
</ul>; */
}

// const list = document.querySelector(".list"); //ul
// console.dir(list);
// const h2 = list.previousElementSibling;
// console.log(h2);

// const item = list.querySelector(".second");
// item.textContent = "dgshcsdjk.";
// console.log(item);

// const title = document.querySelector("[data-id='content']");
// console.log(title)

// const ref = document_.body.h2.textContent ;
// console.log(ref)

// const ref = window.document.querySelector("h2");
// ref.textContent = "fgdjhgsdfjdascv"
// const ref = window.document.querySelectorAll("h2");
// console.log([...ref]);

// ref[0].textContent = "HELLLLLLLLO"

// document_.body.h2.textContent = "By";
// document_.body.h3 = {};
// document_.body.h3.textConent = "My name is ..."

// console.log(document_)

// 2.HTML-документ и DOM. DOM-дерево

// const list = document.querySelector(".list"); //ul
// console.dir(list)
// list.style.listStyle = "none";

// const title = document.querySelector('.title');
// title.textContent = "Hello ..."

// title.style.color = 'teal';

// const list = document.querySelector(".first"); //ul

// list.classList.contains("first") && list.classList.add('active');

// const firstLi = {
//     classList: {
//         add(class){

//         },
//         toggle(){

//         }
//     }
// }

// const firstLi = document.querySelector(".listItem");

// firstLi.classList.toggle("active");
// firstLi.classList.add("active");
// firstLi.classList.remove("active");
// firstLi.nextElementSibling.classList.add("active")
// firstLi.classList.replace("first", "active");

// const result = list.classList.contains('list');
// console.log(result);

// ==================

// const int = {
//     id: "25"
// }
// delete int.id;
// console.log(int)

// const firstLi = document.querySelector(".listItem");
// const result = firstLi.hasAttribute("id"); //false || true
// const result = firstLi.getAttribute("id"); //false || true
// delete firstLi.id

// const result = firstLi.attributes.id;
// console.log(result)

// console.dir(firstLi);
// console.log(firstLi.id)
// console.log(!!firstLi.id)

// const info = [
//   {
//     id:"123gjh132",
//     title: "Vegas",
//     images: ["fdsf", "fsdf"],
//     description: "Lorem ipsum dolor sit amet.",
//   },
//   {
//     id:"123gjfdfsdh132",
//     title: "LA",
//     images: ["fdsf", "fsdf"],
//     description: "Lorem ipsum dolor sit amet.",
//   },
//   {
//     title: "NY",
//     images: ["fdsf", "fsdf"],
//     description: "Lorem ipsum dolor sit amet.",
//     id: "123gjhsdfsdfdfsdf132"
//   },
// ];

// const first = document.querySelector(".first");
// console.dir(first.dataset.id);

// const object = info.find(item=> item.id === first.dataset.id);
// console.log(object);

// const h1 = {

// }

// ======================================================
// const title = document.createElement("h1");
// title.textContent = "Hello"
// console.dir(title);
// console.log(title);

// const title = document.createElement("h1");
// title.textContent = "Hello"
// title.id = "gajshd"

// console.log(title);

const info = [
  {
    id: "123gjh132",
    title: "Vegas",
    images: ["fdsf", "fsdf"],
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    id: "123gjfdfsdh132",
    title: "LA",
    images: ["fdsf", "fsdf"],
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    id: "123gjhsdfsdfdfsdf132",
    title: "NY",
    images: ["fdsf", "fsdf"],
    description: "Lorem ipsum dolor sit amet.",
  },
];

function createNewElement(element) {
  const li = document.createElement("li");
  li.textContent = element.title;
  li.dataset.id = element.id;
  li.classList.add("listItem");
  return li;
}

// // const list = document.createElement("ul");

// const markupArray = info.map((item) => createNewElement(item));

// const fragment = document.createDocumentFragment();
// console.log(fragment);

// fragment.append(...markupArray);
// const elem0 = createNewElement(info[0]);
// const elem1 = createNewElement(info[1]);
// const elem2 = createNewElement(info[2]);

// const list = document.querySelector(".list");
// list.append(elem0);
// list.prepend(elem1);
// elem0.before(elem2);

// const body = document.querySelector("body");
// body.removeChild(list)

// const clone  = list.cloneNode(true);
// console.log(clone);

const listItem = document.querySelector('.listItem');
console.log(listItem)





// body.appendChild(list);

// console.log(markupArray);
// list.append(...markupArray);
// console.log(list);

// list.appendChild(createNewElement())

// const liLA = document.createElement("li");
// liLA.textContent = "LA";
// liLA.dataset.id = "gcfdsfdsjh";
// liLA.classList.add("listItem");
// // console.log(li);

// list.appendChild(liVegas);
// list.appendChild(liLA);
// console.log(list);

// body.appendChild(list);
