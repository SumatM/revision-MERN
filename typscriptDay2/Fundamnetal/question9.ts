// Question 9:
// Create a TypeScript function called removeDuplicates that takes an array of values and returns a new array with duplicate values removed. The function should preserve the original order of the elements.


function removeDuplicates<T>(arr :T[]) :T[]{
    let ansArray :T[] = [];
    //arr.sort((a :T,b:T)=>{return a-b})

    for (let i=0; i<arr.length-1; i++){
        if(arr[i]!==arr[i+1]){
            ansArray.push(arr[i])
        }
    }
    ansArray.push(arr[arr.length-1])

    return ansArray;
}