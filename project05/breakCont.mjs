let cars = [{
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
    },
    {
    model: "Picanto",
    make: "Kia",
    year: 2020,
    color: "red",
    },
    {
    model: "Peugeot",
    make: "208",
    year: 2021,
    color: "black",
    },
    {
    model: "Fiat",
    make: "Punto",
    year: 2020,
    color: "black",
    }]

    for(let i=0; i< cars.length; i++){
        if(cars[i].year >= 2020 ){
            if(cars[i].make === "Punto"){
                console.log("I want for my birthday present!", cars[i])
                break;
            }
        }
    }

    // Continue 

    let i = 1;
while (i < 50) {
    i++;
if ((i-1) % 2 === 0){
continue;
}
console.log(i-1);

}