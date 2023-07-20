// function declaration

// foo()
// function foo(){
// }
// foo()

// function expression

// const foo = function () {
// }
// foo()

// arrow function

// const foo = () => {
// }
// foo()

// declaration expression

// arrow

// const obj = {
//   name: "Test name",
//   hello() {
//     console.log(this);
//     console.log(this.name);
//   },
// };
// obj.hello();

// const objA = {
//   name: "User name",
//   hello: obj.hello,
// };

// objA.hello();
// 'use strict';

// const person = {
//     name: 'Alice',
//     customThis: this
// }
// console.log(person);
// 'use strict'
// function foo(){  //expression
//     console.log(this);
// }
// foo()

// 'use strict';
// const arrow = () => {
// console.log(this);
// }

// arrow()

//
// person.skills.showSkills()

// const person = {
//     name: 'Alice',
//     years: 30,
//     // hello: () => {
//     //     console.log(this);
//     // }
//     hello() {
//         // console.log('declaration', this);
//         const arrow = () => {
//             console.log('arrow', this);
//         }
//
//         return arrow;
//     }
// }
// const response = person.hello();

// response();
// response();

// const test = {
//     brand: 'BMW',
//     maxSpeed: 200,
//     price: 10000,
//     getPrice() {
//         console.log('getPrice',this);

//         const getMaxSpeed = () => {
//             console.log('arrow getMaxSpeed',this);

//             // const getBrand = () => {
//             //     console.log('arrow getBrand',this);
//             // }
//             // getBrand()
//         }
//         getMaxSpeed()
//     }
// }

// test.getPrice()

// const test = {
//     brand: 'BMW',
//     maxSpeed: 200,
//     price: 10000,
//     getPrice() {
//         console.log('getPrice',this);

//         function getMaxSpeed () {
//             console.log('declaration getMaxSpeed',this);
//         }
//         getMaxSpeed()
//     }
// }

// test.getPrice()

// const test = {
//     brand: 'BMW',
//     maxSpeed: 200,
//     price: 10000,
//     getPrice: () => {
//         console.log('arrow getPrice', this);

//         const getMaxSpeed = () => {
//             console.log('arrow getMaxSpeed', this);
//         }
//         getMaxSpeed()
//     }
// }

// test.getPrice()

// call apply bind
// const person = {
//     name: "Alice",
//     city: 'Lviv'
// }

// function foo(car, speed) {
//     console.log('car', car);
//     console.log('speed', speed);
//     console.log(this);
// }
// foo()
// foo.call(person, 'BMW', 90)
// const foo= function (car, speed) {
//     console.log('car', car);
//     console.log('speed', speed);
//     console.log(this);
// }

// const foo = (car, speed) => {
//     console.log('car', car);
//     console.log('speed', speed);
//     console.log(this);
// }

// foo.call(person, 'BMW', 90)

// apply

// function foo(car, speed) {
//     console.log('car', car);
//     console.log('speed', speed);
//     console.log(this);
// }
// foo.apply(person, ['BMW', 90,"hello", 345]);
// // foo.apply(person1, ['Audi', 90]);

// foo.call(person, ...['BMW', 90]);

// bind
// const person1 = {
//     name: "Kate",
//     city: 'Odessa'
// }
// function foo(car, speed) {
//     // console.log(arguments);
//     console.log('car', car);
//     console.log('speed', speed);
//     console.log(this);
// }

// const copy = foo.bind(person);
// // console.log(copy);
// copy('Volvo', 100)
// copy('Audi', 120)
// foo()

// foo('Volvo', 100)

// const foo = (car, speed) => {
//     // console.log(arguments);
//     console.log('car', car);
//     console.log('speed', speed);
//     console.log(this);
// }
// const copy = foo.bind(person1);
// copy('Volvo', 100)

// Task - 1
// Наше завдання написати програмне забезпечення для автомобіля, а саме
//натискання кнопки прискорення в системі круїз контролю.

// const car = {
//   brand: `Audi`,
//   speed: 0,
//   accelerate() {
//     this.speed += 10;
//     console.log(
//       `Автоиобіль ${this.brand} прискорюється. Поточна швидкість ${this.speed}`
//     );
//   },
// };

// const car2 = {
//   brand: `BMW`,
//   speed: 40,
//   //   accelerate: car.accelerate,
// };

// const car3 = { brand: `Volvo`, speed: 60 };
// const bmw = car.accelerate.bind(car2);
// const volvo = car.accelerate.bind(car3);

// for (let i = 0; i < 7; i += 1) {
//   bmw();
// }
// volvo();
// volvo();
// volvo();
// volvo();
// volvo();

// Task - 2
// Потрібно створити систему для продажу в інтернет магазині.
// Є об'єкт продукта в якому потрібно створити метод discount(буде
// приймати знижку клієнта в %) який буде повертати вартість товара з
// врахуванням знижки
// Є об'єкт клієнта який містить ім'я та індивідуальну знижку, потрібно
//створити метод purchase, який буде викликати метод для розрахунки вартості
//товару та логувати повідомлення про покупку
// Alice придбала товар зі знижкою в 8%, сума до сплати 460грн"

