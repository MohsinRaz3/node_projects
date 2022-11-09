//
const finTable = []
const mull = 20;


for(let i=0; i< mull; i++){
     const temparr = [];

    for(let j=0; j< mull; j++){
        temparr.push(i*j)
    }
    finTable.push(temparr)

}
console.table(finTable)