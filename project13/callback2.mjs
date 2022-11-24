//1st Step
function makeFryAnda(callback){

    setTimeout(()=>{
    callback("hello fried Anda")}, 3000);
}

// 2nd Step 
function makeBread(cb){
    setTimeout(() => {
    cb("toast Done")},
    5000);
}

makeBread((para)=>{
    console.log(para);

    makeFryAnda((para)=>{
        console.log(para);
    })
});


