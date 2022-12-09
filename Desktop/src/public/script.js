// const character ='mario';
// console.log(character);
// const inputs =document.querySelectorAll('input');
// console.log(inputs)
// let character ='neetu';
// let age= 30;
// let isBlackBelt = false ;
// const circ = (diameter:number) => {
//     return diameter * Math.PI
// }
// console.log(circ(8))
//arrays
let names = ['neetu', 'abhishek', 'laxmi'];
names.push('gunnu');
// names.push(3);
// names[0]=3;
let numbers = [10, 20, 30, 12];
numbers.push(23);
// numbers[1] = 'neetu'
let mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('neetu');
mixed.push(10);
mixed[0] = 3;
//objects
let ninja = {
    name: 'neetu',
    belt: 'black',
    age: 20,
};
ninja.age = 30;
ninja.name = 'laxmi';
// ninja.age = '79'
// ninja.skills = ['fighting','sneaking']
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 33,
};
//explicit types
let character;
let age;
let isLoggedIn;
// age ='luigi'  //type error
age = 50;
// isLoggedIn = 34;
isLoggedIn = true;
//arrays
let arr = [];
arr.push('neetu');
//union types
let mixedArr = [];
mixedArr.push('hello');
mixedArr.push(23);
mixedArr.push(false);
console.log(mixedArr);
let uid;
uid = '123';
uid = 123;
//objects
let ninjaOne;
ninjaOne = { name: 'neetu', age: 21 };
let ninjaTwo;
ninjaTwo = { name: 'neetu', age: 23, beltColor: 'black' };
console.log(ninjaTwo);
//Dynamics (any) types
let str = 23;
str = true;
console.log(str);
str = 'hello neeetu';
console.log(str);
str = { name: 'laxmi' };
console.log(str);
let mixedOne = [];
mixedOne.push(4);
mixedOne.push('neetu');
mixedOne.push(false);
console.log(mixedOne);
let ninjaArr;
ninjaArr = { name: 'neetu', age: 21 };
console.log(ninjaArr);
ninjaArr = { name: 21, age: 'net' };
console.log(ninjaArr);
//function 
//   let greet = () => {
//     console.log('good morning neetu !')
//   }
//   greet()
let greet;
// greet ='hwehr'
greet = () => {
    console.log('hello,again');
};
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add(2, 3, "neetu");
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 7);
console.log(result);
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greetFun = (user) => {
    console.log(`${user.name} says hello`);
};
const greetArr = (user) => {
    console.log(`${user.name} says hello`);
};
const greetFunAliase = (user) => {
    console.log(`${user.name} says hello`);
};
//function signature
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'adds') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
let res = calc(2, 3, 'adds');
console.log(res);
//example 2
let logDetail;
logDetail = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
import { Invoice } from './classes/Invoice.js';
let docOne;
let docTwo;
const invOne = new Invoice('neetu', 'worl on the maria website', 230);
const invTwo = new Invoice('laxmi', 'work on the laxmi website', 231);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
let myObj = { label: "Size 10 Object" };
printLabel(myObj);
const neetu = {
    age: 21,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        return amount;
    }
};
const me = {
    name: 'neetu',
    age: 21,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('i apent', amount);
        return amount;
    }
};
console.log(me);
const greetPerson = (person) => {
    console.log('hello', person.name);
};
greetPerson(me);
//GENERICS
const aadUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docONE = aadUID({ name: 'nertu', age: 21 });
console.log(docONE);
let docThree = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'neetu' }
};
console.log(docThree);
let docFour = {
    uid: 2,
    resourceName: 'shopping list',
    data: ['milk', 'bread']
};
console.log(docFour);
//enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["Book"] = 0] = "Book";
    ResourceType[ResourceType["Author"] = 1] = "Author";
    ResourceType[ResourceType["film"] = 2] = "film";
    ResourceType[ResourceType["director"] = 3] = "director";
    ResourceType[ResourceType["person"] = 4] = "person";
})(ResourceType || (ResourceType = {}));
const docFive = {
    uid: 1,
    resourceType: ResourceType.Book,
    data: { title: 'name of the wind' }
};
const docSix = {
    uid: 10,
    resourceType: ResourceType.person,
    data: { name: 'neetu' }
};
console.log(docFive, docSix);
//tuples  types are fixed in array
let arrStr = ['neetu', 21, true];
arrStr[0] = false;
arrStr[1] = 'laxmi';
arrStr = [30, false, 'gunu'];
let tup = ['riya', 23, false];
// tup[0]= 23
tup[0] = 'yoshi';
//narrowing
const isError = (value) => value instanceof Error;
console.log(isError('hllo'));
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
const todo1 = {
    title: "organize desk",
    description: "clear clutter",
};
const todo2 = updateTodo(todo1, {
    description: "throw out trash",
});
console.log(todo1, todo2);
const obj = { a: 5 };
const obj2 = { a: 5, b: 'neetu' };
console.log(obj2);
const cats = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};
console.log(cats);
