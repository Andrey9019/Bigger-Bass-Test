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
//         html: true,
//         css: true,
//         react: false,
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
