// CONCURRENCY - We pass function as a parameter into another function.

function flexFun(funExe){
    funExe();
    console.log("its a flexible function!");   
}
const function1 = () => {console.log("1st function");}
const function2 = () => {console.log("2nd function");}

flexFun(function1)
flexFun(function2)
