

function calSum(n){
    let sum = 0;
   for (let i=1; i<=n;i++){
    sum+=i;
   }
   return sum;
}


const memoize = (fun)=>{
  let memo = {};
   
  return function(...args){
    console.log(fun)
    let n = args[0]
    if(n in memo){
        console.log('Value from memo')
        return memo[n]
    }else{
      let result = fun(n);
      memo.n = result;
      console.log('value from fun()')
      return result;
    }
  }
}

let memofun = memoize(calSum);
//console.log(memofun);


console.time()
console.log(memofun(50),50)
console.timeEnd();

console.time()
console.log(memofun(5),5)
console.timeEnd();

console.time()
console.log(memofun(1000),1000)
console.timeEnd();

console.time()
console.log(memofun(6),6)
console.timeEnd();

console.time()
console.log(memofun(6),6)
console.timeEnd();