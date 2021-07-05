// var userName = 'Haider';


// if (true) {
//     var userName = 'Shah';
// }

// function greetUser() {
//     var userName = 'Ali';
//     console.log('Welcome ' + userName);
// }

// greetUser();
// console.log(userName);












// let userName = "haider";
// if (true) {
//     let userName = "Ali";
//     console.log(userName);
// }

// userName = 'shah';

// console.log(userName);

// const URL = 'https://api.happy.com';

// URL = 'Happy';

// console.log(URL); 























// setTimeout(function () {
//     console.log('Hello')
// }, 1000);

// setTimeout(() => {
//     console.log('Hello')
// }, 1000);









// var x = function (userName) {
//     return 'Welcome ' + userName
// }

// var y = (a, b) => 'Welcome ' + a + b;

// var y = a  => 'Welcome ' + a ;

// var z = userName => {
//     console.log('Welcome ' + userName)
// };

// z('haider');









// function userName() {
//     var user = 'haider';
//     console.log(this);
// }

// userName();

// var a = () => {
//     console.log(this);
// }

// a();












// var obj = { // does not create a new scope
//     i: 10,
//     b: () => console.log(this.i, this),
//     c: function () {
//         console.log(this.i, this);
//     },
//     childObj: {
//         b: () => console.log(this),
//         c: function () {
//             console.log(this.i, this);
//         },
//     }
// }

// obj.childObj.b();
// obj.childObj.c();


// console.log(this);

// obj.b();
// obj.c();






// console.log('Hello');

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log('loop completed');


// console.log('Ali');










// let user = 'Haider';
// console.log('World');
// function checkTime() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve({ h1: 'Hungery Dog', story: "The quick brown fox jumps over the lazy dog." });
//             // reject('Something went wrong.');
//         }, 3000)
//     });
// }
// checkTime()
//     .then((story) => {
//         console.log(story);
//     })
//     .catch((error) => {
//         console.error(error);
//     })

// console.log('hello', user);




















// function checkTime() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let dateStr = new Date().getTime();
//             if (dateStr % 2 === 0) {
//                 resolve();
//             }
//             else {
//                 reject();
//             }
//         }, 3000)
//     });
// }
// checkTime()
//     .then(() => {
//         console.log('Time was good.');
//     })
//     .catch(() => {
//         console.error('Time was odd');
//     })













// function messageUser(rollNum) {
//     let fee = 3000;
//     return new Promise((resolve, reject) => {
//         if (rollNum < 3000) {
//             resolve(fee / 100 * 30);
//         }
//         else {
//             reject('Sorry! You are not eligible for scholarship.')
//         }
//     })
// }

// messageUser(3001)
//     .then((discountedFee) => {
//         console.log(discountedFee);
//     })
//     .catch((error) => {
//         console.error(error);
//     })












// var greetAfter3sec = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("hello Haider");
//     }, 3000)
// })

// greetAfter3sec.then((greeting) => {
//     console.log(greeting);
// })



































// let countries = {
//     provinces: {
//     },
//     cities: {
//         sindhCapital: 'Karachi',
//         balochistanCapital: 'Quetta',
//         punjabCapital: 'Lahore',
//         KPCapital: 'Peshawar',
//         countryCapital: 'Islamabad'
//     },
//     districts: {
//     }
// }
// let { sindhCapital, KPCapital } = countries.cities;
// console.log(sindhCapital);














let fruits = ['apple', 'bnanana', 'orange', 'pineapple', ,'grapes','mango'];


let [ , favFruit , , ,  dislikedFruit] = fruits;


console.log(favFruit);

console.log(dislikedFruit);





