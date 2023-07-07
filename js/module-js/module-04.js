// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// });

// registerGuest("Полі", function greet(name) {
//   console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
// });

// const arrow = () => {
//   console.log(`hello`);
// };
// arrow();

// const sum = (a) => a + 3;
// console.log(sum(2));

// const foo = (array) => console.log(array);
// foo([1, 2, 3]);

// function add(a, b) {
//   return a + b;
// }

// console.log(add(2, 3));
// console.log(add);

// const arr = [1, 2, 3, 4, 5];
// function add(...args) {
//   console.log(`add`, args);
// }
// function sum(...args) {
//   console.log(`sum`, args);
// }
// function foo(value, callback) {
//   callback(...value);
// }

// foo(arr, add);
// foo(arr, sum);

// forEach

// const arr = [1, 2, 3, 4];
// arr.forEach((elem) => {
//   console.log(elem);
// });

// Task-1

// const logItem = (arr) =>
//   arr.forEach((item, idx) => console.log(`${idx + 1} - ${item}`));

// // logItem([`Mango`, `Polly`, `Ajax`]);
// logItem([`apple`, `limon`, `banana`]);

// Task-2

// const products = [
//   {
//     id: 1,
//     name: `Телефон`,
//     price: 5000,
//     description: `Сматрофон з потужним процесором`,
//   },
//   {
//     id: 2,
//     name: `Ноутбук`,
//     price: 5000,
//     description: `Легкий ноутбук`,
//   },
//   {
//     id: 3,
//     name: `Планшет`,
//     price: 5000,
//     description: `Компактний планшет`,
//   },
// ];
// function getProductDetails(id, success, error) {
//   for (const product of products) {
//     if (product.id === id) {
//       success(product);
//       return;
//     }
//   }
//   error();
// }

// getProductDetails(2, handleSuccess, handError);

// function handleSuccess(message) {
//   console.log(`Success!`, message);
// }
// function handError() {
//   console.log(`Error! Product not found`);
// }
