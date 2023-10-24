
//variável em javascript normal

const varJs1 = 1;
const varJs2 = true;
const varJs3 = "teste";
console.log(varJs1 + ". " + varJs2 + " - "+ varJs3);

//variável em typescript (string, boolean, number...)

let varTs1: number = 1;
const varTs2: boolean = true;
const varTs3: string = "teste";
const varTs4: number[] = [1, 2, 3];

console.log(varTs1 + ". " + varTs2 + " - "+ varTs3);
console.log(varTs3.toUpperCase());
console.log(typeof varTs3);
console.log(varTs4 + " - " + varTs4.length);

varTs4.push(4, 5, 6);

console.log(varTs4);

let myTuple: [number, string, boolean];
myTuple = [1, "teste", false];

console.log(myTuple);

const myObjLiteral: {cod: number; name: string; active: boolean} = {
    cod: 1, 
    name: "Paulo", 
    active: true
};
myObjLiteral.active = false;

console.log(myObjLiteral);

let myAny: any;
myAny = 1;
myAny = "teste";
myAny = true;
myAny = [];

let myUnionType: string | number;
myUnionType = "teste";
myUnionType = 3;

//type alias
type myAliasType = string | number;
let z1: myAliasType = 3; 
let z2: myAliasType = "teste";

//enum
enum Size {
    P = "Pequeno", 
    M = "Medio", 
    G = "Grande"
}

const camisa = {
    name: "Gola V", 
    tamanho: Size.M
}

console.log(camisa);

//literal types 
let autenticado: "true" | null;

autenticado = "true";
console.log(autenticado);
autenticado = null;
console.log(null);

//Interfaces
interface MathParams {
    num1: number; 
    num2: number;
}; 

function sumTwoNumbers(nums: MathParams) {
    return nums.num1 + nums.num2;
};
console.log(sumTwoNumbers({ num1: 1, num2: 2 }));

function multipleTwoNumbers(nums: MathParams) {
    return nums.num1 * nums.num2;
};
console.log(multipleTwoNumbers({ num1: 1, num2: 2 }));

function newMathForm(nums: MathParams) {
    return console.log(multipleTwoNumbers(nums) / sumTwoNumbers(nums));
}; 

newMathForm({ num1: 2, num2: 2 });

const exampleParamInterface: MathParams = {
    num1: 2, 
    num2: 10
};

newMathForm(exampleParamInterface);

//narrowing -> checagem de tipos
function narrowExample(info: number | boolean) {
    if (typeof info === "number"){
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número válido");
}

narrowExample(1);
narrowExample(true);

//generics
function showAndCountArrayItens<T>(arr: T[]) {
    if (arr.length > 0){
        console.log(arr.length);

        arr.forEach(item => {
           console.log(`Item: ${item}`); 
        });
    }
    else
        console.log("Array inválido ou vazio");
}

const ar1 = [true, 2, "oi" ];
const ar2 = [1, 2, 3]; 
const ar3 = ["Um", "Dois", "Três"];

showAndCountArrayItens(ar1);
showAndCountArrayItens(ar2);
showAndCountArrayItens(ar3);

class User {
    userId
    name
    active

    constructor(userId:number, name:string, active:boolean) {
        this.userId = userId
        this.name = name
        this.active = active
    }

    showUserName(){
        console.log(`O nome desse usuário é ${this.name}`);
    }
}

const zeca = new User(1, "Zeca", true);
console.log(zeca);
zeca.showUserName();

interface IVehicle{
    brand: string;
    showBrand(): void;
}

//classe com uso de interfaces
class Car implements IVehicle {
    brand;
    wheels;

    constructor(brand: string, wheels: number) {
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand(): void {
        console.log(`Brand: ${this.brand}`);
    }

    showWheels(): void {
        console.log(`Wheels: ${this.wheels}`);
    }
}

const car1 = new Car("VW", 10);
car1.showBrand();
car1.showWheels();

//herança
class SuperCar extends Car {
    enginee;

    constructor(brand: string, wheels: number, enginee: number) {
        super(brand, wheels);
        this.enginee = enginee;
    }
}

const car2 = new SuperCar("Fiat", 10, 1000);
car2.showBrand();
car2.showWheels();
console.log(`Enginee: ${car2.enginee}`);

//decorators
function BaseParameters() {
    return function<T extends {new (...args: any[]): {}}>(constructor: T) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        };
    };
}

@BaseParameters()
class Person {
    name;

    constructor(name: string) {
        this.name = name;
    }
}

const person = new Person("Paulo");
console.log(person);