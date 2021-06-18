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

// Gym.prototype.swimming = true;

// var package1 = new Gym('Plan A', 500, 3);
// var package2 = new Gym('Plan B', 800, 1);
// var package3 = new Gym('Plan C', 200, 1);

// if ("price" in package1) {
//     if (package1.hasOwnProperty('price')) {
//         console.log('own property');
//     }
//     else {
//         console.log('prototype property');
//     }

// }


// package3.swimming = false;
// console.log(package1, package2, package3);

// package1.calculateTotal();










// var user = {
//     email:'',
//     password: '',
//     name: ''
// }

// console.log(Object.keys(user).length);

















































// var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var num1 = Math.floor(Math.random() * 26); // 3
// var num2 = Math.floor(Math.random() * 26);  // 25
// var num3 = Math.floor(Math.random() * 26);  // 5

// var variableName = alphabet[num1] + alphabet[num2] + alphabet[num3]; // dzf
// var obj = {};
// obj[variableName] = 'Haider';

// console.log(obj);




















/*
Data Types:
    string
    number
    boolean
    arrays (special type of object)
    object
    functions
    undefined
    null

Mathmatical Operations

Loops

conditions: 
    &&
    ||
    ===
    ==
    !==
    !=
    <
    >
    <=
    >=
    switch
    turnery

methods: 
    string
    number
    date methods

Functions:
    closure
    call back
    time events
    return


events: 


DOM manipulation














*/






