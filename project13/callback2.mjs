//1st Step
function makeFryAnda(callback){

    setTimeout(()=>{
    callback("hello fried Anda")}, 1000);
}

// 2nd Step 
function makeBread(cb){
    setTimeout(() => {
    cb("toast Done")},
    2000);
}
makeBread(function(para){
    console.log(para);

    makeFryAnda(function(para1){
        console.log(para1);
    })
});
