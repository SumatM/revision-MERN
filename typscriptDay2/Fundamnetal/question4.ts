// Question 4:
// Create a TypeScript interface called Book with the following properties:

// title: a string
// author: a string
// year: a number
// isAvailable: a boolean
// Then, create a function called checkAvailability that takes a book object of type Book as a parameter and returns a string indicating whether the book is available or not. If the isAvailable property is true, return "Available", otherwise return "Not Available".


interface Book {
    title:string,
    author:string,
    year :number,
    isAvailable : boolean
}

function checkAvailability(book:Book):string{
    if(book.isAvailable){
        return "Available"
    }else{
        return "Not Available"
    }
}


const sciene = {
    title:'science',
    author:"NCRT",
    year:2023,
    isAvailable:true
}


console.log(checkAvailability(sciene))