// const product = {
//   name: "Smartphone",
//   price: 500,
//   discont(percent) {
//     return (this.price * (100 - percent)) / 100;
//   },
// };

// const client = {
//   name: `Alice`,
//   discountPercent: 11,
//   puechase() {
//     const price = product.discont(this.discountPercent);

//     console.log(
//       `${this.name} придбала товар зі знижкою в ${this.discountPercent}%, сума до сплати ${price} грн`
//     );
//   },
// };
// const client2 = {
//   name: `Kate`,
//   discountPercent: 4,
// };

// client.puechase.call(client2);
// client.puechase();

// Task - 3
// Потрібно створити функціонал для контролю швидкості прокатних авто.
// Створіть функцію яка буде приймати 1 параметр (максимально дозволену швидкість)
// та виводити повідомлення чи ми рухаємось з безпечною швидкістю чи перевищуємо, функція має опрацьовувати об'єкт автомобіля як this

// const tesla = {
//   brand: "Tesla",
//   speed: 70,
// };

// const audi = {
//   brand: "Audi",
//   speed: 80,
// };

// function speedSensor(maxSpeed) {
//   if (this.speed <= maxSpeed) {
//     console.log(`Авто ${this.brand} рухаеться з допустимою швидкістю`);
//   } else {
//     console.log(`Авто  ${this.brand} перевищив швидкість`);
//   }
// }

// speedSensor.call(audi, 70)
// speedSensor.call(tesla, 70)

// Task-4 Калькулятор
// Створіть об'єкт calculator з трьома методами:

// read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.

// const calculator = {
//   read(a = 0, b = 0) {
//     this.a = a;
//     this.b = b;
//   },
//   add() {
//     return (this.a ?? 0) + (this.b ?? 0);
//   },
//   mult() {
//     return (this.a ?? 1) * (this.b ?? 1);
//   },
// };

// calculator.read(2);
// console.log(calculator);
// console.log(calculator.add());
// console.log(calculator.mult());

// const name = "student name";

// String.prototype.sayHello = function (query) {
//   console.log(`Hello my name is ${query}`);
// };

// const str = "some value";
// name.sayHello("Alice");
// str.sayHello("Alice");

// const user = {
//   name: `user name`,
//   age: 25,
//   sayHello() {
//     console.log(`hello my name is ${this.name}`);
//   },
//   getAge() {
//     console.log(`my age ${this.age}`);
//   },
// };

// const student = Object.create(user);
// student.name = `Andrey`;
// console.log(student);
// student.sayHello();
// student.getAge();

// const studentHTML = Object.create(student);
// console.log(studentHTML);
// studentHTML.sayHello();
// studentHTML.age = 19;
// studentHTML.getAge();

//

// class User {
//   #email;
//   constructor(name, age = `порожньо`, email) {
//     this.#email = email;
//     this.name = name;
//     this.age = age;
//   }
//   #ckechPassword() {
//     const password = prompt();
//     return password === `1111`;
//   }
//   get email() {
//     if (this.#ckechPassword()) {
//       return this.#email;
//     }
//     return `не вірний пароль`;
//   }

//   set email(newEmail) {
//     if (this.#ckechPassword()) {
//       this.#email = newEmail;
//     }
//   }
// }
// const andrey = new User(`Andrey`, 25, `test@gmail.ua`);

// console.log(andrey.email);

// const alice = new User(`Alice`, 22, `hello`);
// const kate = new User(`Kate`);
// console.log(andrey.name);
// andrey.name = `Alice`;

// andrey.email = `newtest@mail.com`;
// console.log(andrey);
// console.log(alice);
// console.log(kate);

// class Student extends User {
//   constructor(name, age, email, points) {
//     super(name, age, email);
//     this.points = points;
//   }
// }
// const andrey = new Student(`Andrey`, 25, `test@gmail.ua`, 100);
// console.log(andrey);

//

// Task-1
// Необхідно створити клас Rectangle, який представляє прямокутник.
//Клас повинен мати приватні властивості width та height, а також публічні
//гетери та сетери для цих властивостей.Гетери повинні повертати значення
//властивостей, а сетери повинні дозволяти змінювати значення властивостей
//з валідацією.

// class Rectangle {
//   #width;
//   #height;
//   constructor({ width, height } = {}) {
//     this.#width = width;
//     this.#height = height;
//   }
//   get width() {
//     return this.#width;
//   }

//   set width(newWidth) {
//     if (typeof newWidth === `number` && newWidth > 0) {
//       this.#width = newWidth;
//     } else {
//       console.log(`Ширина повина бути чиислом більше за 0`);
//     }
//   }

//   get height() {
//     return this.#height;
//   }

