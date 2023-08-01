/*
Exercise 4: Union Types
Create functions that accept parameters with union types. Handle different cases based on the specific types in the function implementation.
*/




function allRounder(val:number):number | string | boolean{
  if(val<10){
    return 'You need to gain Weight'
  }else if(val>10 && val<30) {
    return 'Good weight'
  }else if(val>30 && val<50){
    return 'Happy to see'
  }else if(val>90){
    return true;
  }else{
    return 21
  }

}


let myScore = allRounder(89)

 console.log(myScore)