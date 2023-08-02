// Question 7:
// Create a TypeScript function called findMax that takes an array of values and returns the maximum value from the array. The function should work for arrays of numbers as well as arrays of strings.
const findMax = <t>(arr: t[]): t | string => {
  if (arr.length == 0) {
    return "Array is empty";
  }
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
};
