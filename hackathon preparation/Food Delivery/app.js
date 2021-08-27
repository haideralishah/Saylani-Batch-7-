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
let selectCountryPlaceholder = document.getElementById('select-country-placeholder');
let phone = document.getElementById('phone');
let countrySelected;
let citySelected;
let cityNames = document.getElementById('city-names');
let pakCities = ['Karachi', 'Peshawar', 'Lahore', 'Quetta', 'Islamabad', 'Gilgit Baltistan'];
let indCities = ['Dehli', 'Mumbai', 'Kolkatta', 'Kerela'];
let afghanCities = ['Kabul', 'Qandhar'];

function selectCountry(el) {
    countrySelected = el.children[0].innerHTML;
    selectCountryPlaceholder.innerHTML = countrySelected;
    if (countrySelected === 'Pakistan') {
        listCities(pakCities);
    }
    else if (countrySelected === 'India') {
        listCities(indCities);
    }
    else if (countrySelected === 'Afghanistan') {
        listCities(afghanCities);
    }
}
function selectCity(el) {
    citySelected = el.children[0].innerHTML;
}

function listCities(cities) {
    //cityNames
    cityNames.innerHTML = '';
    for (let i = 0; i < cities.length; i++) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.setAttribute('href', 'JavaScript:void(0)');
        let cityText = document.createTextNode(cities[i]);
        a.appendChild(cityText);
        li.appendChild(a);
        li.setAttribute('onclick', 'selectCity(this)');
        cityNames.appendChild(li);
    }
}


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
        country: countrySelected,
        city: citySelected,
        phone: phone.value,
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
    let authenticatedPages = ['home.html', 'restaurant-home.html', 'myjob.html'];


    if (user && authenticatedPages.indexOf(pageName) === -1) {
        window.location = './restaurant-home.html';
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










let dishName = document.getElementById("dish-name");
let dishPrice = document.getElementById('dish-price');
let deliveryType;
let category;

function setDishProp(propName, el) {
    if (propName == 'category') {
        category = el.children[0].innerHTML;
    }
    else {
        deliveryType = el.children[0].innerHTML;
    }
}




async function addDish() {
    let imageURL = await uploadImageToStorage(auth.currentUser.uid);

    let dish = {
        itemName: dishName.value,
        price: dishPrice.value,
        deliveryType,
        category,
        uid: auth.currentUser.uid,
        dishImage: imageURL

    }
    await db.collection('foodmenus').add(dish);

}


