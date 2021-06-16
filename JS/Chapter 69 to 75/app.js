/*
string
number
boolean
array (special type of object)
functions
undefined

*/






// var car1 = {
//     name: 'Civic',
//     modal: 2019,
//     hybrid: false,
//     drive: function () {
//         console.log('It is driving fast.');
//     }
// }

// console.log(car1);

// car1.name = "Mehran";

// car1.accessories = ['air bag', 'ac'];

// console.log(car1);

// car1.drive();


























// var user = {};

// if (true) {
//     user.name = 'haider'
//     user.rollNum = 2643;
// }

// console.log(user);
































// var propName = 'profession'; // "profession"

// var obj = {
//     userName : "Haider",
//     profession: 'teacher'
// }

// // console.log(obj.profession);

// console.log(obj[propName]);





























// var user = {
//     name : 'haider',
//     password: '123456',
//     greet: function (){
//         console.log('welcome ' + this.name);
//     }
// }

// user.greet();



























// var user = {
//     userInput: function () {
//         this.name = prompt('what is your name?');
//     }
// }
// user.userInput();

// console.log(user.name);



































// var car1 = {
//     name: 'Civic',
//     modal: 2019,
//     hybrid: false,
// }

// for (var prop in car1) {
//     console.log(prop);
//     console.log(car1[prop]);
// }
























// var users = [];

// for (var i = 0; i < 3; i++) {
//     var userName = prompt('what is your name?');
//     var rollNum = prompt('what is your rollnumber?');
//     var user = {
//         userName: userName,
//         rollNum: rollNum
//     }
//     users.push(user);
// }

// console.log(users);
































// var users = [
//     { userName: 'haider', rollNum: '2343', age: 21 },
//     { userName: 'Akram', rollNum: '9945', age: 26 },
//     { userName: 'Ahmed', rollNum: '5566', age: 17 }
// ]

// for (var i = 0; i < users.length; i++) {
//     if (users[i].age < 18) {
//         console.log(users[i].userName + ", you are under 18.");
//     }
// }















// localStorage.setItem('teacherName', 'haider');

// var teacherName = localStorage.getItem('teacherName');

// console.log(teacherName);













// var user = {
//     email: 'headeralishah@gmail.com',
//     password: '123456'
// }


// localStorage.setItem('user', JSON.stringify(user));

// var userInfo = localStorage.getItem("user");

// console.log(JSON.parse(userInfo));



































// function Human(name, maritalStatus, intrest) {
//     this.name = name;
//     this.maritalStatus = maritalStatus;
//     this.intrest = intrest;
// }

// var user1 = new Human('Haider', 'married', 'JavaScript');
// var user2 = new Human('Arham', 'single', 'Python');
// var user3 = new Human('Ali', 'Married', 'Swift');

// console.log(user1.name);
// console.log(user2.maritalStatus);
// console.log(user3.intrest);






































// function User(name, email, password) {
//     this.name = name;
//     this.email = email;
//     this.password = password;
//     this.greet = function () {
//         console.log('Welcome ' + this.name);
//     }
// }

// var userName = document.getElementById('username');
// var email = document.getElementById('email');
// var password = document.getElementById('password');

// function register() {
//     var user = new User(userName.value, email.value, password.value);
//     user.greet();
// }












// function Gym(plan, price, duration) {
//     this.plan = plan;
//     this.price = price;
//     this.duration = duration;
// }

// Gym.prototype.calculateTotal = function () {
//     var totalBill;
//     if (this.duration < 6) {
//         totalBill = this.duration * this.price;
//     }
//     else if (this.duration >= 6 && this.duration < 12) {
//         totalBill = (this.duration * this.price) / 100 * 90;
//     }
//     else if (this.duration >= 12) {
//         totalBill = (this.duration * this.price) / 100 * 75;
//     }
//     console.log("Your total bill is " + totalBill);
// }


// var package1 = new Gym('Plan A', 500, 3);
// console.log(package1);

// package1.calculateTotal();










var user = {
    email:'',
    password: '',
    name: ''
}

console.log(Object.keys(user).length);





















