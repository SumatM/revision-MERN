// var names = ['alice','bob',"charlie",'abhishek','eve']

// let  str = names.reduce((acc,item)=>{
//        // console.log(acc,item)
//       if(acc.length<item.length){
//        return acc = item;
//       }
//       return acc;
// },"a")

// console.log(str);


// const letters = {
//     a:5,
//     b:12,
//     c:7,
//     d:4,
//     e:9,
//     f:2,
//     g:6,
//     h:16
// }

// for (let key in letters){

//     if(letters[key]%2==0){
//         console.log(key);
//     }
// }


const students = [
    {name:'sumat',grade:85},
    {name:'aman',grade:92},
    {name:'atul',grade:65},
    {name:'ram',grade:99},

]


let passStudents= students.reduce((acc,item,ind)=>{
       if(item.grade>=90){
          acc.push(item)
       }
       return acc;
},[])


console.log(passStudents)