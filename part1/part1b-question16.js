let statistics = {
    redCars: 21,
    blueCards: 45,
    greenCards: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for(const key in statistics){
    if( (key.charAt(0) === 'r') || (statistics[key] % 2 === 1)){
        console.log(statistics[key])
    }
}