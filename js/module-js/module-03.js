// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значення властивості
//   console.log(book[key]);
// }

// Об'єкт

// const user = {
//     name: `Test user`,
//     skills: {
// html: true,
// css: true,
// react: false,
//     }
// }
// звернення
// console.log(user.name);
// console.log(`css:`, user.skills.css);

// const objectKey = `skills`;
// const skillKey = `css`;
// console.log(user[objectKey]);
// console.log(user[objectKey][skillKey]);
// console.log(user.skills[skillKey]);
// console.log(user[objectKey].css);

//Зміна значень

// const user = {
//     name: `Test user`,
//     skills: {
//         html: true,
//         css: true,
//         react: false,
//     }
// }

//  user.city = `Krivoy Rog`;
//  user[`age`] = 25;
// console.log(user);

// user.city = `Odessa`
// console.log(user);

// Методи

// const user = {
//     name: `Test user`,
//     skills: {
//         html: true,
//         css: true,
//         react: false,
//   },
//     sayHello() {
//     }
// }
// console.log(user);

//Цикли for...in

// const user = {
//     name: `Test user`,
//     skills: {
//         html: true,
//         css: true,
//         react: false,
//   },
//     sayHello() {
//     }
// }

// for (const key in user) {
//     console.log(key);
// console.log(user[key]);
// }

// const user = {
//     name: `Test user`,
//     skills: {
//         html: true,
//         css: true,
//         react: false,
//   },
// }

// const keys = Object.keys(user);
// for (const key of keys ) {
//     console.log(user[key]);
// }
// console.log(keys);

//Деструктуризація масивів

// const arr = [1, 2, 3, 4, 5, 6];

// const [first, , second, , third] = arr;
// console.log(first);
// console.log(second);
// console.log(third);

//Деструктуризація об'єктів

// const user = {
//   name: `test name`,
//   skills: {
//     html: true,
//     css: true,
//     react: false,
//   },
// };

// console.log(`html`, user.skills.html);

// const {
//   skills,
//   skills: { html },
// } = user;

// console.log(`skills`, skills);

// const user = {
//   name: `Andrey`,
//   skills: {
//     html: true,
//     css: true,
//     react: false,
//   },
// };

// function getUserName({ name, skills: { html, css, react } } = {}) {
//   console.log(
//     `Hello my name is ${name}, I know html - ${html}, css - ${css}, react - ${react}`
//   );
// }
// getUserName(user);

//rest
// const arr = [1, 2, 3];

// function foo(first, second, third) {
//   console.log(`first`, first);
//   console.log(`second`, second);
//   console.log(`third`, third);
// }
// foo(...arr); // (1,2,3)

//
//
