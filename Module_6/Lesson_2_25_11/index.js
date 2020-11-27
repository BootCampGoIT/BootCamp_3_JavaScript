// Дан массив с числами. Используя метод map извлеките из каждого элемента массива квадратный корень и запишите результат в новый массив.

// =======================================

// Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'.

// =======================================

// Дан массив со строками. Используя метод map переверните символы каждой строки в обратном порядке.

// =======================================

// Дан следующий массив:

// let arr = ['123', '456', '789'];
// Используя метод map преобразуйте этот массив в следующий:

// let arr = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9]
// ];

// =======================================

// Дан массив с числами. Используя метод map запишите в каждый элемент массива значение этого элемента, умноженное на его порядковый номер в массиве.

// =======================================
// Дан массив с числами. Оставьте в нем только положительные числа.
// =======================================

// Дан массив с числами. Оставьте в нем только числа, которые больше нуля, но меньше 10.

// =======================================

// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.

// ==========================================

// Дан массив с числами. Оставьте в нем только те числа, произведение которых на их порядковый номер меньше 30.

// ==========================================

// Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только обычные элементы.

// ==========================================

// Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.

// =========================================

// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.

// =========================================

// Дан массив с числами. Проверьте то, что для всех элементов произведение их значений на их порядковый номер меньше 30.

// =========================================

// Дан массив с числами. Проверьте то, что в массиве есть хотя бы одно число больше нуля.

// =========================================

// Дан массив с числами. Проверьте то, что хотя бы для одного элемента произведение его значения на порядковый номер больше 30.

// =========================================

// const headerNavigation = [
//   {
//     name: "Home",
//     path: "/home",
//   },
//   {
//     name: "About",
//     path: "/about",
//   },
//   {
//     name: "Contacts",
//     path: "/contacts",
//   },
//   {
//     name: "Sign In",
//     path: "/signin",
//   },
//   {
//     name: "Sign Up",
//     path: "/signup",
//   },
//   {
//     name: "Logout",
//     path: "/logout",
//   },
// ];

// Напишите функцию:
// 1. которая в качестве параметров будет принимать указаннный массив объектов:
// 2. которая возвращает разметку формата
// '<li>
//     <a href="http://">

//     </a>
// </li>' для каждого из элементов массива
// =========================================
// const products = [
//   {
//     id: "1",
//     name: "Bread",
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, at?",
//   },
//   {
//     id: "2",
//     name: "Bread",
//     description: "Lorem, ipsum dolor sit amet",
//   },
//   {
//     id: "3",
//     name: "Bread",
//     description: "Lorem, ipsum dolor sit amet consectetur Temporibus, at?",
//   },
// ];
// const cart = [];
// Напишите функцию, которая будет добавлять элемент в массив cart и создавать ему дополнительное свойство quantity равное нулю
// Напишите функцию, которая будет удалять элемент из массива cart по id
// Напишите функцию, которая будет добавлять количество товаров (свойство quantity) на единицу
// Напишите функцию, которая будет фильтровать массив products по названию товара
// Напишите функцию, которая будет возвращать разметку формата, пригодного для отображения информации о товаре в модальном окне.Обязательно добавить кнопки добавления товара и записать в них id товара
// Модифицируйте функцию, которая добавляет элемент в массив cart, при этом использует id  для поиска элемента в массиве products и если он совпадает - добавляет объект с дополнительным свойством quantity

// =========================================
// =========================================

// const cart = [];

// const array = [
//   { id: "1", name: "gdyjghd", price: 10 },
//   { id: "2", name: "gdyjdfdsffdghd", price: 123 },
//   { id: "3", name: "gdyjsfghd", price: 15 },
// ];

// const addItem = (arr, item) => {
//   return [...arr, item];
// };

// // const addToCart = (arr, cartArr, id) => {
// //   return cartArr.push(arr.find((item) => item.id === id));
// // };

// // addToCart(array, cart,  "2");
// // console.log(cart);

