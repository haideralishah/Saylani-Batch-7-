var emailEl = document.getElementById('email');
var passwordEl = document.getElementById('password');
var usernameEl = document.getElementById('username');
let imageInputEl = document.getElementById('user-pic-input');
let storage = firebase.storage();

function register() {
    firebase.auth().createUserWithEmailAndPassword(emailEl.value, passwordEl.value)
        .then((userCredential) => {
            // Signed in 
            let file = imageInputEl.files[0];
            let userPicRefrence = storage.ref().child('images/' + file.name);
            userPicRefrence.put(file)
                .then(() => {
                    userPicRefrence.getDownloadURL()
                        .then((url) => {
                            var user = userCredential.user;
                            console.log(user, userCredential);
                            var dataToSave = {
                                email: user.email,
                                userName: usernameEl.value,
                                UID: user.uid,
                                userPic: url,
                                userRole: 'donor'
                            }

                            saveUserInFirestore(dataToSave);
                        })
                })






            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error(error);
        });
}


function login() {
    firebase.auth().signInWithEmailAndPassword(emailEl.value, passwordEl.value)
        .then((userCredential) => {
            console.log(userCredential);
            window.location = "./home.html";
            // saveUserInFirestore();
        })
        .catch((error) => {
            console.error(error);
        })

}


// function whoIsUser() {
//     setTimeout(() => {
//         const user = firebase.auth().currentUser;
//         console.log(user, 'inside who is user');
//     }, 3000)
// }

firebase.auth().onAuthStateChanged((user) => {
    console.log(user, '*********************');
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User

        fetchUsers();
        // ...
    } else {
        // User is signed out
        // ...

    }
});



function signout() {
    firebase.auth().signOut()
        .then(() => {
            window.location = './index.html';
        })

}




function sendPasswordResetEmail() {
    var emailAddress = emailEl.value;
    firebase.auth().sendPasswordResetEmail(emailAddress)
        .then(() => {
            console.log('email sent');
            // Password reset email sent!
            // ..
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error(error);
        });
}













// /*********Firestore********** */
let db = firebase.firestore();

function saveUserInFirestore(userToSave) {
    // db.collection("users").add(userToSave)
    //     .then((docRef) => {
    //         console.log("Document written with ID: ", docRef.id);
    //     })


    db.collection('users').doc(userToSave.UID).set(userToSave);


    // db.collection("users").doc("SaylaniTeacherHaider")
    //     .update({
    //         teacher: false
    //     })
    //     .then(() => {
    //         console.log("Document successfully updated!");
    //     })
    //     .catch((error) => {
    //         // The document probably doesn't exist.
    //         console.error("Error updating document: ", error);
    //     });;



}



