
// var inputForm = document.getElementById('item-list');
// var ol = document.getElementById('list-item');
// var addBtn = document.getElementById('addList');
// var editElement;

// function addInList() {

//     var list = document.createElement('LI');
//     var listText = document.createTextNode(inputForm.value);

//     var delBtn = document.createElement('button');
//     var delText = document.createTextNode('Delete');
//     delBtn.appendChild(delText);
//     delBtn.setAttribute('onclick', 'deleteElement(this)')

//     var editBtn = document.createElement('button');
//     var editText = document.createTextNode('Edit');
//     editBtn.appendChild(editText);
//     editBtn.setAttribute('onclick', 'editElementFunc(this)');


//     list.appendChild(listText);
//     list.appendChild(editBtn);
//     list.appendChild(delBtn);

//     ol.appendChild(list);
//     inputForm.value = '';
// }

// function deleteElement(element) {
//     ol.removeChild(element.parentNode);
// }

// function editElementFunc(element) {
//     editElement = element.parentNode;
//     addBtn.innerHTML = 'Update';
//     inputForm.value = editElement.firstChild.nodeValue;
//     addBtn.onclick = updateList;
// }

// function updateList() {
//     editElement.firstChild.nodeValue = inputForm.value;
//     inputForm.value = '';
//     addBtn.innerHTML = 'Add in List';
//     addBtn.onclick = addInList;
//     editElement = undefined;
// }







































var img = document.getElementById('cover-story');
var h1 = document.getElementById('story-title');
var p = document.getElementById('story');
var storyIndex = 0;
var btn = document.getElementsByTagName('button');

var stories = [
    { title: 'Hungry Dog', imgSrc: './images/story/hungrydog.jpg', story: '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, voluptates possimus ea, facilis commodi velit est quibusdam accusamus sapiente nisi, vero nihil id laudantium a? Repudiandae laudantium mollitia excepturi atque.' },
    { title: 'Khachwa Aur Khargosh', imgSrc: './images/story/khachwaandkhargosh.jpg', story: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, voluptates possimus ea, facilis commodi velit est quibusdam accusamus sapiente nisi, vero nihil id laudantium a? Repudiandae laudantium mollitia excepturi atque.' },
    { title: 'Lion and Mouse', imgSrc: './images/story/lionandmouse.jpg', story: '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, voluptates possimus ea, facilis commodi velit est quibusdam accusamus sapiente nisi, vero nihil id laudantium a? Repudiandae laudantium mollitia excepturi atque.' }
];

updateStory();
function updateStory() {
    img.src = stories[storyIndex].imgSrc;
    h1.innerHTML = stories[storyIndex].title;
    p.innerHTML = stories[storyIndex].story;
}


function updateNewStory(storyStatus) {
    storyStatus === 'next' ? storyIndex++ : storyIndex--;
    if (storyIndex > 2) {
        storyIndex = 0;
    }
    else if (storyIndex < 0) {
        storyIndex = 2;
    }
    updateStory();
}


function expandImage() {
    img.style.width = window.innerWidth + "px";
    img.style.height = window.innerHeight + "px";
    h1.innerHTML = '';
    p.innerHTML = '';
    for (var i = 0; i < btn.length; i++) {
        btn[i].style.display = 'none';
    }
    img.onclick = shrink;
}

function shrink() {
    img.style.width = 100 + "%";
    img.style.height = 400 + "px";
    h1.innerHTML = stories[storyIndex].title;
    p.innerHTML = stories[storyIndex].story;
    for (var i = 0; i < btn.length; i++) {
        btn[i].style.display = 'inline';
    }
    img.onclick = expandImage;
}