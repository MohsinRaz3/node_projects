/* Chapter projects
Evaluating a number game */

import PromptSync from "prompt-sync";
let prompt = PromptSync()

// equal, less or Greater
let dyNum = Math.random()
dyNum *= 10;
dyNum = Math.floor(dyNum)
let ifGreater; 

let askUser = Number(prompt(`Type any number: `))

switch(askUser){
    case dyNum:
        console.log(`Your value ${askUser} is equal to Dynamic number ${dyNum}`)
        break;

        default:

 ifGreater = askUser > dyNum ? console.log(`Your value ${askUser} is greater than Dynamic number ${dyNum}`) : console.log(`Your value ${askUser} is less than Dynamic number ${dyNum}`);

}
