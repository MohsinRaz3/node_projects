let devpromise = new Promise((resolve, reject)=>{
    let pomo = 4;

    if(pomo >= 5){
        resolve("work done!")
    }
    else{
        reject("work not done!")
    }
})

devpromise.then(function(param){
console.log(param);})

devpromise.catch(function(param){
console.log(param);})

function myFun(){
    return new Promise((resolve,reject)=>{
        let name = "mrk";

        if(name === "ahsan"){
            resolve("Your eligible")
        } else{
            reject("get out!")
        }
    })
}

myFun().then(function(param){
    console.log(param)
})

myFun().catch(function(param){
    console.log(param);
})