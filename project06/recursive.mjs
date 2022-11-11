import PromptSync from "prompt-sync";
let prompt = PromptSync()

function getRecursive(refu){
    //console.log("countdown" + refu);

    
    if(refu > 0){
        getRecursive(--refu)
        //console.log("continue" + refu);
    }else{
       // console.log("stoped at :" + refu );
    }
}
getRecursive(3)

//Recursion

let userVal = Number(prompt(`Enter value for factorial: `))

function getFac(gfac){
    if(gfac > 0){

        getFac(--gfac)
        console.log(`${gfac } `)
    }
}
getFac(userVal)