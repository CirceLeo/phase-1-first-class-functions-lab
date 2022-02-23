const returnFirstTwoDrivers = driverArray =>  driverArray.slice(0,2);

const returnLastTwoDrivers = driverArray => driverArray.slice(-2) ;

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(mult){
    const multiplier = fare => fare * mult
    return multiplier
}

function fareDoubler(fare) {
    const doubler = createFareMultiplier(2)
    return doubler(fare)
}

const fareTripler = function(fare){
    const tripler = createFareMultiplier(3)
    return tripler(fare)
}

function selectDifferentDrivers(driverArray, selectFunction){
    return selectFunction(driverArray)
}