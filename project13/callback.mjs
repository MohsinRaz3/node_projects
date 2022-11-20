import PromptSync from "prompt-sync";
let prompt = PromptSync()

function userPercent (grades) {
    switch(true){
        case grades === "A":
            console.log(`You got ${grades} : Exellent job!`)
            break;

            case grades === "B":
                console.log(`You got ${grades} : Very Good.`)
                break;

                case grades === "C":
                    console.log(`You got ${grades} : Good`)
                    break;

                    case grades === "D":
                        console.log(`You got ${grades} : Ok.`)
                        break;

                        default:
                            console.log( `You got ${grades} : Study hard.`);
                            break;                      

    }
}

function getGrade(percentages,callback){
    let grades;
    switch(true){
        case percentages >= 90:
            grades = "A";
            break;

            case percentages >= 80:
                grades= "B";
                break;

                case percentages >= 70:
                    grades= "C";
                break;

                case percentages >= 60:
                    grades= "D";
                    break;

                    default:
                        grades= "F";
                    break;

    }
    callback(grades)

}
 let userPrompt = Number(prompt(`Input your percentages: `))
getGrade(userPrompt,userPercent)