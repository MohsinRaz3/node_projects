let allowedPass = [1234,"mrk", "pak"]

function checkPass(){
    return allowedPass.includes("mrk")
}

console.log(checkPass());