let userImage = document.getElementById('user-pic-img');
function fetchUsers() {
    var uid = firebase.auth().currentUser.uid;


    var docRef = db.collection("users").doc(uid);
    docRef.get()
        .then((doc) => {
            if (doc.exists) {
                let user = doc.data();
                console.log("Document data:", doc.data(), doc.id, user);
                userImage.src = user.userPic;
                userImage.className = 'user-pic-img';

            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        })
        .catch((error) => {
            console.log("Error getting document:", error);
        });




    // var docRef = db.collection("users");
    // docRef.get()
    //     .then((usersSnapshot) => {
    //         usersSnapshot.forEach((userDoc) => {
    //             console.log(userDoc.data(), '*************', userDoc.id);
    //         });

    //     })
    //     .catch((error) => {
    //         console.log("Error getting document:", error);
    //     });














}











// let listItem = document.getElementById('list-item');
// let db = firebase.firestore();

// function addList() {
//     let listItemDetails = {
//         item: listItem.value,
//         timeStamp: new Date()
//     }

//     db.collection("taskList").add(listItemDetails)
//         .then((savedItem) => {
//             console.log(savedItem, 'savedItem');
//         });

// }












// let taskLists;
// function fetchAllLists() {
//     if (taskLists) taskLists();

//     taskLists = db.collection("taskList")
//         .onSnapshot((snapshot) => {
//             snapshot.docChanges().forEach((change) => {
//                 if (change.type === "added") {
//                     let tasksObj = change.doc.data();
//                     tasksObj.id = change.doc.id;
//                     showListInDOM(tasksObj)
//                 }
//                 if (change.type === "removed") {
//                     console.log("Removed list: ", change.doc.id);
//                     removeListFromDOM(change.doc.id);
//                 }
//                 if (change.type === "modified") {
//                     console.log("modified list: ", change.doc.id);
//                     let tasksObj = change.doc.data();
//                     tasksObj.id = change.doc.id;
//                     updateListFromDOM(tasksObj);
//                 }

//             });
//         });
// }



// let allTasksUl = document.getElementById('all-tasks');

// function showListInDOM(task) {
//     let li = document.createElement('li');
//     let taskText = document.createTextNode(task.item);
//     li.appendChild(taskText)
//     li.setAttribute('id', task.id)
//     let btn = document.createElement('button');
//     let btnText = document.createTextNode('delete');
//     btn.setAttribute('onClick', 'deleteListItem(this)');
//     btn.appendChild(btnText);


//     let btnEdit = document.createElement('button');
//     let btnTextEdit = document.createTextNode('Edit');
//     btnEdit.setAttribute('onClick', 'editListItem(this)');
//     btnEdit.appendChild(btnTextEdit);


//     li.appendChild(btn);
//     li.appendChild(btnEdit);

//     allTasksUl.appendChild(li);
// }


// function deleteListItem(btnElement) {
//     let docId = btnElement.parentNode.id;
//     db.collection("taskList").doc(docId).delete()
//     // .then(() => {
//     //     removeListFromDOM(docId);
//     // });
// }


// function removeListFromDOM(id) {
//     let targetToRemove = document.getElementById(id);
//     allTasksUl.removeChild(targetToRemove);
// }


// let addBtn = document.getElementById('add-btn');
// let editDocId;
// function editListItem(editBtnElement) {
//     // console.log(editBtnElement.parentNode.id);
//     editDocId = editBtnElement.parentNode.id;
//     let editedText = editBtnElement.parentNode.firstChild.nodeValue;
//     listItem.value = editedText;
//     addBtn.innerHTML = 'Update';
//     addBtn.setAttribute('onClick', 'updateListItem(this)');

// }

// function updateListItem(addBtnElement) {
//     console.log(addBtnElement, listItem.value);
//     db.collection('taskList').doc(editDocId).update({ item: listItem.value });

//     listItem.value = "";
//     addBtn.innerHTML = 'Add';
//     addBtn.setAttribute('onClick', 'addList()');
//     editDocId = undefined;

// }

// function updateListFromDOM(modifiedEl) {
//     let modifiedDOM = document.getElementById(modifiedEl.id);
//     modifiedDOM.firstChild.nodeValue = modifiedEl.item;
// }




















// let storage = firebase.storage();
// let fileEl = document.getElementById('dp');
// let imgEl = document.getElementById('dp-pic');

// function uploadImage() {
//     let file = fileEl.files[0];
//     let displayPicRef = storage.ref().child('images/' + file.name);

//     displayPicRef.put(file)
//         .then(() => {
//             displayPicRef.getDownloadURL()
//                 .then((url) => {
//                     console.log(url);
//                     imgEl.src = url;
//                 })
//         });
// }













// var citiesRef = db.collection("cities");

// citiesRef.doc("SF").set({
//     name: "San Francisco",
//     state: "CA",
//     country: "USA",
//     capital: false,
//     population: 860000,
//     regions: ["west_coast", "norcal"]
// });
// citiesRef.doc("LA").set({
//     name: "Los Angeles",
//     state: "CA",
//     country: "USA",
//     capital: false,
//     population: 3900000,
//     regions: ["west_coast", "socal"]
// });
// citiesRef.doc("DC").set({
//     name: "Washington, D.C.",
//     state: null,
//     country: "USA",
//     capital: true,
//     population: 680000,
//     regions: ["east_coast"]
// });
// citiesRef.doc("TOK").set({
//     name: "Tokyo",
//     state: null,
//     country: "Japan",
//     capital: true,
//     population: 9000000,
//     regions: ["kanto", "honshu"]
// });
// citiesRef.doc("BJ").set({
//     name: "Beijing",
//     state: null,
//     country: "China",
//     capital: true,
//     population: 21500000,
//     regions: ["jingjinji", "hebei"]
// });
















































// let storage = firebase.storage();
// let fileEl = document.getElementById('user-pic-input');
// let imgEl = document.getElementById('user-pic-img');


// function selectImage() {
//     let file = fileEl.files[0];
//     console.log(file);
// }




// function uploadImage() {
//     let file = fileEl.files[0];
//     let displayPicRef = storage.ref().child('images/' + file.name);

//     displayPicRef.put(file)
//         .then(() => {
//             displayPicRef.getDownloadURL()
//                 .then((url) => {
//                     console.log(url);
//                     imgEl.src = url;
//                 })
//         });
// }


























let lastVisible = 0;

var docRef = db.collection("users")
    .startAfter(lastVisible)
    .limit(10);

docRef.get()
    .then((usersSnapshot) => {
        usersSnapshot.forEach((userDoc) => {
            console.log(userDoc.data(), '*************', userDoc.id);
            lastVisible = lastVisible + 10;
        });

    })
    .catch((error) => {
        console.log("Error getting document:", error);
    });


window.location = "./home.html/dafjdaslfjd;asfj"