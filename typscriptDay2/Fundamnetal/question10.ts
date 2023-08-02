// Question 10: (Topic: Enums)
// Create a TypeScript enum called DayOfWeek with values representing days of the week (e.g., Sunday, Monday). Write a function that takes a DayOfWeek value and returns a string message indicating if it's a weekday or a weekend day.



enum DayOfWeek {
    Monday =1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}


function checkWeekend(day:DayOfWeek):string{

   if(day<6){
    return 'Weekday'
   } else
    return 'Weekend'
   
}


checkWeekend(DayOfWeek.Monday)


// enum DayOfWeek {
//     Monday = 1,
//     Tuesday,
//     Wednesday,
//     Thursday,
//     Friday,
//     Saturday,
//     Sunday
// }

// function checkWeekend(day: DayOfWeek): string {
//     if (day <= DayOfWeek.Friday) {
//         return 'Weekday';
//     } else {
//         return 'Weekend';
//     }
// }

// console.log(checkWeekend(DayOfWeek.Monday)); // Output: Weekday
