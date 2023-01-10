var ip = document.querySelectorAll('input');
console.log(ip);
ip.forEach(function (i) {
    console.log(i);
});
var a = 10;
// a='vikas';
var cir = function (d) { return d * Math.PI; };
console.log(cir(1));
//arrays
var names = ["vikas", "sanjeev", 1];
names.push(2);
//objects 
var ninja = {
    name: 'vikas',
    age: 210
};
ninja.name = 'sanjeev';
ninja.age = 10;
// explicit types
var char;
var age;
var flag;
//arrays
var ninjas = [];
//union types
var mixed = [];
var uid;
//Dynamic Types
var b = 25;
b = "vikas";
var mixed1 = [];
mixed.push(5);
mixed.push('vikas');
var ninja1;
var greet;
greet = function () {
    console.log('greetings');
};
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(5, 5);
var minus = function (a, b) {
    return a + b;
};
var res = minus(10, 78);
var greet1 = function (user) {
    console.log("".concat(user, " says hello"));
};
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
