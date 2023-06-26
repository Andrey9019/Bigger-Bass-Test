// push pop
// const numbers = [1, 2, 3]
// numbers.push(4)
// numbers.pop()
// console.log(numbers)


// unshift shift
// const numbers = [1, 2, 3]
// numbers.unshift(4, 5, 6)
// numbers.shift()
// numbers.shift()
// console.log(numbers)


// slice
// const numbers = [1, 2, 3, 4, 5, 6]
// const result =  numbers.slice(3)
// console.log(result)
// console.log(numbers)


// splice
// const numbers = [1, 2, 3, 4, 5, 6];
// const result = numbers.splice(0, 2);
// console.log(numbers)
// console.log(result)

// numbers.splice(2, 1, `hello`);
// numbers.splice(2, 0, `hello`);
// console.log(numbers)



//Task 1

// const arrA = [3, `hello`, null, 34, false];

// for (let i = 0; i < arrA.length; i += 1)
// {
//      if (typeof arrA[i] !== `number`) {
//          arrA.splice(i, 1);
//          i -= 1;
//     }
// }
// console.log(arrA)

// або

// const arrA = [3, `hello`, null, 34, false];

// for (let i = arrA.length - 1; i >= 0; i -= 1)
//     if (typeof arrA[i] !== `number`) {
//         arrA.splice(i, 1);
//     }
// console.log(arrA)


//task 2

// function getCommonElements(arr) {
//     const result = [];
    
//     for (let i = 0; i < arr.length; i += 1) {
//         if (arr.includes(arr[i], i + 1)) {
//             result.push(arr[i])
//         }
//     }
//     return result
// };
// console.log(getCommonElements([43,1, 2, 3,13, 4, 43, 2, 13, 1, 3,]));

//task 3

// const users = [`Artem`, `Anna`, `Andrey`, `Larisa`, `Olga`, `Maksim`]
// const man = [`Artem`, `Andrey`, `Maksim`];

// function getWoman(users, man) {
//     const woman = [];

//     for (const user of users) {
//         if (!man.includes(user)) {
//            woman.push(user)
//         }
//     }
//     return woman
// }
// console.log(getWoman(users, man));

//task 4

// const string = `welcome to the future`;
// const SEPARATOR = ` `;
// const result = string.split(SEPARATOR).reverse().join(SEPARATOR);

// console.log(result);


//task 5


// const  numbers = [20,21,14,23,11,25,26,4,28,29];

// for (let i = 1; i < numbers.length; i += 1) {
//     if (numbers[i] - numbers[i - 1] !== 1) {
//         numbers[i] = numbers[i - 1]+1
//     }

//     console.log(numbers[i]);
// }

// task 6

// function creatStr(arr) {
//     let message;

//     switch (arr.length) {
//         case 0:
//             message = `no one likes this`
//             break;
//         case 1:
//             message = `${arr[0]} likes this`
//             break;
//         case 2:
//             message = `${arr[0]} and ${arr[1]} likes this`
//             break;
//          case 3:
//             message = `${arr[0]}, ${arr[1]} and ${arr[2]} likes this`
//             break;
//         default:
//             message = `${arr[0]} ,${arr[1]} and ${arr.length - 2} other likes this`
            
//         }
// return message
        
//     }
//         console.log(creatStr([]));
//         console.log(creatStr([`Peter`]));
//         console.log(creatStr([`Peter`,`Alex`]));
//         console.log(creatStr([`Peter`,`Alex`,`Jacob`]));
//         console.log(creatStr([`Peter`, `Alex`, `Jacob`, `Andrey`,`Peter`]));



 
///// Function

// function getSum(a, b) {

//     let sum = 0;

//     const arr = Array.from(arguments)
//     // console.log(arr);
//     for (const arg of arguments) {
//         sum += arg;

//     }
//     console.log(sum);
// }
// getSum(3, 5);
// getSum(2, 5, 7);
//  getSum(1, 4, 6, 8, 9, 7, 5, 3);


// let someValue = 4;

// if (true) {
//     someValue = 11;
// }
// console.log(someValue);

 

// Task-1
// const numbers = [10, 13, 15, 17, 19];

// function cheakValue(arr, target) {
//     let message = `Success`;

//     for (const num of arr) {
//         if (target > num) {
//             message = `Fail`;
//         }
//     }

//     return message
// }

// console.log(cheakValue(numbers, 9));
// console.log(cheakValue(numbers, 11));

// або краще патерн ранього повернення

//  const numbers = [10, 13, 15, 17, 19];
// function cheakValue(arr, target) {
//     for (const num of arr) {
//         if (target > num) {
//             return `Fail`
//         }
//         return `Success`
//      }
//  }

//  console.log(cheakValue(numbers, 9));
// console.log(cheakValue(numbers, 11));


// // Task-2

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9 ];
// function getCombination(arr, count) {
//     const result = [];

//     for (let i = 0; i < arr.length; i+=count) {
//         const comb = arr.slice(i, i + count)
//         result.push(comb)
        
//     }
//     return result
// }
// console.log(getCombination(data, 3));



// Task-3

// function getReactArea(dimension) {
//     const arr = dimension.split(` `)
//     const firstValue = Number(arr[0]);
//     const secondValue = Number(arr[1]);

//     return firstValue * secondValue

// }

// console.log(getReactArea(`3 5`));
// console.log(getReactArea(`15 9`));

                //Метод ДОДАВАННЯ
// const courses = [`HTML`, `CSS`, `JavaScript`,
//      `React`, `Noad JS`];

//     function addCourses(name) {
//         if (courses.includes(name)) {
//         return `Ви вже маете данний курс`
//         }
//         courses.push(name);
// }
//     addCourses(`Express`)
// console.log(courses);

                //Метод РЕМУВ

//  const courses = [`HTML`, `CSS`, `JavaScript`,
//       `React`, `Noad JS`];

// function removeCourse(name) {
//     const idx = courses.indexOf(name);

//     // ~
//     // -(x + 1)
//     // -1 => True ~ => 0 => False
//     // 0 => False ~ => -1 => True

//     if (!~idx) {
//         return `Курс із таким ім'ям не знайдено`
           
//     }
//     courses.splice(idx,1)
// }
//  console.log(removeCourse(`React`));
//  console.log(removeCourse(`Vue`));
//  console.log(courses);



//  const courses = [`HTML`, `CSS`, `JavaScript`,
//       `React`, `Noad JS`];


// function updateCourse(oldName, newName) {
//     const idx = courses.indexOf(oldName);
//     if (~idx) {
//         courses[idx] = newName;
//         return;

//     }
//     return `Курс із таким ім'ям не знайдено`
// }

// updateCourse(`CSS`, `NestJS`)
// console.log(courses);

