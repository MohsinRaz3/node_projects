const myPromise = new Promise((resolve, reject)=>{
    resolve("Start counting..!")
});

function myFunction(value){
    console.log(value);
}

myPromise

.then(value => { myFunction(value);
    return "One"
})

.then(value => { myFunction(value);
    return "Two"
})

.then(value => { myFunction(value);
    return "Three"
})

.then(value => { myFunction(value);
})