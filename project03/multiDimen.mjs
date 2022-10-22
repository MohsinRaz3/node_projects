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
// console.log(lang)


//===========> PRACTICE EXERCISE# 3.4 <================//

let myCar = [{
    carName: "Mehru",
    noPlate: "azu898",
    model: 1998,
    forsale: false,
    colorM: "white",
    seats: 4,
    diggi: true
},
{
    carName: "civic",
    noPlate: "azu898",
    model: 1998,
    forsale: false,
    colorM: "white",
    seats: 4,
    diggi: true
}
]

let variable = "carName";
myCar[0][variable]= "Honda";

console.log(myCar)



let saleStatus = "forSale"
myCar[saleStatus] = "Available"

let fule = "fule"
myCar[fule] = "CNG"
// console.log(myCar)

// console.log(myCar["carName"], myCar["model"])

// console.log(myCar["forSale"])



//Objects in Ojects
let company = {
    companyName: "Easecad",
    activity: ["Builders","Real Estate", "Hardware", "Material"],
    address: {
        city: "Quetta",
        zipCode: 44778,
        province: "Balochistan"
    },
    established: 2021
}

let activities = company.activity[1];
console.log(activities)

let megaCompanies = [{
    burger: "kingBurger", 
    pizza: "Dominos",
    mamaHotel: "Cheese paratha"
},

45,
{
    dhaba: "chai",
    tandoor: "roti",
    filter: "pani",
    bhook: true
},
"Biryani reh gayi bhai"
]
// console.log(megaCompanies[3])


//==========> PRACTICE EXERCISE# 3.5 <==============//
let people = {friends:[]}

let friend1 = { 
    firstName: "Ahsan",
    lastName: "Khan",
    id: 1
}

let friend2 = {
    firstName: "Shahzoor",
    lastName:"Khan",
    id: 2
}

let friend3 = {
    firstName: "Ammar",
    lastName: "Ahmed",
    id: 3
}

people.friends.push(friend1,friend2,friend3)
console.log(people)

//==============> CHAPTER#3 PROJECT<===============//

const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']];

theList.pop()
theList.shift()
theList.unshift("FIRST")
theList.splice(2,0,"hello world")
theList.splice(2,0,"MIDDLE")
theList.push("LAST")
theList.splice(4,5)


console.log(theList)