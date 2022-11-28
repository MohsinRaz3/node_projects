// let devpromise = new Promise((resolve, reject)=>{
//     let pomo = 4;

//     if(pomo >= 5){
//         resolve("work done!")
//     }
//     else{
//         reject("work not done!")
//     }
// })

// devpromise.then(function(param){
// console.log(param);})

// .catch(function(param){
// console.log(param);})


//Second promise function

function myFun(){
    return new Promise((resolve,reject)=>{
        let name = "mrk";

        if(name === "ahsan"){
            resolve("Your eligible")

        } else{
            reject("Error!")
        }
    })
}

myFun()
.then(function(param){
     console.log(param)
    
    
})
.then(function(param){
return "doing god's work"
    
})

.catch((error)=>{
    console.log(error);
})