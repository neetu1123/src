"use strict";
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
var names = ['neetu', 'abhishek', 'laxmi'];
names.push('gunnu');
// names.push(3);
// names[0]=3;
var numbers = [10, 20, 30, 12];
numbers.push(23);
// numbers[1] = 'neetu'
var mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('neetu');
mixed.push(10);
mixed[0] = 3;
//objects
var ninja = {
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
var character;
var age;
var isLoggedIn;
// age ='luigi'  //type error
age = 50;
// isLoggedIn = 34;
isLoggedIn = true;
//arrays
var arr = [];
arr.push('neetu');
//union types
var mixedArr = [];
mixedArr.push('hello');
mixedArr.push(23);
mixedArr.push(false);
console.log(mixedArr);
var uid;
uid = '123';
uid = 123;
//objects
var ninjaOne;
ninjaOne = { name: 'neetu', age: 21 };
var ninjaTwo;
ninjaTwo = { name: 'neetu', age: 23, beltColor: 'black' };
console.log(ninjaTwo);
//Dynamics (any) types
var str = 23;
str = true;
console.log(str);
str = 'hello neeetu';
console.log(str);
str = { name: 'laxmi' };
console.log(str);
var mixedOne = [];
mixedOne.push(4);
mixedOne.push('neetu');
mixedOne.push(false);
console.log(mixedOne);
var ninjaArr;
ninjaArr = { name: 'neetu', age: 21 };
console.log(ninjaArr);
ninjaArr = { name: 21, age: 'net' };
console.log(ninjaArr);
//function 
//   let greet = () => {
//     console.log('good morning neetu !')
//   }
//   greet()
var greet;
// greet ='hwehr'
greet = function () {
    console.log('hello,again');
};
var add = function (a, b, c) {
    console.log(a + b);
    console.log(c);
};
add(2, 3, "neetu");
var minus = function (a, b) {
    return a - b;
};
var result = minus(10, 7);
console.log(result);