// // const res = addItem(array, { id: "4", name: "gdyjssdsdghd", price: 153 });
// // console.log(res);
// const delItem = (arr, id) => {
//   return [...arr.filter((item) => item.id !== id)];
// };

// // const res = delItem(array, "3");
// // console.log("res", res);

// const modify = (arr, id, name, value) => {
//   const elem = arr.find((item) => item.id === id)[name] = value;
//   delItem(arr, id);
//   addItem(arr, elem)

// };

// modify(array, "3", "name", "Milk");
// console.log(array)

// const store = {
//   users: [],
//   products: [
//     { id: "1", name: "gdyjghd", price: 10 },
//     { id: "2", name: "gdyjdfdsffdghd", price: 123 },
//     { id: "3", name: "gdyjsfghd", price: 15 },
//   ],
//   cart: [],
// };

// const addItem = (arr, item) => {
//   return [...arr, item];
// };

// const addToCart = (store, id) => {
//   const product = store.products.find((item) => item.id === id);
//   product.quantity = 1;
//   store.cart = [...store.cart, product];
// };

// addToCart(store, "3");
// addToCart(store, "2");

// console.log(store);

// const x = {
//     arr: []
// }
// console.log(x)
// x.arr = [...x.arr, 5];
// console.log(x)

// let arr = [];
// arr = [...arr, 5];
// console.log(arr);

// function useDispatch() {
//   const x = 5;
//   return function (callback) {
//     return callback(x);
//   };
// }
// const dispatch = useDispatch();

// const action = (number) => console.log("number", number);

// dispatch(action);

// const createRange = (initailValue) => {
//   return function (step) {
//     return (initailValue += step);
//   };
// };

// const volumeRange = createRange(0);
// console.log(volumeRange(1));
// console.log("--------------------------");

// const imageRage = createRange(50);
// console.log(imageRage(1));

// connect(mstp, mdtp)(Component)

const redux = {
  state: {},
  reducers: {
    contactsReducer(self, action) {
      switch (action.type) {
        case "action1":
          return (self.state.contacts = [
            ...self.state.contacts,
            action.payload,
          ]);

        default:
          return [];
      }
    },
    todoReducer() {
      return {
        task: "",
      };
    },
  },

  setInitialState() {
    // this.dispatch({type: "/", payload: []});
    this.state.contacts = this.reducers.contactsReducer(this, {
      type: "/",
      payload: [],
    });
    // this.state.tasks = this.reducers.todoReducer();
  },

  getState() {
    return this.state;
  },

  dispatch(action) {
    this.reducers.contactsReducer(this, action);
  },

  connect(mstp, mdtp) {
    // mdtp(this.dispatch(mdtp) );
    return {
      props: mstp(this.getState()),
    };
  },
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch1: () => {
      dispatch(actionCreator);
    },
  };
};
const createContact = (payload) => {
  return {
    type: "action1",
    payload,
  };
};

redux.setInitialState();

redux.dispatch(createContact({ name: "alex" }));
redux.dispatch(createContact({ name: "Nikita" }));
console.log(redux.connect((state) => state.contacts, null));



// const action = function(){
//   return 5
// }
const action = {}


// redux.reducers.contactsReducer(createContact({ name: "alex" }));
// console.log(redux.self);
// const mapStateToProps = (state) => {
//   return {
//     contacts: state.contacts,
//     tasks: state.tasks
//   };
// };

// const result = redux.connect(mapStateToProps, null);
// console.log(result);

// const state = redux.getState();
// console.log(state)

// console.log(redux);

// const mstp = {};
// const mdtp = {};
// connect(mstp, mdtp)("<li></li>");

// const window = {
//   x: {
//     initailValue: 1,
//     "133fsdsd232": function(step){
//       return (this.initailValue += step);
//     }
//   },
//   y: {
//     initailValue: 50,
//     "133fsdsd232": function(step){
//       return (this.initailValue += step);
//     }
//   }

// }
