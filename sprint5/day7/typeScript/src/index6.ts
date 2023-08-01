/* Exercise 7: Nullable Types
Define variables with nullable types and handle cases where the value can be null or undefined. */


function getOutput(value:number | string): number | null{
    if(typeof value =='number'){
        return value
    }else{
        return null
    }

}