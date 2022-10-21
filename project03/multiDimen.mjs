//This contains exercise from chapter #3 of Beginner Javascript book.
//Multi-Dimension Arrays

let val1 = [1,2,3,4];
let val2 = [5,6,7,8];
let val3 =  [9,10,11,12];

//Let's make Array of Array AND indexing
let arrayOfArr = [val1, val2, val3];
let savedVal = arrayOfArr[2]

//Array of Array of Array AND indexing
let arrOfArrayOfArray = [arrayOfArr, arrayOfArr, arrayOfArr]
console.log(`Indexing ${arrOfArrayOfArray[0][1][1]}`)


//=============> PRACTICE EXERCISE# 3.3 <=============\\
//1. Create an array containing three values: 1, 2, and 3.
let valA = [1,2,3];

//2. Nest the original array into a new array three times.
let nestArr = [valA, valA, valA];

//3. Output the value 2 from one of the arrays into the console.
console.log(`Output the value 2: ${nestArr[2][1]}`)



//Objects in JavaScript
let lang = {
    name: "javascript",
    version: 18,
    color: "yellow",
    age: 16,
    devLang: true
}
lang["color"] = "purple";

//updating object
lang.devLang = false;
console.log(lang)


//===========> PRACTICE EXERCISE# 3.4 <================//

let myCar = {
    carName: "Mehru",
    noPlate: "azu898",
    model: 1998,
    colorM: "white",
    seats: 4,
    diggi: true
}

let saleStatus = "forSale"
myCar[saleStatus] = "Available"

let fule = "fule"
myCar[fule] = "CNG"
console.log(myCar)

console.log(myCar["carName"], myCar["model"])

console.log(myCar["forSale"])



//