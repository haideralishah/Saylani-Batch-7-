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








































// var parentNode = document.getElementById('parent-node');
// var elementToBeRemoved = parentNode.childNodes[3];

// parentNode.removeChild(elementToBeRemoved);



















// console.log(document.childNodes[1].childNodes[2].childNodes);


// var h1 = document.getElementById('hello-heading');
// // console.log(h1.parentNode.parentNode.childNodes);

// var bodyEl = h1.parentNode.parentNode.childNodes;

// for (var i = 0; i < bodyEl.length; i++) {
//     if (bodyEl[i].nodeType === 1 && bodyEl[i].nodeName.toLowerCase() === "div") {
//         var divs = bodyEl[i].childNodes;

//         for (var j = 0; j < divs.length; j++) {
//             if(divs[j].nodeType === 1 && divs[j].nodeName.toLowerCase() === 'h1'){
//                 console.log(divs[j])
//                 divs[j].innerHTML = 'Hello Greeting'
//             }
//         }


//     }
// }








// var h1 = document.createElement('H1');
// var text = document.createTextNode('Hello World');
// h1.appendChild(text);
// h1.setAttribute('title', 'heading vlaue');
// h1.setAttribute('class', 'special');
// var attrVal = h1.getAttribute('class');
// var allAttr = h1.attributes;
// console.log(allAttr);


// console.log(attrVal);
// console.log(h1.className);

// console.log(h1.hasAttribute('src'));
// console.log(h1.hasAttribute('title'));




























// var divs = document.childNodes[1].childNodes[2].childNodes[13].childNodes;
// var specialCount = 0;

// for (var i = 0; i < divs.length; i++) {
//     if (divs[i].nodeType === 1 && divs[i].getAttribute('class') === 'special') {
//         specialCount++;
//         if(specialCount === 3){
//             divs[i].innerHTML = 'This was 3rd special paragraph.';
//             break;
//         }
//     }
// }


























/*

parent.insertBefore(newElement, targetElement);


*/



var inputForm = document.getElementById('item-list');
var ol = document.getElementById('list-item');

function addInList() {

    var list = document.createElement('LI');
    var listText = document.createTextNode(inputForm.value);

    var delBtn = document.createElement('button');
    var delText = document.createTextNode('Delete');
    delBtn.appendChild(delText);
    delBtn.setAttribute('onclick', 'deleteElement(this)')

    var editBtn = document.createElement('button');
    var editText = document.createTextNode('Edit');
    editBtn.appendChild(editText);

    list.appendChild(listText);
    list.appendChild(editBtn);
    list.appendChild(delBtn);

    ol.appendChild(list);
    inputForm.value = '';
}
  
function deleteElement(element) {
    ol.removeChild(element.parentNode);
}