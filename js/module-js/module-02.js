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

function getCommonElements(arr) {
    const result = [];
    
    for (let i = 0; i < arr.length; i += 1) {
        if (arr.includes(arr[i], i + 1)) {
            result.push(arr[i])
        }
    }
    return result
};
console.log(getCommonElements([1, 2, 3, 4, 43, 2, 13, 1, 3,]));
