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
let names = ['neetu','abhishek','laxmi'];
names.push('gunnu');
// names.push(3);
// names[0]=3;

let numbers =[10,20,30,12];
numbers.push(23);
// numbers[1] = 'neetu'

let mixed = ['ken',4,'chun-li',8,9];
mixed.push('neetu')
mixed.push(10)
mixed[0]=3

//objects
let ninja ={
    name : 'neetu',
    belt :'black',
    age:20,
}

ninja.age =30;
ninja.name='laxmi';
// ninja.age = '79'

// ninja.skills = ['fighting','sneaking']
ninja ={
    name:'yoshi',
    belt:'orange',
    age :33,
    // skills :[]
}

//explicit types
let character :string;
let age: number;
let isLoggedIn: boolean;

// age ='luigi'  //type error

age=50;

// isLoggedIn = 34;
isLoggedIn = true;
//arrays
let arr : string[] =[];
arr.push('neetu');

//union types
let mixedArr : (string|number|boolean)[]=[];
mixedArr.push('hello')
mixedArr.push(23)
mixedArr.push(false)
console.log(mixedArr)

let uid : string |number;
uid = '123';
uid = 123;
 //objects
 let ninjaOne : object;
 ninjaOne ={name:'neetu',age:21};

 let ninjaTwo :{
    name: string;
    age :number;
    beltColor : string
    
 }
 ninjaTwo ={name :'neetu',age :23, beltColor:'black'}
 console.log(ninjaTwo)

 //Dynamics (any) types

 let str:any =23
 str = true;
 console.log(str)
 str ='hello neeetu';
 console.log(str);
 str ={name:'laxmi'};
 console.log(str)

 let mixedOne : any[]=[];
 mixedOne.push(4);
 mixedOne.push('neetu');
 mixedOne.push(false);
 console.log(mixedOne);

 let ninjaArr : {name:any,age:any};

 ninjaArr ={name:'neetu',age:21};
 console.log(ninjaArr);
 ninjaArr= {name:21,age:'net'};
 console.log(ninjaArr)

 //function 
//   let greet = () => {
//     console.log('good morning neetu !')
//   }
//   greet()

let greet : Function;
// greet ='hwehr'

greet = () =>{
    console.log('hello,again');
}

const add = (a:number, b:number, c?:number|string) =>{
    console.log(a+b)
    console.log(c)
}
add(2,3,"neetu");

const minus =(a:number,b:number):number => {
    return a-b;
}
let result = minus(10,7)
console.log(result)

//type Aliases
type StringOrNum= string | number;
type objWithName ={ name: string , uid : StringOrNum}
const logDetails = (uid:string | number , item :string)  => {
    console.log(`${item} has a uid of ${uid}`)
}
const greetFun = (user : {name:string , uid:string | number}) =>{
    console.log(`${user.name} says hello`)
}
const greetArr = (user : {name:string , uid:string | number}) =>{
    console.log(`${user.name} says hello`)
}
const greetFunAliase = (user : objWithName ) =>{
    console.log(`${user.name} says hello`)
}

//function signature

let calc : (a:number, b:number,c:string) =>number;
calc =(numOne:number, numTwo:number, action :string) => {
    if(action === 'adds'){
        return numOne+numTwo;
    }
    else{
        return numOne - numTwo
    }
}
let res =calc(2,3,'adds')
console.log(res)
//example 2

let logDetail : (obj:{name:string , age:number})=>void;
type person ={name:string,age:number};

logDetail = (ninja :person)  => {
    console.log(`${ninja.name} is ${ninja.age} years old`)
}

import { Invoice } from  './classes/Invoice.js'
import {  Payment } from './classes/Payment.js';
import {  HasFormatter } from './interfaces/HasFormatter.js'

let docOne : HasFormatter;
let docTwo : HasFormatter;



const invOne = new Invoice('neetu','worl on the maria website',230);
const invTwo = new Invoice('laxmi', 'work on the laxmi website',231);

let invoices : Invoice[] =[]
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv => {
    console.log(inv.client,inv.amount,inv.format())
})
interface LabeledValue {
    label: string;
  }
   
  function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
  }
   
  let myObj = {  label: "Size 10 Object" };
  printLabel(myObj);

  interface IsPerson {
    name:string;
    age:number;
    speak(a:string):void;
    spend(a:number):number;
  }
const me :IsPerson={
    name:'neetu',
    age:21,
    speak(text:string):void{
        console.log(text)
    },
    spend(amount:number):number{
        console.log('i apent',amount);
        return amount
    }
};
console.log(me)

const greetPerson = (person:IsPerson) => {
    console.log('hello',person.name)
}
greetPerson(me)