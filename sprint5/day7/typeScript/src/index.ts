//number
let myNumber: number = 12348739;
// string
let myName: string = "sumat";
// boolean
let isMarried: boolean = false;
// any
// we should avoid this any type
let masai: any = true;
//object
let myNormalday: { wakeup: string; sleep: string } = {
  wakeup: "7:09 AM",
  sleep: "01:35 AM",
};
//array

let score: number[] = [1, 2, 3];

// void when nothing is returning
function greet(): void {}

// undefined;

let isYour: undefined = undefined;

//never

// function throwErrors(param?:number ):never {
//   if (!param) {
//     throw new Error("This is to check never DT");
//   }else{
//     throw new Error('good')
//   }

// }

function throwError(): void {
    // throw new Error("An error occurred.");
  }


  // interfaces 

  type Student = {
        name: string,
        age:number,
        class: number
  }
  
  const sumat :Student = {name:'sumat',age:24,class:18}

  // enums

  enum Color {
    Red,
    Green,
    Blue,
  }
  let selectedColor: Color = Color.Blue;
 
  console.log(selectedColor)



  // union types | 


  let pet : string | undefined | number  = 'cat';


  // type aliases 


  type Cat = string

  let steetAnimals : Cat  = 'dog'



  // Intersection Tpes 


  type Students = {
    age: number,
    class:string
  }

  type Teacher = {
    name: string,
    role: string
  }

  let candidata : Students & Teacher = {name:'sumat',age:55,class:'tenth',role:'teacher'}


  // tuples 


  let mypet :[number,string,string] = [2,'cat','dog']