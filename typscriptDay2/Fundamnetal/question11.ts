// Question 13: (Topic: Union Types)
// Create a TypeScript function that takes a parameter which can be either a number or a string. Return a new value that is twice the number if the parameter is a number, and append "Hello, " before the string if it's a string.




function checkType(value:number | string){
     if(typeof value == 'number'){
        return value*2;
     }else{
        return 'Hello'+value;
     }
}



console.log(checkType(1))
console.log(checkType('Sumat'))