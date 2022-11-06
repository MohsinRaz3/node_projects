//FOR LOOPS 
import PromptSync from 'prompt-sync'
let prompt = PromptSync() 

let fruits = ["aam", "tarboz","maalta","anaar","kela","saib"]
for(let i = 0; i < fruits.length; i++){ 
    fruits[i] = fruits[i]  + " ek phal hai"     
}
console.log(fruits)

let arrOfArrays = [];

for (let i = 0; i < 4; i++){
arrOfArrays.push([]);
for (let j = 0; j < 4; j++){
    arrOfArrays[i].push([]);
}
}

// console.table(arrOfArrays)

let array = [
[ 0, 1, 2, 3, 4, 5, 6],
[ 0, 1, 2, 3, 4, 5, 6],
[ 0, 1, 2, 3, 4, 5, 6],
]
delete array[2]
console.table(array)
