import PromptSync from "prompt-sync";
let prompt = PromptSync()

//
let desWord = [
    "The boy is tall",
    "She is very smart",
    "Our car is red in colour",
    "He is an American citizen",
    "It is a luxurious hotel",
    "He is an intelligent boy",
    "The dish was very spicy",
    "She wore a beautiful dress",]

    let askDes = prompt(`Whats your good name deer? `)
    let randomNum = Math.random()
    randomNum *= 7
    randomNum = Math.floor(randomNum)

    function choseDes(){
       let userPicks = desWord[randomNum]
        console.log(`Hello ${askDes} your Descriptive word is " ${userPicks} "`); 
    }
    choseDes()