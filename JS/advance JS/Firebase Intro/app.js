

var emailEl = document.getElementById('email');
var passwordEl = document.getElementById('password');
var usernameEl = document.getElementById('username');
function register() {
    firebase.auth().createUserWithEmailAndPassword(emailEl.value, passwordEl.value)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            console.log(user, userCredential);
            var dataToSave = {
                email: user.email,
                userName: usernameEl.value,
                UID: user.uid
            }

            saveUserInFirestore(dataToSave);

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
        var uid = user.uid;
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













/*********Firestore********** */
let db = firebase.firestore();

function saveUserInFirestore(userToSave) {
    // db.collection("users").add(userToSave)
    //     .then((docRef) => {
    //         console.log("Document written with ID: ", docRef.id);
    //     })


    // db.collection('users').doc(userToSave.UID).set(userToSave);


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




function fetchUsers() {
    db.collection("users")
        .get()
        .then((multipledocs) => {
            console.log(multipledocs, '******************');
            
            multipledocs.forEach((user) => {
                console.log(user.data(), 'inside for each loop', user.id);
            });

        }).catch((error) => {
            console.log("Error getting document:", error);
        });

}