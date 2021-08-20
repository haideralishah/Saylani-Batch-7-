


// function myPromise() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject('User created.');
//         }, 3000)
//     })
// }


// function myPromise1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('User created 1 ');
//         }, 3000)
//     })
// }

// function myPromise2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('User created 2 ');
//         }, 3000)
//     })
// }

// async function signup() {
//     try {
//         let msg = await myPromise();
//         console.log(msg);
//     } catch (err) {
//         console.error(err)
//     }

//     let msg1 = await myPromise1();
//     console.log(msg1);

//     let msg2 = await myPromise2();
//     console.log(msg2);

// }


// function signup() {
//     myPromise()
//         .then((msg) => {
//             console.log(msg);
//             myPromise1()
//                 .then((msg1) => {
//                     console.log(msg1);
//                     myPromise2()
//                         .then((msg2) => {
//                             console.log(msg2);
//                         });
//                 });
//         })



// }



















let countryCode = document.getElementById('country');


function signup() {
    let countryCodeOptions = countryCode.children;
    for (let i = 0; i < countryCodeOptions.length; i++) {
        if (countryCodeOptions[i].selected) {
            console.log(countryCodeOptions[i].innerHTML);

        }
    }
}

