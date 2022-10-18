import PromptSync from "prompt-sync"

const prompt = PromptSync();

let userInput = Number(prompt(`Please Enter the distance in Miles: `))

let mileIntoKM = userInput * 1.60934

console.log(`The distance of ${mileIntoKM} kms is equal to ${userInput} miles.`)