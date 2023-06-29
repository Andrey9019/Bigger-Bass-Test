// 1
// const productName = "Droid";
// const pricePerItem = 2000;
 
// 2
// let productName = "Droid";
// let pricePerItem = 2000;

// productName = 'Repair droid';
// pricePerItem = 3500;

// 3
// const topSpeed = 160;
// const distance  = 617.54;
// const login  = 'mango935';
// const isOnline  = true;
// const isAdmin = false;

// 4
// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice)

// 5
// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`

// 6
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
// console.log(message)
// console.log(totalPrice)

// 7
// function sayHi() {
//     console.log("Hello, this is my first function!");}
// sayHi();

// 8
// function add(a,b,c) {console.log(`Addition result equals ${a + b + c}`);}
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// 9
// function add(a, b, c) {return a + b + c;}
// add(2, 5, 8); // 15
// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// 10
// function makeMessage (name, price) {
//     const message = `You picked ${name}, price per item is ${price} credits` ;
//    return message;};

// 11
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//     const totalPrice = orderedQuantity * pricePerItem;
//   return totalPrice;};

//12
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//     const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//     const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
//   return message;}

//13
// function isAdult(age) {
//     passed = age >= 18;
//     return passed;}
// userAge = 20;
// result = isAdult(userAge);
// console.log(result);

//14

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';

//   const isMatch = ;


//   return isMatch;}

//24
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//     let discount;
    
//     if (totalSpent >= 50000)
//         discount = GOLD_DISCOUNT;
//     else if(totalSpent >= 20000)
//         discount = SILVER_DISCOUNT;
//     else if(totalSpent >= 5000)
//         discount = BRONZE_DISCOUNT;
//     else
//         discount = BASE_DISCOUNT;
    
//   return discount;}

//25

// function checkStorage(available, ordered) {
//   let message;
//   message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you"
//   return message;}


//26

// function getSubscriptionPrice(type) {
//   let price;
  
//   switch (type) {
//   case  "starter":
//       price = 0;
//       break;
//     case  "professional":
//       price = 20;
//       break;
//     case "organization":
//       price = 50;
//       break;}
//   return price;}


//28
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//     switch (password) {
//         case null:
//             message = "Canceled by user!";
//             break;
//          case ADMIN_PASSWORD:
//             message = "Welcome!";
//             break;
//       default:
//             message = "Access denied, wrong password!";
   
//     }
//      return message;
// }
    
//29

// function getShippingCost(country) {
//     let message;

//     switch (country) {
//         case "China":
//             message = "Shipping to China will cost 100 credits";
//             break;
//         case "Chile":
//             message = "Shipping to Chile will cost 250 credits";
//             break;
//         case "Australia":
//             message = "Shipping to Australia will cost 170 credits";
//             break;
//         case "Jamaica":
//             message = "Shipping to Jamaica will cost 120 credits";
//             break;
//         default:
//             message = "Sorry, there is no delivery to your country";
//             break;
//     }

//     return message;
// }



// const productName = "Repair  droid";

// // Якщо у змінній зберігається рядок
// console.log(productName.length); // 12

// // Якщо рядковий літерал
// console.log("Repair droid".length); // 12


//30

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }
// // console.log(message);


//31

// const courseTopic = "JavaScript essentials";
// // Change code below this line
// const courseTopic = "JavaScript essentials";
// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

//32
// function getSubstring(string, length) {
//   const substring = string.slice(string, length); // Change this line

//   return substring;
// }
//   getSubstring('Hello world', 11);
//   getSubstring('Hello world', 11);
//   getSubstring('Hello world', 3);
// getSubstring('Hello world', 0);

//33


//     function formatMessage(message, maxLength) {
//   let result;
//   result = message.length > maxLength ? message.slice(0, maxLength) + '...' : message
//   return result;}

//34

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase();
//   return normalizedInput;}

//35

// function checkForName(fullName, name) {
//  const result = fullName.includes(name); // Change this line
//   return result;
// }

//36

// function checkForSpam(message) {
//   let result;

//     const toLowerCaseMessage = message.toLowerCase()
    
//     if (toLowerCaseMessage.includes(`spam`) || toLowerCaseMessage.includes(`sale`))  {
//         result = true;
//     } else {
//         result = false;
// }

//     return result;
// }


