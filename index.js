//Задача 1.

// let user = {
//   name: "Андрей",
//   age: 33,
//   greet: function () {
//     console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет`);
//   },
// };

// user.greet();

//Задача 2.

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   getArea() {
//     return this.width * this.height;
//   }
// }

// const rectangle = new Rectangle(17, 23);

// console.log("Площадь прямоугольника:", rectangle.getArea());

//Задача 3.

// let game = {
//   score: 0,
//   level: 1,
//   increaseScore: function () {
//     this.score += 1;
//   },
//   increaseLevel: function () {
//     this.level += 1;
//   },
// };

// console.log("Начальный счет:", game.score);
// console.log("Начальный уровень:", game.level);

// game.increaseScore();
// game.increaseScore();
// game.increaseLevel();

// console.log("Счет после увеличения:", game.score);
// console.log("Уровень после увеличения:", game.level);

//Задача 4.

// let user = {
//   name: "Андрей",
//   age: 33,
//   sayName: function () {
//     console.log("Меня зовут " + this.name);
//   },
// };

// user.sayName();

//Задача 5.

// const counter = {
//   value: 0,

//   increase() {
//     this.value += 1;
//   },

//   decrease() {
//     this.value -= 1;
//   },
// };

// console.log(counter.value);
// counter.increase();
// console.log(counter.value);
// counter.decrease();
// console.log(counter.value);

//Задача 5.

// const product = {
//   name: "Example Product",
//   price: 100,

//   getDiscountedPrice: function (discount) {
//     const discountedPrice = this.price * (1 - discount / 100);
//     return discountedPrice;
//   },
// };

// const discount = 20;
// const discountedPrice = product.getDiscountedPrice(discount);
// console.log(`Цена со скидкой ${discount}%: $${discountedPrice}`);

//Задача 6.

// let team = {
//   name: "Our Team",
//   members: ["Andrew", "Murtuz", "Gurban", "Azer"],
//   listMembers: function () {
//     console.log("Team Members:");
//     this.members.forEach(function (member) {
//       console.log(member);
//     });
//   },
// };

// team.listMembers();

//==========================================================================

//Задача 1. Метод call

// const person = {
//   sayHello: function (name) {
//     console.log(`Привет, меня зовут ${name}`);
//   },
// };

// person.sayHello.call(null, "Андрей");
// person.sayHello.call(null, "Гурбан");
// person.sayHello.call(null, "Муртуз");

//Задача 2. Метод Apply

// function calculateTotal() {
//   let total = Array.prototype.reduce.apply(arguments, [
//     (sum, price) => sum + price,
//     0,
//   ]);

//   return total;
// }

// let totalPrice = calculateTotal(10, 20, 30, 40);
// console.log("Общая сумма:", totalPrice);

//Задача 3. Метод bind

// function multiply(x, y) {
//   return x * y;
// }

// const double = multiply.bind(null, 2);

// console.log(double(5));

//Задача 4. Метод Call

// class Teacher {
//   introduce(student) {
//     console.log(`Меня зовут ${student.name}, я преподаю ${student.subject}`);
//   }
// }

// const teacher = new Teacher();

// class Student {
//   constructor(name, subject) {
//     this.name = name;
//     this.subject = subject;
//   }
// }

// const student = new Student("Андрей", "js");

// teacher.introduce.call(teacher, student);

//Задача 5. Метод apply

// function findMax(numbers) {
//   return Math.max.apply(null, numbers);
// }

// let array = [3, 7, 2, 9, 5];
// let max = findMax(array);
// console.log("Максимальное значение в массиве:", max);

//Задача 6. Метод Bind

// const dog = {
//   name: "Шарик",
//   bark() {
//     console.log(`Гав-гав, меня зовут ${this.name}`);
//   },
// };

// function barkTwice() {
//   this.bark();
//   this.bark();
// }

// const boundBarkTwice = barkTwice.bind(dog);
// boundBarkTwice();

//Задача 7. Метод Call

// function greet(timeOfDay) {
//   if (timeOfDay === "morning") {
//     console.log("Good morning!");
//   } else if (timeOfDay === "afternoon") {
//     console.log("Good afternoon!");
//   } else if (timeOfDay === "evening") {
//     console.log("Good evening!");
//   } else {
//     console.log("Hello!");
//   }
// }

// greet.call(null, "morning");
// greet.call(null, "afternoon");
// greet.call(null, "evening");
// greet.call(null, "night");

//Задача 8. Метод Apply

// function calculateAverage(grades) {
//   if (grades.length === 0) {
//     return 0;
//   }

//   let sum = Array.prototype.reduce.apply(grades, [(acc, val) => acc + val, 0]);
//   return sum / grades.length;
// }

// const grades = [80, 90, 75, 85, 95];
// console.log("Average grade:", calculateAverage(grades));

//Задача 9.Метод bind

// const person = {
//   name: "Андрей",
// };

// function sayName() {
//   console.log("Меня зовут " + this.name);
// }

// const sayPersonName = sayName.bind(person);

// sayPersonName();

//Задача 10. Метод call

// function printDetails() {
//   console.log(`Name: ${this.name}`);
//   console.log(`Age: ${this.age}`);
//   console.log(`Profession: ${this.profession}`);
// }

// let details = {
//   name: "Andrew",
//   age: 33,
//   profession: "Bass Player",
// };

// printDetails.call(details);
