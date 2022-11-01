import PromptSync from "prompt-sync";
import RandomInteger from 'random-int'

let prompt = PromptSync()

// Paper, scissor, Rock game!
const choices = ["paper", "scissor", "rock"];

let pcTurn = RandomInteger(0,2)
pcTurn = choices[pcTurn];

let userPick = Number(prompt(`Please play your move 0 for Paper, 1 for Scissor and 2 for Rock: `))
userPick = choices[userPick]

if(pcTurn === userPick){
    console.log(`Its' Draw!! Both selected ${pcTurn} `)

} else if(pcTurn === "rock" && userPick === "scissor"){
    console.log(`PC win!! User selected ${userPick} pc selected ${pcTurn}`)
}
else if(pcTurn === "scissor" && userPick === "rock"){
    console.log(`User win!! PC selected ${pcTurn} User selected ${userPick}`)
}
else if(pcTurn === "rock" && userPick === "paper"){
    console.log(`User win!! PC selected ${pcTurn} User selected ${userPick}`)
}
else if(pcTurn === "paper" && userPick === "rock"){
    console.log(`PC win!! PC selected ${pcTurn} User selected ${userPick}`)
}
else if(pcTurn === "scissor" && userPick === "paper"){
    console.log(`PC win!! PC selected ${pcTurn} User selected ${userPick}`)
}
else if(pcTurn === "paper" && userPick === "scissor"){
    console.log(`User win!! PC selected ${pcTurn} User selected ${userPick}`)
}
else{
    console.log(`Type correct value please!`)
}



