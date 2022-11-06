//EXERCISE3 5.4
let myTable = [];
let rowz = 2;
let columnz = 5;
let counter = 0;
let tempTable=[];

for (let i=0; i < rowz; i++){
   myTable.push([])

    for(  let j = 0; j<columnz; j++){
        myTable[i].push("sos")
        counter += 1

    }
    tempTable.push(counter)
}

console.log(`There are ${tempTable[0]} Columns and ${tempTable[1]} Cells`)
console.table(myTable)
console.log(counter)
