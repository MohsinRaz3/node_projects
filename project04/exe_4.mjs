//Exercise 4.1 conditions 
import promptSync from 'prompt-sync'

let myVariable = false;

if(myVariable !== true){
console.log(`its not same values`)
}

//Exercise 4.2 if-Else
let prompt = promptSync()

let userAge = Number(prompt(`what's your age?  `))

let above18 = "Yes, you can have beer my dear!";

if(userAge >= 21){
    console.log(`${above18}`)
}
else{
    console.log(`Better luck next time kid!`)
}


