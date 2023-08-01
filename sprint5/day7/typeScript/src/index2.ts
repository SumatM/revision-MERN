/* 
Exercise 3: Type Aliases
Create type aliases for complex data structures like objects or arrays. Use these type aliases to define variables and function parameters.
 */


type Address = {
    place:string,
    city:string,
    nearby:string,
}

type Subject = {[subject:string] : number}

type MyStudent = {
    name: string,
    age: number,
    place:string,
    marks:Subject[],
    address: Address

}


let student : MyStudent = {
  name: "sumat",
  age: 39,
  place: "bbsr",
  marks: [{english:21},{math:32},{sicene:49}],
  address: {
    place: "bbsr",
    city: "bbsr",
    nearby: "Kalpana Square",
  },
};
