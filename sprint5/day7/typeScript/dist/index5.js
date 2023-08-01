"use strict";
/*
Literal Types
Create variables with literal types representing specific values. Use these literals in functions to perform specific actions based on the input value. */
var names = 'sumat';
let capName = helpMeTofind(names);
console.log(capName);
capName = helpMeTofind('21');
console.log(capName);
function helpMeTofind(input) {
    return input.toUpperCase();
}
