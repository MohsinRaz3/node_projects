let val1 = 3;
let val2 = 10;

let signVal = "+"
let result;

function calCu(a,b,c){
    if(c === "-"){
        let result = a - b;
        console.log(result)
    }
    else{
      result = a + b
      console.log(result)
    }
}
calCu(val1,val2,signVal)