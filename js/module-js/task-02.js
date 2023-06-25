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

function calculateTotalPrice(order) {
    let total = 0;
    
for (let i = 0; i < order.length ; i += 1) { 
total += order[i];
}

  return total;
}



calculateTotalPrice([12, 85, 37, 4]);
calculateTotalPrice([164, 48, 291]);
calculateTotalPrice([412, 371, 94, 63, 176])