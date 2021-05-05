var counter = document.getElementById('counter-value');

var changeCounterForm = document.getElementById('counter-change-value');
var changeCounterValue = 1;

changeCounterForm.value = changeCounterValue;

function addCounter() {
    counter.innerHTML = Number(counter.innerHTML) + changeCounterValue;
}

function minusCounter() {
    counter.innerHTML = Number(counter.innerHTML) - changeCounterValue;
}

function changeCounterVariable() {
    changeCounterValue = Number(changeCounterForm.value);
}

