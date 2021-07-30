// var emailEl = document.getElementById('email');
// var passwordEl = document.getElementById('password');
// var usernameEl = document.getElementById('username');

// function register() {
//     firebase.auth().createUserWithEmailAndPassword(emailEl.value, passwordEl.value)
//         .then((userCredential) => {
//             // Signed in 
//             var user = userCredential.user;
//             console.log(user, userCredential);
//             var dataToSave = {
//                 email: user.email,
//                 userName: usernameEl.value,
//                 UID: user.uid
//             }

//             saveUserInFirestore(dataToSave);

//             // ...
//         })
//         .catch((error) => {
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             console.error(error);
//         });
// }


// function login() {
//     firebase.auth().signInWithEmailAndPassword(emailEl.value, passwordEl.value)
//         .then((userCredential) => {
//             console.log(userCredential);
//             window.location = "./home.html";
//             // saveUserInFirestore();
//         })
//         .catch((error) => {
//             console.error(error);
//         })

// }


// // function whoIsUser() {
// //     setTimeout(() => {
// //         const user = firebase.auth().currentUser;
// //         console.log(user, 'inside who is user');
// //     }, 3000)
// // }

// firebase.auth().onAuthStateChanged((user) => {
//     console.log(user, '*********************');
//     if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/firebase.User

//         fetchUsers();
//         // ...
//     } else {
//         // User is signed out
//         // ...

//     }
// });



// function signout() {
//     firebase.auth().signOut()
//         .then(() => {
//             window.location = './index.html';
//         })

// }




// function sendPasswordResetEmail() {
//     var emailAddress = emailEl.value;
//     firebase.auth().sendPasswordResetEmail(emailAddress)
//         .then(() => {
//             console.log('email sent');
//             // Password reset email sent!
//             // ..
//         })
//         .catch((error) => {
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             console.error(error);
//         });
// }













// /*********Firestore********** */
// let db = firebase.firestore();

// function saveUserInFirestore(userToSave) {
//     // db.collection("users").add(userToSave)
//     //     .then((docRef) => {
//     //         console.log("Document written with ID: ", docRef.id);
//     //     })


//     db.collection('users').doc(userToSave.UID).set(userToSave);


//     // db.collection("users").doc("SaylaniTeacherHaider")
//     //     .update({
//     //         teacher: false
//     //     })
//     //     .then(() => {
//     //         console.log("Document successfully updated!");
//     //     })
//     //     .catch((error) => {
//     //         // The document probably doesn't exist.
//     //         console.error("Error updating document: ", error);
//     //     });;



// }




// function fetchUsers() {
//     // var uid = firebase.auth().currentUser.uid;


//     // var docRef = db.collection("users").doc(uid);
//     // docRef.get()
//     //     .then((doc) => {
//     //         if (doc.exists) {
//     //             console.log("Document data:", doc.data(), doc.id);
//     //         } else {
//     //             // doc.data() will be undefined in this case
//     //             console.log("No such document!");
//     //         }
//     //     })
//     //     .catch((error) => {
//     //         console.log("Error getting document:", error);
//     //     });




//     // var docRef = db.collection("users");
//     // docRef.get()
//     //     .then((usersSnapshot) => {
//     //         usersSnapshot.forEach((userDoc) => {
//     //             console.log(userDoc.data(), '*************', userDoc.id);
//     //         });

//     //     })
//     //     .catch((error) => {
//     //         console.log("Error getting document:", error);
//     //     });














// }











let listItem = document.getElementById('list-item');
let db = firebase.firestore();

function addList() {
    let listItemDetails = {
        item: listItem.value,
        timeStamp: new Date()
    }

    db.collection("taskList").add(listItemDetails)
        .then((savedItem) => {
            console.log(savedItem, 'savedItem');
        });

}













function fetchAllLists() {
    db.collection("taskList")
        .onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    let tasksObj = change.doc.data();
                    tasksObj.id = change.doc.id;
                    showListInDOM(tasksObj)
                }
                if (change.type === "removed") {
                    console.log("Removed city: ", change.doc.id);
                    removeListFromDOM(change.doc.id);
                }


            });
        });
}

let allTasksUl = document.getElementById('all-tasks');

function showListInDOM(task) {
    let li = document.createElement('li');
    let taskText = document.createTextNode(task.item);
    li.appendChild(taskText)
    li.setAttribute('id', task.id)
    let btn = document.createElement('button');
    let btnText = document.createTextNode('delete');
    btn.setAttribute('onClick', 'deleteListItem(this)');
    btn.appendChild(btnText);
    li.appendChild(btn);
    allTasksUl.appendChild(li);
}


function deleteListItem(btnElement) {
    let docId = btnElement.parentNode.id;
    db.collection("taskList").doc(docId).delete()
        // .then(() => {
        //     removeListFromDOM(docId);
        // });
}


function removeListFromDOM(id) {
    let targetToRemove = document.getElementById(id);
    allTasksUl.removeChild(targetToRemove);
}




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