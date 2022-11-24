function greet(fullName){
    console.log(`welcome, ${fullName[0]} ${fullName[1]}`);
}

function processCall(user, callback){
    const fullName = user.split(" ");
    callback(fullName)
}
processCall("Mohsin Raz", greet)
