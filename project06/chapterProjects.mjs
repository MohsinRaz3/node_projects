// Create a recursive function Project #1

function reCurse(nr){
    console.log(nr)

    if(nr < 10){
        reCurse(++nr)
        //console.log(nr)
    }
}
reCurse(5)

// SetTimeOut Order Project #2
let funOne = () => {console.log("One")}

let funTwo = () => {console.log("Two")}

let funThree = () => {console.log("Three");
//Invoke first two function
funOne()
funTwo()
}

let funFour = () => {console.log("Four");


funThree()
setTimeout(funOne,500)

}
funFour()
