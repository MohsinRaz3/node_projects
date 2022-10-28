//Exercise 4.1 conditions 
import promptSync from 'prompt-sync'

let prompt = promptSync()

let myVariable = false;

if(myVariable !== true){
console.log(`its not same values`)
}

//Exercise 4.2 if-Else

let userAge = Number(prompt(`what's your age?  `))

let above18 = "Yes, you can have beer my dear!";

if(userAge >= 21){
    console.log(`${above18}`)
}
else{
    console.log(`Better luck next time kid!`)
}

//Exercise 4.3 TERNERY OPERATOR
let ID = false;

ID === true ? console.log(`Let him in`) : console.log(`Please prove your identity`)


//SWITCH STATEMENTS

let activity = "brunch"

switch(activity){
    case "breakfast":
    console.log(`lets go to mama hotel`);
    break;

    case "dinner":
        console.log(`let's go to 2nd wife resturant`)
        break;

        case "brunnch":
            console.log("lets go to fastfood street")
            break;

            case "lunch":
                console.log('lets go to usmania resturant')
                break;

                default:
                    console.log(`sit down!`)
                    break;

}

// EXECISE# 4.4 SWITCH STATEMENTS
let randValue = Math.random()
    randValue *= 5;

let RandomNum = Math.floor(randValue)
let userInput = Number(prompt(`enter you input between 0 to 5`))

switch(userInput){
    case RandomNum:
        console.log(`You Won`)
        break;

        default:
            console.log("TRY AGAIN!!")
            break;
}
console.log(`you get ${RandomNum} score your input was ${userInput}`)


// EXERCISE 4.5 
let prize = Number(prompt(`Type any number between 0 to 10! `))

let mySelection = `My selection: ${prize}`;
switch(prize){
    case 10:
        console.log( `${mySelection} you earned 10 points`)
        break;

        case 9:
        console.log( `${mySelection} you earned 9 points`)
        break;

        case 8:
        console.log( `${mySelection} you earned 8 points`)
        break;


        case 7:
        console.log( `${mySelection} you earned 7 points`)
        break;

        case 6:
        console.log( `${mySelection} you earned 6 points`)
        break;


        case 5:
        console.log( `${mySelection} you earned 5 points`)
        break;

        default:
            console.log("Try again!")
            break;
}


