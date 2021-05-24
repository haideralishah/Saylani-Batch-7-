// function generateRandomNum() {
//     var num = Math.ceil(Math.random() * 10);
//     return num % 2 === 0 ? true : false;
// }

// var oddOrEven = generateRandomNum() ? "Even" : "Odd";









// if (num % 2 === 0) {
//     return true;
// }
// else {
//     return false;
// }

// var oddOrEven; // "Odd" || "Even"
// if (generateRandomNum()) {
//     oddOrEven = 'Even';
// }
// else{
//     oddOrEven = 'Odd';
// }






























// var greet = document.getElementById('greet');

// (true || false && true) ?
//     (
//         greet.innerHTML = "Hello User"

//     ) : (
//         greet.innerHTML = "Hello Ternery"
//     )















































// function cookDessert(desertName) {
//     console.log('bring me ' + desertName);
// }

// function cookFood(cb) {
//     console.log('Bring some food');    
//     cb('cake');
// }

// cookFood(cookDessert);

















// function cookFood(cb) {
//     console.log('Bring some food');
//     cb('cake');
// }

// cookFood(function (desertName) {
//     console.log('bring me ' + desertName);
// });































// var i = 0;

// function printI() {
//     console.log('This is ' + i + ' time.');
//     i++;
//     if (i === 10) {
//         clearInterval(printInterval);
//     }
// }
// var printInterval = setInterval(printI, 300);




/*
***********************************
**********Stop Watch Code**********
***********************************
*/
// var secondsValue = document.getElementById('seconds');
// var minutesValue = document.getElementById('minutes');
// var timerInterval;

// function startTimer() {
//     timerInterval = setInterval(function () {
//         var seconds = Number(secondsValue.innerHTML);
//         if (seconds < 59) {
//             secondsValue.innerHTML = Number(secondsValue.innerHTML) + 1;
//         }
//         else {
//             secondsValue.innerHTML = 0;
//             minutesValue.innerHTML = Number(minutesValue.innerHTML) + 1;
//         }
//     }, 1000);
// }

// function stopTimer() {
//     clearInterval(timerInterval);
// }



// var timeOutRef = setTimeout(function(){
//     alert("Please clear your dues.");
// },1000);

// clearTimeout(timeOutRef);







































// function greet() {
//     console.log('Hello');
// }



// var isFirstImag = true;
// function swapImage(element) {
//     if (isFirstImag) {
//         element.src = './images/2.jpg';
//         isFirstImag = false;
//     }
//     else {
//         element.src = './images/1.jpg';
//         isFirstImag = true;
//     }
// }













// function iAmReading(para) {
//     para.style.color = "yellow";
//     para.style.backgroundColor = "grey";
// }

// function iHaveRead(para){
//     para.style.color = 'black';
//     para.style.backgroundColor = 'white';
// }



















// var isExpand = true;
// var para = "This is very long story about Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam corruptiassumenda illum voluptas quamrationequidem nam quis officia quasi, esse ducimus autem laborum qui magnam commodi cum in hic!"

// function expandPara(element) {
//     if (isExpand) {
//         element.innerHTML = element.innerHTML.replace('...', para);
//         isExpand = false;
//     }
// }

// function compressPara(element) {
//     element.innerHTML = element.innerHTML.replace(para, '...');
//     isExpand = true;
// }





// function printValue(inputField) {
//     console.log('hello world', inputField);
// }














// var province = document.getElementById('province');

// function updateProvince(cityNameInput) {
//     var cityName = cityNameInput.value.toLowerCase();
//     switch (cityName) {
//         case "karachi":
//             province.value = "Sindh";
//             break;
//         case "lahore":
//             province.value = "Punjab";
//             break;
//         case "peshawar":
//             province.value = "KP";
//             break;
//         case "quetta":
//             province.value = "Balochistan";
//             break;
//         default:
//             console.log('You wrote wrong capital city.');
//             break;

//     }
// }





function makeInvisible(element) {
    element.className = element.className + ' hidden';
}









