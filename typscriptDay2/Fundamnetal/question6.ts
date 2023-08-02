// Question 6:
// Create a TypeScript function called filterArray that takes an array of values and a callback function. The filterArray function should return a new array containing only the elements that satisfy the condition specified by the callback function.

// The callback function should take a value from the array as an argument and return a boolean indicating whether the value should be included in the filtered array.

// const filterArray  = (array:[] , CB:Function):boolean =>{

//     for (let i=0; i<array.length; i++){
//         if(CB(array[i])){
//             return true
//         }
//     }
//     return false;
// }

// const CallBack = (num:number,value:number) =>{
//     if(num===value){
//         return true;
//     }else {
//         return false
//     }
// }

// console.log(filterArray([1,2,3,4,5],CallBack))

const filterArray = <T>(array: T[], callback: (value: T) => boolean): T[] => {
  const filteredArray: T[] = [];

  for (const value of array) {
    if (callback(value)) {
      filteredArray.push(value);
    }
  }

  return filteredArray;
};

const callBack = (value: number): boolean => {
  if (value % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(filterArray([1, 2, 3, 4, 5], callBack));
