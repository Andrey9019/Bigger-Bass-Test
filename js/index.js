// const age = `25px`;
// console.log(age)

// const totalPrise =  200.74
// console.log(`цена`, totalPrise)

// let age = prompt('введи знач')
// age = Number(age)
// console.log(age)



// let base = prompt(`давай число`);
// base = Number(base);
// console.log(base);

// let power = prompt(`давай ступень`);
// power = Number(power);
// console.log(power);

// const result = base ** power;
// console.log(result)



// const room = 38;
// const type = 'VIP';
// const firstName = 'Andrey';
// const lastName = 'Zircdenko';

// const welcomeMsg =`Гость ${firstName} ${lastName} поселяється в ${type} номер ${room}`

// console.log(welcomeMsg)


// const x1 = 10;
// const x2 = 30;
// const number = 20;

// console.log(`число ${number} попадает в отрезок до ${x1}`, number < x1);
// console.log(`число ${number} попадает в отрезок после ${x2}`, number > x2);
// console.log(`число ${number} попадает в отрезок от ${x1} до ${x2}`,
//     number > x1 || number < x2);




// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log(`Можно открыть чат?` , canOpenChat)



// if (1) {
//     console.log(`true)`)
// }


// if (1) {
//     console.log(`true)`)
// } else {
//     console.log(`false)`)
// }

// 1сделать вари
// const minSalary = 18000;
// const maxSalery = 25000;
// const employees = 4;
// let totalSalery = 0;
// // перебрать сотрудников
// for (let i = 1; i <= employees; i += 1){
//     const salary = Math.round(
//         Math.random() * (maxSalery - minSalary) + minSalary)
// console.log(`ЗП сотрудника номер ${i} - ${salary}`);
//     // прибавить к тоталу
//     totalSalery += salary;
// }
// //лог
// console.log("totalSalery:",totalSalery)



// let password = "";

// do {
//   password = prompt("Введіть пароль довший 4-х символів", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);


// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);


// інструкції і варіації

// if(){

// }else{

//}

// інстукції switvh

// const value = 4;
// switch (value) {
//     case 1:
//     console.log(`One`);
//         break;
//      case 3:
//     console.log(`tree`);
//         break;
//      case 7:
//     console.log(`seven`);
//         break;
//      case 4:
//     console.log(`four`);
//         break;
//     default:
//         console.log(`default`);

// }


// for (let i = 0; i <= 20; i += 1) {
//     if (i % 2 === 0) {
// console.log(`парне`, i);
//         continue;
// }
//     console.log(`не парне`, i);
// }



// task 1

// let message = prompt(`color ?`);
// let action;
// if (message) {
//     message = message.toLowerCase()
// }

// if (message === `red`) {
//     action = `stop`;
// } else if (message === `yellow`) {
//     action = `redy`;
// } else if (message === `green`) {
//     action = `go`;
// } else {
//     action = `be careful`;
//  }
// console.log(action)
// console.log(message);


//task 2

let message = prompt(`color ?`);
let action;
if (message) {
    message = message.toLowerCase()
}

switch (message) {
    case `red`:
        action = `stop`;
        break;
    
    case `yellow`:
        action = `redy`;
        break;
    
    case `green`:
        action = `go`;
        break
    
    default:
        action = `be careful`;
}
console.log(action)










