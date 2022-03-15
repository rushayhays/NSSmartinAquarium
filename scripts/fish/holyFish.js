//seperates the worthy from the unworthy




export const getHolyFish = (fishArr) => {
    const holyFishArray = [];
    for(const fish of fishArr){
        if(fish.length % 3 === 0){
            holyFishArray.push(fish);
        }
    }
    return holyFishArray;
}

export const getSoldierFish = (fishArr) => {
    const soldierFishArray = [];
    for(const fish of fishArr){
        if(fish.length % 5 === 0 && fish.length % 3 != 0){
            soldierFishArray.push(fish);
        }
    }
    return soldierFishArray;
}

export const getOtherFish = (fishArr) => {
    const otherFishArray = [];
    for(const fish of fishArr){
        if(fish.length % 5 != 0 && fish.length % 3 != 0){
            otherFishArray.push(fish);
        }
    }
    return otherFishArray;
}
