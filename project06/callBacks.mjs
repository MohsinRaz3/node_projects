let selfExe = function (){    
    console.log("self execute function");
}

let callBackfun = function(nr){
    selfExe()
    console.log("callback 2nd Fun");
} 
callBackfun(selfExe)

//TimeSetOut Function

let youGotThis = () => console.log("help");

setTimeout(youGotThis,1000);
