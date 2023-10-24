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
let myUnionType;
myUnionType = "teste";
myUnionType = 3;
let z1 = 3;
let z2 = "teste";
//enum
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "Medio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Gola V",
    tamanho: Size.M
};
console.log(camisa);
//literal types 
let autenticado;
autenticado = "true";
console.log(autenticado);
autenticado = null;
console.log(null);
;
function sumTwoNumbers(nums) {
    return nums.num1 + nums.num2;
}
;
console.log(sumTwoNumbers({ num1: 1, num2: 2 }));
function multipleTwoNumbers(nums) {
    return nums.num1 * nums.num2;
}
;
console.log(multipleTwoNumbers({ num1: 1, num2: 2 }));
function newMathForm(nums) {
    return console.log(multipleTwoNumbers(nums) / sumTwoNumbers(nums));
}
;
newMathForm({ num1: 2, num2: 2 });
const exampleParamInterface = {
    num1: 2,
    num2: 10
};
newMathForm(exampleParamInterface);
//narrowing -> checagem de tipos
function narrowExample(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número válido");
}
narrowExample(1);
narrowExample(true);
//generics
function showAndCountArrayItens(arr) {
    if (arr.length > 0) {
        console.log(arr.length);
        arr.forEach(item => {
            console.log(`Item: ${item}`);
        });
    }
    else
        console.log("Array inválido ou vazio");
}
const ar1 = [true, 2, "oi"];
const ar2 = [1, 2, 3];
const ar3 = ["Um", "Dois", "Três"];
showAndCountArrayItens(ar1);
showAndCountArrayItens(ar2);
showAndCountArrayItens(ar3);
