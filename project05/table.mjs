import PromptSync from "prompt-sync";

// // Create any table with loop
let prompt = PromptSync()

let numTab = Number(prompt(`Input any Number: `))

for(let i=1; i<11; i++){
  //  console.log(`${numTab} x ${i} = ${numTab*i}`)
}

// WHILE LOOP

let i = 0
while (i<5){
   // console.log(i)
    i++
}

let people = ["faisal", "ahsan", "haider", "imran","hamzah"]

let notFound = true;

while(notFound && people.length > 2){

    if (people[0] === "ahsan"){
        console.log("found it")
        notFound = false;
    } else{
        people.shift()

    }
  
}

let mc = ["faisal", "ahsan", "haider", "imran","hamzah"]

// find method return value from array
let findAhsan = mc.find( e => e === "ahsan")
//console.log(findAhsan)

// includes method find the item and return boolean  value
let checkMikasa = mc.includes("ahsan")
//console.log(checkMikasa)


//Fabnocci equation
let n1 = 0;
let n2 = 1;
let temp;
let fab = [];

while(fab.length < 25 ){
    fab.push(n1)
    temp = n1 + n2
    n1 = n2
    n2 = temp
}
//console.log(fab)


//EXERCISE# 5.1

let notMatch = false;

let guessNum = Number(prompt(`Guess any Number b/w 1 to 10: `))

let sol = Math.random(0,1) * 10
sol = Math.floor(sol)

while(!notMatch){
    if(guessNum === sol){
        notMatch = true;

   //     console.log(`Value matched ${guessNum}`)
    } 
    else if(guessNum < sol)
    {
        notMatch = true;
    //    console.log(`your value ${guessNum} is less than guessed number: ${sol}`)
    }
    else if(guessNum > 10){
        notMatch = true;
      //  console.log(`Please enter value between 1 to 10`)
    }
    else if (guessNum > sol){
        notMatch = true;
       // console.log(`Your value ${guessNum}  is higher than guessed number: ${sol}`)
    }
    else{
        notMatch = true;
     //   console.log("Please enter correct value")
    }
}

//DO WHILE LOOP

let number;
do {
number = prompt("Please enter a number between 0 and 100: ");
} while (!(number >= 0 && number < 100)){
}

//EXERCISE# 5.2

let countVal = 0;
 
do{ countVal = countVal + 1}
while(!(countVal >= 10) ){
   // console.log(countVal)
}


//EXERCISE# 5.3

let myWork = [];

for(let i = 1; i < 11; i++){
    let statusBool = i % 2 ? true : false;
    myWork.push({
        name: i,
        status: statusBool
    })
}
//console.log(myWork)

