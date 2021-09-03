export let userName = 'Haider';
export let fees = 3000;
export let teacher = true;

export let fruits = ['apple', 'banana', 'oranges'];

export let car = {
    name: 'Cultus',
    model: '2005'
}

export default function genRandomNum(range) {
    return Math.ceil(Math.random() * range)
}















// import Haider, { fruits, userName } from './Custom-Module';
// import * as allModules from './Custom-Module';
// import {fruits as moreFruits} from './Another-Module';
// import * as allModules from './Custom-Module';


// let ranNum = Haider(5);
// console.log(fruits, ranNum, userName);
// console.log(allModules)