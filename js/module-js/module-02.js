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
// console.log(getCommonElements([1, 2, 3, 4, 43, 2, 13, 1, 3,]));

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





