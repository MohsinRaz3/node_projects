import PromptSync from "prompt-sync";
let prompt = PromptSync()

let val1 = Number(prompt(`Please add first number: `))
let val2 = Number(prompt(`Please add second number: `))

function addNumber(){
    let addVal = val1 + val2;
    let result = `${val1} + ${val2} is equal to ${addVal}`
    console.log(result);
}
addNumber()