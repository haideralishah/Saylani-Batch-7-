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

auth.onAuthStateChanged(async (user) => {
    let pageLocArr = window.location.href.split('/');
    let pageName = pageLocArr[pageLocArr.length - 1];
    let authenticatedPages = ['home.html', 'restaurant-home.html', 'myjob.html'];
    let customerPages = ['customer-home.html', 'food-menus.html'];
    let restaurantPages = ['restaurant-home.html', 'myjob.html'];

    let unauthPages = ['index.html', 'signin.html'];
    console.log(user, '*********');

    // if (user && authenticatedPages.indexOf(pageName) === -1) {
    //     // window.location = './restaurant-home.html';
    // }
    // else 
    if (user && authenticatedPages.indexOf(pageName) === -1) {
        let authenticatedUser = await db.collection('users').doc(user.uid).get();
        authenticatedUser = authenticatedUser.data();
        let authenticatedUserString = JSON.stringify(authenticatedUser);
        localStorage.setItem('currentUser', authenticatedUserString);

        if (authenticatedUser.userRole === 'customer' && customerPages.indexOf(pageName) === -1) {
            window.location = './customer-home.html';
        }
        else if (authenticatedUser.userRole !== 'customer' && restaurantPages.indexOf(pageName) === -1) {
            window.location = './restaurant-home.html';
        }
    }
    else if (!user && unauthPages.indexOf(pageName) === -1) {
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


















/*Restaurant Work*/

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

/*Restaurant Work*/

















/*Customer Work*/

let restaurantDiv = document.getElementById('restaurants-list');
async function fetchRestaurants() {
    let allRestaurants = await db.collection('users').where('userRole', "==", 'restaurant').get();
    allRestaurants.forEach((doc) => {
        let restaurant = doc.data();
        restaurant.id = doc.id;
        let element = `<div id="${restaurant.id}" class="container container-img" onclick="selectRestaurant(this)">
                            <img src="${restaurant.userImage}" alt="Restaurant Cover" class="image">
                            <div class="overlay">${restaurant.userName}</div>
                        </div>`;
        restaurantDiv.innerHTML += element;

    });
}



function selectRestaurant(el) {
    console.log(el.id);
    localStorage.setItem('selectedRestaurant', el.id);
    window.location = './food-menus.html';
}


let foodMenusDiv = document.getElementById('food-menus');
async function fetchSelectedRestaurant() {
    let restId = localStorage.getItem('selectedRestaurant');
    let foodMenus = await db.collection('foodmenus').where('uid', '==', restId).get();
    foodMenus.forEach((doc) => {
        let menus = doc.data();
        menus.id = doc.id;
        let el = `<div id="${menus.id}" class="container container-img" onclick="selectMenus(this)">
                        <img src="${menus.dishImage}" alt="Restaurant Cover" class="image">
                        <div class="overlay">${menus.itemName} Price:${menus.price}</div>
                    </div>`;
        foodMenusDiv.innerHTML += el;

    })
}





function selectMenus(el) {
    let cart = localStorage.getItem('cart');
    let foodId = el.id;

    if (!cart) cart = [];
    else cart = JSON.parse(cart);
    let existingIndex;
    for (let i = 0; i < cart.length; i++) {
        if (foodId === cart[i].foodId) {
            existingIndex = i;
            break;
        }
    }
    console.log(cart, foodId, existingIndex)


    if (existingIndex === undefined) {
        let price = el.children[1].childNodes[0].nodeValue.split('Price:')[1]
        let item = {
            foodId: el.id,
            quantity: 1,
            price,
            totalPrice: this.quantity * price
        }
        cart.push(item);
    }
    else {
        let selectedItem = cart[existingIndex];
        selectedItem.quantity++;
        selectedItem.totalPrice = selectedItem.price * selectedItem.quantity;
        console.log(selectedItem);
    }






    localStorage.setItem('cart', JSON.stringify(cart));

}









/*Customer Work*/

