// // Task-10
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

// Task-11

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
// }
// console.log(keys);
// console.log(values);

// Task-13

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(values);

// Task-14

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   const keys = Object.keys(object);
//   for (const key of keys) {
//     propCount += 1;
//   }

//   return propCount;
// }

// Task-15

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

// Task-16

// function countTotalSalary(salaries) {
//   let totalSalary = 0;

//   const values = Object.values(salaries);
//   for (key of values) {
//     totalSalary += Object.values(salaries);
//   }
//   console.log(totalSalary);
// }
// countTotalSalary({
//   mango: 100,
//   poly: 150,
//   alfred: 80,
// });
// countTotalSalary({
//   kiwi: 200,
//   poly: 50,
//   ajax: 150,
// });

// Task-18

// const products = [
//   { name: "Grip", price: 1200, quantity: 9 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Droid", price: 400, quantity: 7 },
// ];

// function getProductPrice(productName) {
//   for (let product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
// }
// getProductPrice("Radar");
// getProductPrice("Grip");
// getProductPrice("Engine");

// Task-19

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getAllPropValues(propName) {
//   let value = [];
//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//       value.push(product[propName]);
//     }
//   }
//   return value;
// }

// getAllPropValues("quantity");
// getAllPropValues("price");
// getAllPropValues("category");

// Task-20
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;
//   for (const product of products) {
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//     }
//   }
//   //   return totalPrice;
//   console.log(totalPrice);
// }

// calculateTotalPrice("Blaster");
// calculateTotalPrice("Radar");
// calculateTotalPrice("Droid");
// calculateTotalPrice("Grip");

// Task-23

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
//  };
// Change code below this line

// const highYesterday = highTemperatures.yesterday;
// const highToday = highTemperatures.today;
// const highTomorrow = highTemperatures.tomorrow;
// const highIcon = highTemperatures.icon;

// const {
//   highIcon:
//     firstCoverImage = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// Task-30
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";

//   const makeTask = { completed: false };
// }
// makeTask({ text: "Buy bread" });
// makeTask({});
// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" });

// Task-33

// function findMatches(arr, ...args) {
//   const matches = [];
//   for (let i = 0; i < args.length; i += 1) {
//     if (arr.includes(args[i])) {
//       matches.push(args[i]);
//     }
//   }
//   console.log(matches);
//   return matches;
// }
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);

// Task -34
// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   removeBook(bookName) {
//     console.log(`Deleting book ${bookName}`);
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
// };

// bookShelf.removeBook("Red sunset");

// Task-35

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (let potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i++) {
      if (potionName === this.potions[i].name) {
        return this.potions.splice(i, 1);
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },

  updatePotionName(oldName, newName) {
    for (let potion of this.potions) {
      if (potion.name === oldName) {
        return (potion.name = newName);
      }
    }
    return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};
