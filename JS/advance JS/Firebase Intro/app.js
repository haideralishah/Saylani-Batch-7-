

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
        })
        .catch((error) => {
            console.error(error);
        })

}


function whoIsUser() {
    setTimeout(() => {
        const user = firebase.auth().currentUser;
        console.log(user, 'inside who is user');
    }, 3000)
}

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

function saveUserInFirestore(userToSave) {
    firebase.firestore().collection("users").add(userToSave)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
}
