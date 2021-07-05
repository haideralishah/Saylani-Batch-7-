

var emailEl = document.getElementById('email');
var passwordEl = document.getElementById('password');
function register() {
    firebase.auth().createUserWithEmailAndPassword(emailEl.value, passwordEl.value)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            console.log(user, userCredential)
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
        })
        .catch((error) => {
            console.error(error);
        })

}