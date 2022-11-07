//forOfLoop

let provinces = [
    {1:"KPK",2: "Sindh",3:"Punjab",4:"Balochistan"}]

for(let soba of provinces){
    console.log(soba)
}

// exe# 5.6

let emptyArray = []

for (let i = 0; i < 11; i++) {
    emptyArray.push(i)
}

for(let arr of emptyArray){
    console.log(arr)
}
// FOR IN LOOPS
let car = {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
    };

    for (let prop in car){

        //We will get only values
        console.log(car[prop]);
        //we will get Keys
        console.log(prop);
    }

    //Practice exe# 5.7
    let simpObj = {1: "Apple", 2: "Microsoft", 3: "Xiaomi"}
    for(let sobj in simpObj){
        console.log(`Key: ${sobj} and Values: ${simpObj[sobj]}`)
    }

    let simpArr = ["apple", "ms", "xiaomi"]

    for(let simar in simpArr){
        console.log(simpArr[simar])
    }
// Object keys and values
    let soArrK = Object.keys(simpObj)
    let soArrV = Object.values(simpObj)

    for(let key of soArrK){
        console.log(key)
    }

    for(let val of soArrV){
        console.log(val)
    }

    //OBJECT KEYS AND VALUES

    let oKeyVal = Object.entries(simpObj) 
    for(const [key, values] of oKeyVal){
        console.log( `Keys : ${key} and Values : ${values}`)
    }