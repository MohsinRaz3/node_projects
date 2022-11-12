//Exercise# 6.6

import PromptSync from "prompt-sync";
let prompt = PromptSync()

function findFactorial(nr){
    console.log(nr);

    if(nr === 0){
        return 1
    }
    else {
     return nr * findFactorial(--nr)
       

    }
}
console.log(findFactorial(5))