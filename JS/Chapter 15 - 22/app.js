// var city1 = "karachi";
// var city2 = "lahore";
// var city3 = "peshawar";
// var cars = [];

// var cities = ["karachi", "lahore", 'peshawar'];

// // console.log(cities[2]);

// cars[0] = "Karachi";
// cars[2] = "Peshawar";
// console.log(cars);






// var something = ['haider', 2643, true, ['apple', 'banana'], '021-36912345'];
// console.log(something[3][1]);


// var students = ['haider', 'akram', 'akbar'];

































/*
properties
method


.length

.push()
.unshift()


.pop()
.shift()

.splice()
.slice()


*/


// var cities = ['Karachi', 'Lahore', 'Islamabad'];
// // console.log(cities.length);
// console.log(cities);
// cities.push('Peshawar');
// console.log(cities);
// cities.unshift('Quetta');
// console.log(cities);
// cities.pop();
// cities.shift();
// console.log(cities);
















// var num1 = +prompt('tell a number');
// var operator = prompt('tell an operator');
// var num2 = +prompt('tell another number');

// if (operator === '+') {
//     console.log(num1 + num2);
// }
// else if (operator === '-') {
//     console.log(num1 - num2);
// }
// else if (operator === '*') {
//     console.log(num1 * num2);
// }
// else if (operator === '/') {
//     console.log(num1 / num2);
// }
// else{
//     console.log('Something went wrong.');
// }




















// var cities = [prompt('tell a city name'), prompt('tell a city name'), prompt('tell a city name'), prompt('tell a city name'), prompt('tell a city name')];


// console.log(cities);







// var city1 = prompt('tell a city name');
// var city2 = prompt('tell a city name');
// var city3 = prompt('tell a city name');
// var city4 = prompt('tell a city name');
// var city5 = prompt('tell a city name');

// var cities = [city1, city2, city3, city4, city5];
// console.log(cities);














// var fruits = ['apple', 'banana', 'cherry', 'orange'];

// // fruits.splice(1, 2);
// fruits.splice(2, 1, "Mango", "Pineapple");

// console.log(fruits);

// var mangoIndex = fruits.indexOf("Mango");
// console.log(mangoIndex);




























// var fruits = ['apple', 'banana', 'cherry', 'orange'];
// console.log(fruits);

// var dislikedFruit = prompt('let us know least liked fruit.');
// var likedFruit = prompt('let us know favourite fruit.');

// var dislikedIndex = fruits.indexOf(dislikedFruit);
// fruits.splice(dislikedIndex, 1, likedFruit);
// console.log(fruits);






















// var fruits = ['apple', 'banana', 'cherry', 'orange', 'watermelon', 'grapes', 'avocado'];

// var favFruits = fruits.slice(2, 5);

// console.log(favFruits);















































// for (var i = 0; i <= 50; i++) {

//     console.log(i);

// }















// for (var i = 5; i <= 50; i = i + 2) {

//     console.log(i);

// }














// for (var i = 50; i >= 0; i--) {

//     console.log(i);

// }



























// var siblingsCount = +prompt('let us know your siblings count.');
// var allSiblings = [];

// for(var sibling = 1; sibling <= siblingsCount; sibling++){
//     var siblingName = prompt("Please tell your sibling number " + sibling);
//     allSiblings.push(siblingName);
// }
// console.log(allSiblings);


























// var tableName = +prompt('tell a table name');
// var times = +prompt('how many times table should run');

// for (var tableTime = 0; tableTime <= times; tableTime++) {
//     console.log(tableName + ' x ' + tableTime + ' = ' + tableName * tableTime);
// }
































// var userName = 'haider';
// var userNameInUpper = 'HAIDER';
// //Haider

// console.log(userName.toUpperCase());
// console.log(userNameInUpper.toLowerCase());
// console.log(userName[3]);
// console.log(userName.length);


// var userName = prompt('what is your name?');

// var firstChr = userName[0];
// var remainChr = userName.slice(1);

// console.log(firstChr.toUpperCase() + remainChr.toLowerCase());











// var fruits = ['apple', 'banana', 'cherry', 'orange', 'watermelon', 'grapes', 'avocado'];
// var fruitsLength = fruits.length;

// for (var i = 0; i < fruitsLength; i++) {
//     console.log(fruits[i]);
// }






























// var isCleanCity = false;
// var cleanCities = ['Karachi', 'Lahore', 'Islamabad', 'Peshawar', 'Quetta'];
// var city = prompt('Which city do you live in?'); // Gujranwala

// for (var i = 0; i < cleanCities.length; i++) {
//     if (city === cleanCities[i]) {
//         isCleanCity = true;
//         break;
//     }
// }

// if (isCleanCity) {
//     console.log('ap ek saaf suthre sheher k baaasi hn.');
// }
// else {
//     console.log('safai ka khas khyal rkhen');
// }













































/*
art club teaches drawing
required age 15

male ~ welcome to males art club

female ~ welcome to females art club
*/


// var age = prompt('what is your age?');
// var gender = prompt('what is your gender?');
// var requiredAge = 15;

// if (age >= requiredAge) {
//     if (gender === 'male') {
//         console.log('welcome to males art club');        
//     }
//     else if (gender === 'female') {
//         console.log('welcome to females art club');
//     }
// }
// else {
//     console.log('please try again once you are ' + requiredAge + ' years old.');
// }










// var abcd = ['a', 'b', 'c', 'd', 'e', 'f']

// for (var i = 0; i < 10; i++) {
//     for (var j = 0; j < abcd.length; j++) {
//         console.log(i, abcd[j]);
//     }
// }

// var firstNames = ['Aslam', 'Akram', 'Anwar'];
// var lastNames = ['Khan', 'Ansari', 'Shaikh'];

// for (var i = 0; i < firstNames.length; i++) {
//     for (var j = 0; j < lastNames.length; j++) {
//         console.log(firstNames[i] + ' ' + lastNames[j]);
//     }
// }


/*
.length
.slice

.toUpperCase()
.toLowerCase()
indexing
userName[5]

kArAChI
Karachi
*/
// var userName = 'Haider';











var userName = prompt('what is your name?');
var firstChr = userName[0];
var restChr = userName.slice(1);

console.log(firstChr.toUpperCase() + restChr.toLowerCase());














































