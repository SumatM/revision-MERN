// Question 5:
// Let's delve into generics. Create a TypeScript function called reverseArray that takes an array of any type and returns a new array with the elements in reversed order. The function should use TypeScript's generics to handle different types of arrays.




function reverseArray<Type>(array: Type[]): Type[] {
    let newArray: Type[] = []; 
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}


const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray);