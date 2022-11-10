// exercise# 6.4

function mulFun(x,y){
    return x + y;
}
let mulVal = mulFun()

let stData = [];

for(let i=0; i<10; i++){
    let mulVal = mulFun(i*5, i*i)
    stData.push(mulVal)
}
console.log(stData)