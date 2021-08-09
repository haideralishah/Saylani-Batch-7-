let storage = firebase.storage();
let auth = firebase.auth();
let db = firebase.firestore();



let userNameEl = document.getElementById('user-name');
let emailEl = document.getElementById('email');
let passwordEl = document.getElementById('psw');
let passwordRepeatEl = document.getElementById('psw-repeat');
let userRoleEl = document.getElementsByName('user-role');
let userImageEl = document.getElementById('upload-image');
let avatarCustomEl = document.getElementById('avatar-custom');

function imageSelected() {
    let image = userImageEl.files[0];
    avatarCustomEl.src = `./images/${image.name}`;
}


async function regiserUser() {

    let userCreated = await auth.createUserWithEmailAndPassword(emailEl.value, passwordEl.value);
    let UID = userCreated.user.uid;
    let imageURL = await uploadImageToStorage(UID);

    let user = {
        userName: userNameEl.value,
        email: emailEl.value,
        userImage: imageURL,
        userRole: giveCheckedRadio(),
        uid: UID
    }

    await db.collection('users').doc(UID).set(user);

}

function giveCheckedRadio() {
    let checkedProp;
    for (var i = 0; i < userRoleEl.length; i++) {
        if (userRoleEl[i].checked) {
            checkedProp = userRoleEl[i].value;
        }
    }
    return checkedProp;
}

function uploadImageToStorage(UID) {
    return new Promise(async (resolve, reject) => {
        let image = userImageEl.files[0];
        let storageRef = storage.ref();
        let imageRef = storageRef.child(`avatar/${UID}/${image.name}`);
        await imageRef.put(image);
        let url = await imageRef.getDownloadURL();
        resolve(url);
    })
}

auth.onAuthStateChanged((user) => {
    let pageLocArr = window.location.href.split('/');
    let pageName = pageLocArr[pageLocArr.length - 1];
    let authenticatedPages = ['home.html', 'findwork.html', 'myjob.html'];

    if (user && authenticatedPages.indexOf(pageName) === -1) {
        window.location = './findwork.html';
    }
    else if (!user && pageName === 'home.html') {
        window.location = './index.html';
    }
});

async function signout() {
    await auth.signOut();
}



async function signinUser() {
    await auth.signInWithEmailAndPassword(emailEl.value, passwordEl.value);
}








