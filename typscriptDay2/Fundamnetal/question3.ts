// Question 3:
// Let's explore inheritance and classes in TypeScript. Create a base class called Shape with a property name of type string. Then, create a derived class called Circle that extends Shape and has an additional property radius of type number. The Circle class should also have a method called calculateArea that returns the area of the circle (π * radius^2).



// class Shape{
//     Circle :string
//     radium : number
//     CalculateArea : Function
//     constructor(Circle:string,radium:number){
//         this.Circle = Circle;
//         this.radium = radium
//         this.CalculateArea = ()=>{
//           return  Math.PI*(radium**2)
//         }
//     }
// }


// correct code 

class Shape {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(name: string, radius: number) {
        super(name);
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * (this.radius ** 2);
    }
}

// Creating an instance of the Circle class
const myCircle = new Circle("My Circle", 5);
console.log(myCircle.name); // Output: My Circle
console.log(myCircle.calculateArea()); // Output: 78.53981633974483



