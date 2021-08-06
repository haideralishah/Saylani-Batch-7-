let userNameEl = document.getElementById('user-name');
let emailEl = document.getElementById('email');
let passwordEl = document.getElementById('psw');
let passwordRepeatEl = document.getElementById('psw-repeat');
let userRoleEl = document.getElementsByName('user-role');
let userImageEl = document.getElementById('upload-image');

function regiserUser() {
    console.log('hello world', userRoleEl);

    let user = {
        userName: userNameEl.value,
        email: emailEl.value,
        password: passwordEl.value,
        passwordRepeat: passwordRepeatEl.value,
        userImage: userImageEl.files[0],
        userRole: giveCheckedRadio()
    }
    console.log(user)

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