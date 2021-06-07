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
































var users = [
    { userName: 'haider', rollNum: '2343', age: 21 },
    { userName: 'Akram', rollNum: '9945', age: 26 },
    { userName: 'Ahmed', rollNum: '5566', age: 17 }
]

for (var i = 0; i < users.length; i++) {
    if (users[i].age < 18) {
        console.log(users[i].userName + ", you are under 18.");
    }
}


































