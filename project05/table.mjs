import PromptSync from "prompt-sync";

// Create any table with loop
let prompt = PromptSync()

let numTab = Number(prompt(`Input any Number: `))

for(let i=1; i<11; i++){
    console.log(`${numTab} x ${i} = ${numTab*i}`)
}

