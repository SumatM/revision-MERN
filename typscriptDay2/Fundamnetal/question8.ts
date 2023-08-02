// Question 8:
// Create a TypeScript function called mergeArrays that takes two arrays of the same type and merges them into a single array. The function should return a new array that contains all the elements from both input arrays.


function mergeArrays <T> (arr1 :T[] ,arr2 : T[]) : T[] {

let NewArray : T[] = [];

for (let i=0; i<arr1.length; i++){
    NewArray.push(arr1[i])
}

for (let i=0; i<arr2.length; i++){
    NewArray.push(arr2[i])
}
return NewArray;

}