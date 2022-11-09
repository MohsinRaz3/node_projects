// function
import PromptSync from "prompt-sync"
let prompt = PromptSync()

const hobby =prompt(`What's your fav hobby? : `) 
function myFun(){
    let hobb = `My fav hobby is ${hobby}`
    console.log(hobb)
}
myFun()

//SAY-HELLO-FUNCTION
let yourName = prompt(`what's your name? `)

function sayHello(){
    let you = `Hello ${yourName} Welcome to Javascript!`
    console.log(you)
}
sayHello()

//variable containing functions
let hellow = prompt(`where are you? `)
let varFun = function(){
    console.log(`Im inside var ${hellow}`)
}
varFun()
