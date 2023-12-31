//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    // console.log("Hello world");
}

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// Stack=>(Primitive Data Types) && Heap =>(Non-Primitive Data Types)

// example of stack
let myName="Prakash"

let anotherName=myName

anotherName="Ravi"

// console.log(myName);
// console.log(anotherName);




//In case of Heap 

let officeBoy={
    name:"Raj",
    number:98765
}

let anotherOffice= officeBoy;

anotherOffice.number=12345

console.log(officeBoy);
console.log(anotherOffice);
