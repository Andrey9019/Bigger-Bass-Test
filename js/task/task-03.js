//Task-1

// function createBasket(product, quantity, price) {
//     const totalPrice = quantity * price;

//     const basket = {
//         product,
//         quantity,
//         price,
//         totalPrice,
//     }

//     console.log(basket);

// }

// console.log(createBasket(`pizza`, 3, `120`));

//Task-2

// const players = {
//     Kate: 30,
//     Andrey:200,
//     Den: 60,
//     Anna: 120,
// }

// function getTime(obj) {
//     const values = Object.values(obj);
//     let totalTime = 0;
//     for (const value of values) {
//          totalTime += value;
//     }
//     // console.log(values);
//     // console.log(totalTime/values.length);
//     return `Count of plaeyrs ${values.length}, average
//     time ${totalTime / values.length}`
// }

// console.log(getTime(players));

// Task-3

// const friends = [
//   {
//     name: `Anna`,
//     books: [`Bible`, `Harry Potter`],
//     age: 21,
//   },
//   {
//     name: `Bob`,
//     books: [`War and peace`, `Romeo and Juliet`],
//     age: 25,
//   },
//   {
//     name: `Andrey`,
//     books: [`Bible`, `War and peace`, `Harry Potter`],
//   },
//   {
//     name: `Alex`,
//     books: [`Harry Potter`, `Bible`, `War and peace`, `Romeo and Juliet`],
//     age: 33,
//   },
// ];

// function getTotalAge(arr) {
//   let TotalAge = 0;

//   for (const user of arr) {
//     if (`age` in user) {
//       console.log(`${user.name} - ${user.age}`);
//       TotalAge += user.age;
//     }
//     // if (user.hasOwnProperty(`age`)) {
//     //   TotalAge += user.age;
//     // }
//   }
//   console.log(TotalAge);
// }
// console.log(getTotalAge(friends));

// function getUsers(arr, bookName) {
//   const userName = [];
//   for (const user of arr) {
//     if (user.books.includes(bookName)) {
//       userName.push(user.name);
//     }
//   }
//   return userName.join(`, `);
// }

// console.log(getUsers(friends, `Harry Potter`));

// Task-4

// const hogvarts = {
//   griffindor: [
//     {
//       name: `Harry`,
//       points: 10,
//     },
//     {
//       name: `Hermiona`,
//       points: 12,
//     },
//     {
//       name: `Ron`,
//       points: 9,
//     },
//   ],
//   slizerin: [
//     {
//       name: `Ddaco`,
//       points: 11,
//     },
//     {
//       name: `Goyl`,
//       points: 9,
//     },
//     {
//       name: `Crabbe`,
//       points: 9,
//     },
//   ],
//   getUserList(faculty) {
//     if (!(faculty in this)) {
//       return `fuculty not found`;
//     }
//     const students = [];

//     for (const student of this[faculty]) {
//       students.push(student.name);
//     }
//     return students.join(`, `);
//   },

//   getTotalPoints(faculty) {
//     if (!(faculty in this)) {
//       return `fuculty not found`;
//     }
//     let totalPoints = 0;
//     for (const student of this[faculty]) {
//       if (`points` in student);
//       totalPoints += student.points;
//     }
//     return totalPoints;
//   },
// };

// // console.log(hogvarts.getUserList(`griffindor`));
// // console.log(hogvarts.getUserList(`slizerin`));
// // console.log(hogvarts.getUserList(`slizering`));

// console.log(hogvarts.getTotalPoints(`griffindor`));
// console.log(hogvarts.getTotalPoints(`slizerin`));
// console.log(hogvarts.getTotalPoints(`slizering`));

// Task-5

// function calcBMI({ weight, height }) {
//   const numericWeight = Number(weight.replace(`,`, `.`));
//   const numericHeight = Number(height.replace(`,`, `.`));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// console.log(
//   calcBMI({
//     weight: `88.73`,
//     height: `1.75`,
//   })
// );

// Task-6

// function transformUsername({ firstName, lastName, ...props }) {
//   return { fullNAme: `${firstName} ${lastName}`, ...props };
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: `Andrey`,
//     lastName: `Zirchenko`,
//     email: `a.zirchenko90@gmail.com`,
//     friendCount: 40,
//   })
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: `Svetlana`,
//     lastName: `Stepanenko`,
//     email: `s.stepanenko@gmail.com`,
//     friendCount: 65,
//   })
// );

// Task-7

// function getStockReprt({ companyName, stock }) {
//   const values = Object.values(stock);
//   console.log(values);
//   let total = 0;

//   for (const value of values) {
//     total += value;
//   }
//   return `${companyName} has ${total} items in stock`;
// }

// console.log(
//   getStockReprt({
//     companyName: `Cyberdyne Sysetem`,
//     stock: {
//       repairBoots: 150,
//       defenceBots: 50,
//     },
//   })
// );

// console.log(
//   getStockReprt({
//     companyName: `Belacci`,
//     stock: {
//       hats: 22,
//       shoes: 5,
//       skirts: 9,
//     },
//   })
// );
