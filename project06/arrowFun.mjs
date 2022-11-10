import PromptSync from "prompt-sync";
let prompt = PromptSync()

let x = prompt(`What are you learning today? `)
function doingSomething(x){
    console.log(x)
}
doingSomething(x)

//In Arrow-Function with Param
let arrowFunction = (x,y,z) => {console.log(x+y+z)}
arrowFunction(2,3,3)

//no without param
let sayHi = () => console.log("hi");
sayHi()

// For Each
const myFriend = ["Ahsan","Haider","Faisal"]
myFriend.forEach(e => console.log(e))

// Returning Function
function addFun(x, y) {
    return x + y;
    }

     let result = addFun(4, 5);
    console.log(result)

    let resultsArr = [];

    for(let i = 0; i < 10; i ++){
      result = addFun(i, 2*i);
    resultsArr.push(result);
    }
    console.log(resultsArr);
