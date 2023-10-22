"use strict";
//variável em javascript normal
const varJs1 = 1;
const varJs2 = true;
const varJs3 = "teste";
console.log(varJs1 + ". " + varJs2 + " - " + varJs3);
//variável em typescript (string, boolean, number...)
let varTs1 = 1;
const varTs2 = true;
const varTs3 = "teste";
const varTs4 = [1, 2, 3];
console.log(varTs1 + ". " + varTs2 + " - " + varTs3);
console.log(varTs3.toUpperCase());
console.log(typeof varTs3);
console.log(varTs4 + " - " + varTs4.length);
varTs4.push(4, 5, 6);
console.log(varTs4);
let myTuple;
myTuple = [1, "teste", false];
console.log(myTuple);
const myObjLiteral = {
    cod: 1,
    name: "Paulo",
    active: true
};
myObjLiteral.active = false;
console.log(myObjLiteral);
let myAny;
myAny = 1;
myAny = "teste";
myAny = true;
myAny = [];
