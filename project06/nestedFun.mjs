import PromptSync from "prompt-sync";
let prompt = PromptSync()

let userName = prompt(`entr ur name gentleman : `)

function greet(val){

    console.log(`Hey ${val}`);
    welcome(val)
    
    function welcome(x){
        console.log(`${x} welcome to Pakistan`)
    }  
}
greet(userName)

