// var element = document.getElementById('idName');


// var h1 = document.getElementsByTagName("h1");
// var p = document.getElementsByTagName("p");
// var secondPara = p[2];
// secondPara.innerHTML = prompt('what is your name?');

// secondPara.innerHTML = 'This is second para.'

// secondPara.style.color = 'red';


// var specialDiv = document.getElementById('special');

// var specialDiv = document.getElementsByTagName('div');  // [div]

// var specialPara = specialDiv[0].getElementsByTagName("p");

// console.log(specialPara);






























// var p = document.getElementsByTagName('p');
// var index = 0;

// var changeParaColor = setInterval(function () {
//     p[index].style.color = 'red';
//     if (index !== 0) {
//         p[index - 1].style.color = 'black';
//     }
//     index++;

//     if (index === p.length) {
//         clearInterval(changeParaColor);
//     }

// }, 1000);




















// var ulColl = document.getElementsByTagName('ul');
// var ul = ulColl[0];

// var liPickone = ul.getElementsByClassName('pick-one');
// console.log(liPickone)



// var pickOne = document.getElementsByClassName('pick-one');

// for (var i = 0; i < pickOne.length; i++) {
//     pickOne[i].style.fontSize = '24px';
// }
































// var pickOne1 = document.querySelector('.pick-one');
// var pickOneAll = document.querySelectorAll('pick-one');

// var h1 = document.querySelectorAll('h1');

// var aInsideLi = document.querySelectorAll("ul a");

// aInsideLi[0].style.color = 'green';

// console.log(aInsideLi[0]);
// console.log(pickOne1);
// console.log(pickOneAll);
// console.log(h1);











/*

User Name / Haider
Age  / 30
Qualification / Graduate

*/



// var userName, age, qualification;
// var formFields = document.getElementById('form-fields');
// var result = document.getElementById('result');

// function getAllFields() {
//     userName = document.getElementById("user-name").value;
//     age = document.getElementById("age").value;
//     qualification = document.getElementById("qualification").value;
//     if (userName !== '' && age !== '' && qualification !== '') {
//         formFields.style.display = 'none';
//         showResult();
//     }
//     else{
//         document.getElementById('error').innerHTML = 'All fields are required.'
//     }
// }

// function showResult() {
//     result.innerHTML = "<h1>Welcome " + userName + "</h1>";
//     result.innerHTML = result.innerHTML + "<p>Your age is " + age + "</p>";
//     result.innerHTML = result.innerHTML + "<p>Your qualification is " + qualification + "</p>";
// }

















































// var div = document.getElementsByTagName('div')[0];

// console.log(document.childNodes[1].childNodes[2].childNodes[3])

// console.log(div.childNodes[1].childNodes[1]);











// var div1 = document.getElementById('heading');

// var div2 = document.getElementById('paragraphs');

// console.log(div2.childNodes[0]);
// console.log(div2.firstChild);
// console.log(div2.lastChild);

// console.log(div2.previousSibling);
// console.log(div1.nextSibling);






























/*
innerHTML
input.value
*/



var inputForm = document.getElementById('item-list');
var ol = document.getElementById('list-item');

function addInList() {

    var list = document.createElement('LI');

    var listText = document.createTextNode(inputForm.value);

    list.appendChild(listText);

    list.setAttribute("title", inputForm.value);

    ol.appendChild(list);

    inputForm.value = '';
}












// var parentNode = document.getElementById('parent-node');
// var elementToBeRemoved = parentNode.childNodes[3];

// parentNode.removeChild(elementToBeRemoved);

















