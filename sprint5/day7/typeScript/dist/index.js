"use strict";
//number
let myNumber = 12348739;
// string
let myName = "sumat";
// boolean
let isMarried = false;
// any
// we should avoid this any type
let masai = true;
//object
let myNormalday = {
    wakeup: "7:09 AM",
    sleep: "01:35 AM",
};
//array
let score = [1, 2, 3];
// void when nothing is returning
function greet() { }
// undefined;
let isYour = undefined;
//never
// function throwErrors(param?:number ):never {
//   if (!param) {
//     throw new Error("This is to check never DT");
//   }else{
//     throw new Error('good')
//   }
// }
function throwError() {
    // throw new Error("An error occurred.");
}
const sumat = { name: 'sumat', age: 24, class: 18 };
// enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let selectedColor = Color.Blue;
console.log(selectedColor);
// union types | 
let pet = 'cat';
let steetAnimals = 'dog';
let candidata = { name: 'sumat', age: 55, class: 'tenth', role: 'teacher' };
// tuples 
let mypet = [2, 'cat', 'dog'];
