var imgs = document.getElementsByClassName("back-card");
var kingCardNumber, queenNum;
var result = document.getElementById('result');

function userPick(cardNumber) {
    kingCardNumber = decideKingNumber();
    queenNum = decideQueen();
    flipCards(kingCardNumber, queenNum);
    checkResult(cardNumber, kingCardNumber);
}

function decideKingNumber() {
    var kingNum = Math.ceil(Math.random() * 3);
    return kingNum;
}

function decideQueen() {
    var queenNum = Math.ceil(Math.random() * 2);
    return queenNum;
}

function flipCards(kingCardNumber, queenNum) {
    imgs[kingCardNumber - 1].src = './images/king.jpg';
    var otherCards = [...imgs];
    otherCards.splice(kingCardNumber - 1, 1);

    for (var i = 0; i < otherCards.length; i++) {
        if (i + 1 === queenNum) {
            otherCards[i].src = "./images/queen.png";
        }
        else {
            otherCards[i].src = "./images/jack.png";
        }
    }
}



function checkResult(userPick, kingCardNumber) {
    if (userPick == kingCardNumber) {
        console.log('you pick king');
    }
    else {
        console.log('you pick wrong card');
    }

    if (userPick === kingCardNumber) {
        result.src = './images/king.jpg';
    }
    else if (
        (kingCardNumber > queenNum && queenNum === userPick) ||
        (kingCardNumber <= queenNum && queenNum + 1 === userPick)
    ) {
        result.src = './images/queen.png';
    }
    else {
        result.src = './images/jack.png';
    }
}