//   set height(newHeight) {
//     if (typeof newHeight === `number` && newHeight > 0) {
//       this.#height = newHeight;
//     } else {
//       console.log(`Висота повина бути чиислом більше за 0`);
//     }
//   }
// }
// const item = new Rectangle({ width: 3, height: 4 });
// console.log(item);

//// console.log(item.width);
// item.width = 12;
// console.log(item.width);
// item.height = 15;
// console.log(item.height);

//
// Task-2
// Реалізуйте клас Student, який успадковуватиметься від класу User.
//Цей клас повинен мати такі властивості:
// name приватна властивість (ім'я, успадковується від User),
// surname приватна властивість (прізвище, успадковується від User),
// year (рік вступу до вузу).

// Клас повинен мати метод getFullName() (успадковується від User), за
//допомогою якого можна вивести одночасно ім'я та прізвище студента.
// Також клас повинен мати метод getCourse(), який виводитиме поточний курс
//студента(від 1 до 5, якщо значення перевищує 5  курс виводити що студент
//являєтсья випускником).

// Курс обчислюється так: потрібно від поточного року відняти рік вступу
//до вузу.Поточний рік отримаєте самостійно(читати документацію!!!).
// Приклад ініціалізації екземпляру класа:
// const student = new Student('Петрик', 'Пяточкин', 2019);

// class User {
//   #name;
//   #surname;
//   constructor(name, surname) {
//     this.#name = name;
//     this.#surname = surname;
//   }
//   getFullName() {
//     return `${this.#surname} ${this.#name}`;
//   }
// }

// class Student extends User {
//   constructor({ name, surname, year = `not` }) {
//     super(name, surname);
//     this.year = year;
//   }
//   getCourse() {
//     const today = new Date();
//     const correntYear = today.getFullYear();
//     const diff = correntYear - this.year;
//     if (correntYear < this.year) {
//       return;
//     }
//     if (diff > 5) {
//       return `студент являєтсья випускником`;
//     }
//     return `${diff} курс`;
//   }
// }
// const student = new Student({
//   name: `Andrey`,
//   surname: `Zirchenko`,
//   year: `2024`,
// });
// console.log(student);
// console.log(student.getFullName());
// console.log(student.getCourse());

//

// Task-3
// Необхідно створити клас BankAccount, який представляє банківський рахунок.
//Клас повинен мати приватну властивість _balance, яка представляє баланс
//рахунку.Клас повинен також мати публічні методи deposit та withdraw,
//які дозволяють здійснювати операції з депозитом та зняттям коштів з рахунку.
//При цьому _balance повинна бути доступна лише в межах класу BankAccount та
//його приватних методів.

// class BankAccount {
//   #balance;
//   constructor() {
//     this.#balance = 0;
//   }
//   deposit(amount) {
//     if (amount > 0) {
//       this.#changeBalance(amount);
//       console.log(`Здійснено поповнення ${amount}`);
//       return;
//     }
//     console.log("Відмова, сума має бути більше 0");
//   }
//   withdraw(amount) {
//     if (amount <= 0 || amount > this.#balance) {
//       console.log("Відмова, сума має бути більше 0");
//       return;
//     }
//     this.#changeBalance(-amount);
//     console.log(`Знято ${amount}`);
//   }
//   #changeBalance(amount) {
//     this.#balance += amount;
//   }
// }

// const instance = new BankAccount();

// console.log(instance);
// instance.deposit(100);
// console.log(instance);
// instance.withdraw(50);
// console.log(instance);
// instance.deposit(1200);
// console.log(instance);
// instance.withdraw(1000);
// console.log(instance);

//

// Task-4
// Необхідно створити клас Hero, який представляє героя з гри. Клас повинен мати публічні властивості name, level та health, а також методи attack та heal, що дозволяють герою атакувати та відновлювати здоров'я відповідно.
// Також створи функціонал для підрахунку створених героїв

// Властивість name має зберігати ім'я героя.
// Властивість level має зберігати рівень героя.
// Властивість health має зберігати поточний рівень здоров'я героя.
// Метод attack наносить пошкодження в розмір 10 одиниць. Метод heal додає до здоров'я героя 10 одиниць.

// class Hero {
//   static counter = 0;
//   static addHero() {
//     this.counter += 1;
//     console.log("Кількість героїв ", this.counter);
//   }

//   #level;
//   constructor(name) {
//     this.name = name;
//     this.#level = 1;
//     this.health = 200;
//     Hero.addHero();
//   }

//   attack() {
//     console.log(`Attack with 10 damage`);
//   }

//   heal() {
//     this.health += 10;
//   }
// }

// const bloodseker = new Hero("Bloodseker");
// const bloodseker2 = new Hero("Bloodseker");
// const bloodseker3 = new Hero("Bloodseker");
// const bloodseker4 = new Hero("Bloodseker");
// const bloodseker5 = new Hero("Bloodseker");
// const bloodseker6 = new Hero("Bloodseker");

// console.log(bloodseker.heal());
// console.log(bloodseker);
// console.log(Hero.counter);
