// import { getRefs, addElement } from "./utils/index.js";

// const refs = {
//   navigationList: "",
//   content: "",
// };

// getRefs(refs);

// addElement("ul", "cardsList", refs.content, refs);
// addElement("ul", "pagination", refs.content, refs);

// console.log(refs);

// ====================================================================

// const navigationData = ["TV", "Mobiles", "Refrigerators"];
// const sidebarNavigation = ["admin", "profile"];

// const refs = {
//   navigationList: "",
//   sidebar: "",
// };

// refs.navigationList = document.querySelector(".navigationList");
// refs.sidebar = document.querySelector(".sidebar");

// function createMarkup(data) {
//   return data.reduce((acc, link) => {
//     acc += `
//         <li class="listItem" data-link="${link.toLowerCase()}">${link}</li>
//         `;
//     return acc;
//   }, "");
// }

// refs.navigationList.innerHTML = createMarkup(navigationData);
// refs.sidebar.innerHTML = createMarkup(sidebarNavigation);

// refs.navigationList.insertAdjacentHTML(
//   "beforeend",
//   `<li class="listItem" data-link="${"Tools".toLowerCase()}">Tools</li>`
// );

// ========================================================================

// const refs = {
//   navigationList: "",
//   modal: ""

// };

// refs.navigationList = document.querySelector(".navigationList");
// refs.modal = document.querySelector(".modal");

// const butonCreate = document.querySelector(".butonCreate");
// const butonClear = document.querySelector(".butonClear");

// function onHandleCreateMarkup() {
//   refs.navigationList.innerHTML = '<li>Hello</li>';
// }
// function onHandleClearMarkup() {
//   refs.navigationList.innerHTML = "";
// }

// butonCreate.addEventListener("click", onHandleCreateMarkup);
// butonClear.addEventListener("click", onHandleClearMarkup);

// ----------------------------

// const refs = {
//   modal: "",
//   buttons: {
//     show: "",
//     hide: "",
//   },
// };

// // ====== refs ===========
// refs.modal = document.querySelector(".modal");
// refs.buttons.show = document.querySelector(".show");
// refs.buttons.hide = document.querySelector(".hide");
// console.log(refs);

// // ====== listeners ===========
// refs.buttons.show.addEventListener("click", showModal);
// refs.buttons.hide.addEventListener("click", closeModal);

// // ====== functions || callbacks =============
// function showModal() {
//   refs.modal.classList.remove("invisibe");
// }
// function closeModal() {
//   refs.modal.classList.add("invisibe");
// }

// // ========= other code ==============

// REFACTORING

// const refs = {
//   modal: "",
//   buttons: {
//     show: "",
//   },
// };

// // ====== refs ===========
// refs.modal = document.querySelector(".modal");
// refs.buttons.show = document.querySelector(".show");

// // ====== listeners ===========
// refs.buttons.show.addEventListener("click", showModal);

// // ====== functions || callbacks =============
// function showModal() {
//   if (refs.modal.classList.contains("invisibe")) {
//     refs.buttons.show.textContent = "Hide modal";
//   } else refs.buttons.show.textContent = "Show modal";

//   refs.modal.classList.toggle("invisibe");
// }

// // ========= other code ==============
// =================================

// const refs = {
//   modal: "",
//   buttons: {
//     show: "",
//     hide: "",
//   },
// };

// // ====== refs ===========
// refs.modal = document.querySelector(".modal");
// refs.buttons.show = document.querySelector(".show");
// refs.buttons.hide = document.querySelector(".hide");
// console.log(refs);

// // ====== listeners ===========
// refs.buttons.show.addEventListener("click", showModal);
// refs.buttons.hide.addEventListener("click", closeModal);

// // ====== functions || callbacks =============
// function showModal() {
//   refs.buttons.show.removeEventListener("click", showModal);
//   console.log("show");
//   refs.modal.classList.remove("invisibe");
// }
// function closeModal() {
//   refs.buttons.show.removeEventListener("click", closeModal);
//   refs.modal.classList.add("invisibe");
// }

// =====================================================

// const list = document.querySelector(".list");

// list.style.background = "red";

// list.addEventListener("click", getPageName);

// function getPageName(e) {
//   console.log("e.target", e.target);
//   console.log("e.currentTarget", e.currentTarget);

//   switch (e.target.dataset.link) {
//     case "tv":
//       console.log("TV_____");
//       break;
//     case "mobiles":
//       console.log("mobiles_____");
//       break;
//     case "tools":
//       console.log("tools______");
//       break;
//     default:
//       return;
//   }
// }

// ================== form ===========================================

// const loginForm = document.querySelector(".loginForm");
// console.log(loginForm);
const data = {
  loginForm: {
    email: "",
    password: "",
  },
  signUpForm: {
    email: "",
    password: "",
  },
};

const refs = {
  login: {
    loginForm: document.forms.loginForm,
    email: document.forms.loginForm.email,
    password: document.forms.loginForm.password,
  },
  //   signUp: {
  //     signUpForm: document.forms.signUpForm,
  //     email: document.forms.signUpForm.email,
  //     password: document.forms.signUpForm.password,
  //   },
};

console.log(refs);

refs.login.loginForm.addEventListener("input", getData);
refs.login.loginForm.addEventListener("submit", submitData);

refs.login.email.addEventListener("focus", (e) => console.log("Focus"));
refs.login.email.addEventListener("blur", (e) => console.log("Blured"));
refs.login.email.addEventListener("change", (e) => console.log("Changed"));
// refs.login.loginForm.addEventListener("submit", submitData);

// refs.signUp.signUpForm.addEventListener("input", getData);
// refs.signUp.signUpForm.addEventListener("submit", submitData);

function getData(e) {
  const formName = e.currentTarget.name;
  const name = e.target.name;
  const value = e.target.value;
  data[formName][name] = value;
}

function submitData(e) {
  e.preventDefault();
  console.log(e.submitter.dataset.button);
  if (e.submitter.dataset.button === "login") {
    //   ========> data
  }
  if (e.submitter.dataset.button === "signUp") {
    //   ========> data
  }
}
