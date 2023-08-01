/* Exercise 5: Intersection Types
Define two or more interfaces and use intersection types to create a new interface that combines their properties. Implement functions that accept parameters of the intersection type.*/


type Car = {
    name:string,
    model:number
}

type Road = {
    type:string,
    milage:number
}


type milageOnRoad = Car & Road



function myCar(car : milageOnRoad) :string {
    if(car.milage>70){
        return 'Good Car'
    }else if(car.type=='CNG'){
        return 'Environment Friendly'
    }else{
        return 'Change Car'
    }
}


let mycar = {
    name:'Thar',
    model:2023,
    type:'CNG',
    milage:22
}


let statusOfCar = myCar(mycar)


console.log(statusOfCar)