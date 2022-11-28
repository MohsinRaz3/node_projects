let counter = 0;

function outputTime(val){
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            counter++
            resolve(`x value ${val} counter: ${counter} `)
        }, 2000)

    })
}

async function aCall(val){
    console.log(`   x value ${val} counter: ${counter} `);
    const res = await outputTime(val)
    console.log(res)
}

for(let i=0; i<4; i++){
    aCall(i)
}