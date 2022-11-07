//EXERCISE3 5.4
let myTable = [];
let rowz = 3;
let columnz = 11;
let counter = 0;
let tempTable=[];

for (let i=0; i < rowz; i++){
   myTable.push([])

    for(  let j = 0; j<columnz; j++){
        myTable[i].push("sos")
        counter = counter + 1

    }
    
    tempTable.push(counter)
}
console.log(`There are ${tempTable.length} rows, ${tempTable[0]} Columns and ${counter} Cells`)
console.table(myTable)
console.log(tempTable)
