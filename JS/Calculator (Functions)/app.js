var screen = document.getElementById('screen-txt');
var num1 = Number(screen.innerHTML), num2 = 0, operator, result;

function btnInput(num) {
    if (operator) {
        if (num2 != 0) {
            num2 = num2.toString() + num.toString();
        }
        else {
            num2 = num;
        }
        printOnScreen(num2);
    }
    else {
        if (num1 != 0) {
            num1 = num1.toString() + num.toString();
        }
        else {
            num1 = num;
        }
        printOnScreen(num1);
    }
}

function printOnScreen(numToPrint) {
    screen.innerHTML = numToPrint;
}


function assignOperator(operatorSign) {
    operator = operatorSign;
}

function evaluateFunc() {
    if (operator === '+') {
        result = Number(num1) + Number(num2);
    }
    else if (operator === '-') {
        result = Number(num1) - Number(num2);
    }
    else if (operator === '*') {
        result = Number(num1) * Number(num2);

    }
    else if (operator === '/') {
        result = Number(num1) / Number(num2);
    }
    else {
        result = 'Something went wrong.';
    }

    printOnScreen(result);
}


function cancelBtn() {
    num1 = 0, num2 = 0, operator = undefined, result = undefined;
    printOnScreen(num1);
}