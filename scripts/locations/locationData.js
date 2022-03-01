//This file contains the basic info
//locations will be stored as an array of objects

const locationOne = {
    country:"Australia",
    blurb:"The great Barrier reef is a spectacular harvesting ground",
    image:"greatBarrierReef.jpg"
}
const locationTwo = {
    country:"Hawaii",
    blurb:"Honolulu's reefs are full of color",
    image:"hawaiiReef.jpg"
}
const locationThree = {
    country:"Jamaica",
    blurb:"Discovery Bay in Jamaica has benefitted from recent conservation efforts",
    image:"jamaicaReef.jpg"
}

const locationList = [locationOne,locationTwo,locationThree]

export const getLocations = () => {
    return locationList;
}