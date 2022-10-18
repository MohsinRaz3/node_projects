import PromptSync from "prompt-sync"

const prompt = PromptSync();

let height = prompt(`please enter your height in Inches: `)
let weight = prompt(`Please enter your weight in Pounds: `)

//inchs into CM
let inchToCm = height * 2.54;
console.log(`Your height in CM are: ${inchToCm}`)

// Pound into KGs
let poundToKgs = weight / 2.205;
console.log(`Your weight in Kgs are: ${poundToKgs}`)

//cm into meters
let cmIntoMeters =  inchToCm / 100;
console.log(`${cmIntoMeters} is your height in Meters.`)

//bmi
let bmi = poundToKgs / (cmIntoMeters * cmIntoMeters);

console.log(`Your BMI is ${bmi}. `)