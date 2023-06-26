//Task-3

// function checkAge(age) {
//   if (age>=18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

//Task-2

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//    return "Access denied, wrong password!";
// }

//Task-3

// function checkStorage(available, ordered) {
//   // Change code below this line
//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//     return "The order is accepted, our manager will contact you";
// }

//Task-13

// function slugify(title) {

// return title.toLowerCase().split(` `).join(`-`)

// }
// slugify("Arrays for begginers")

//Task-16

// function makeArray(firstArray, secondArray, maxLength) {
//   const newArray = firstArray.concat(secondArray);
  
// if (newArray.length > maxLength) {
//   return newArray.slice(0,maxLength)
// }
//   return newArray
//   }

// makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0);
// makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2);
// makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3);
// makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3);

//Task-19

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
// const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

//Task-20

// function calculateTotalPrice(order) {
//     let total = 0;
// for (let i = 0; i < order.length ; i += 1) {
// total += order[i];
// }
//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176])

//Task-21

// function findLongestWord(string) {
// let words = string.split(` `);
//   let longestWord = ``;
// for (let i = 0; i < words.length; i+= 1) {
// if (words[i].length > longestWord.length) {
//   longestWord = words[i]
// }}
//   return longestWord;
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));

//Task-22

// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//    for(let i = min;i <= max;i += 1){
//    numbers.push(i)}
 
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));

//Task-23

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   for (let number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number)
//     }
//   }
//   return filteredNumbers
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3))


//Task-24

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

// if (fruits.includes(fruit)) {
//   return true
// }
// return false
// }

// console.log(checkFruit("plum"))
// console.log(checkFruit("mandarin"))
// console.log(checkFruit("pear"))

//Task-25

// function getCommonElements(array1, array2) {
// const result = [];

// for (let i = 0; i < array1.length && i < array2.length ; i+=1) {
//   const includ = array2.includes(array1[i]);
//           if (includ === true) {
//             result.push(array1[i])
//         }}
// return result;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))

//Task-26

// function calculateTotalPrice(order) {
//   let total = 0;


// for (let title of order) {
//   {
//     total += title;
//   }}
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

//Task-27

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];
    // if (number > value) {
    //   filteredNumbers.push(number);
    // }}
  // return filteredNumbers;
// }

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//     return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));

//Task-29

// function getEvenNumbers(start, end) {
//   const result = [];
//   for (let i = start; i <= end; i += 1){
//      if (i % 2 === 0){
//        result.push(i);
//       }}
//     return result
// }
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));
