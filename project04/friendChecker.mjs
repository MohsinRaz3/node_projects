import PromptSync from "prompt-sync";

let prompt = PromptSync()

let askFriend = prompt(`What's your name dear? `) 

switch(askFriend){
    case "Ahsan":
        console.log(`welcome to the club! ${askFriend}`)
        break;
        case "Haider":
            console.log(`welcome to the club ${askFriend}`)
            break;
            case "Shahzoor":
                console.log(`Welcome to club ${askFriend}`)
                break;

                default:
                    console.log(`Prove your Identity ${askFriend} you're not in my friendlist!`)
                    break;
}