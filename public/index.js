"use strict";
const ip = document.querySelectorAll('input');
console.log(ip);
ip.forEach(i => {
    console.log(i);
});
let a = 10;
// a='vikas';
const cir = (d) => { return d * Math.PI; };
console.log(cir(1));
//arrays
let names = ["vikas", "sanjeev", 1];
names.push(2);
//objects 
let ninja = {
    name: 'vikas',
    age: 210
};
ninja.name = 'sanjeev';
ninja.age = 10;
// explicit types
let char;
let age;
let flag;
//arrays
let ninjas = [];
//union types
let mixed = [];
let uid;
//Dynamic Types
let b = 25;
b = "vikas";
let mixed1 = [];
mixed.push(5);
mixed.push('vikas');
let ninja1;
let greet;
greet = () => {
    console.log('greetings');
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 5);
const minus = (a, b) => {
    return a + b;
};
let res = minus(10, 78);
const greet1 = (user) => {
    console.log(`${user} says hello`);
};
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
