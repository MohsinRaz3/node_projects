let allowedPass = [1234,"mrk", "pak"]
let res;

function checkPass(){  
    res = allowedPass.includes("mr2k")
   return res;
}
function passPromise(){
    return new Promise((resolve, reject)=>{
        if(checkPass()){
            resolve(`Correct Password! ${res}`)
        }else{
            reject(`Worng Password! ${res}`)
       }
    })

    .then((val)=>{
        console.log(val)
    })

    .catch((err)=>{
        console.log(err);
    })
}
passPromise()