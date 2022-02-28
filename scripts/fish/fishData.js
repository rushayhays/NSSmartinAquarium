//This function "getFish" will be imported into main

const fishOne = {
    species:"Pipefish",
    length:8,
    location:"Great Barrier Reef, Australia",
    saltwater:true,
    image:"pipeFish.jpg",
    name:"Slinky",
    diet:"pellets"

};

const fishTwo = {
    species:"Mandarin fish",
    length:5,
    location:"Honolulu, Hawaii",
    saltwater:true,
    image:"mandarin-fish.jpg",
    name:"Bluey",
    diet:"pellets"

};

const fishThree = {
    species:"Orange Spotted Filefish",
    length:4,
    location:"Jamaica",
    saltwater:true,
    image:"orange-spotted-filefish.jpg",
    name:"Spots",
    diet:"pellets"

};

const fishCollection = [fishOne, fishTwo, fishThree];

//This code should allow us to see the array when we call it.
export const getFish= () => {
    
    return fishCollection;
}