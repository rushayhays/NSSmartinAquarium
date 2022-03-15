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

const fishFour = {
    species:"Orange Spotted Soldierfish",
    length:5,
    location:"Jamaica",
    saltwater:true,
    image:"orange-spotted-filefish.jpg",
    name:"Spots",
    diet:"pellets"

};

const fishFive = {
    species:"Orange Spotted fish",
    length:5,
    location:"Jamaica",
    saltwater:true,
    image:"orange-spotted-filefish.jpg",
    name:"Spots",
    diet:"pellets"

};
const fishSix = {
    species:" Holy Mandarin fish",
    length:9,
    location:"Honolulu, Hawaii",
    saltwater:true,
    image:"mandarin-fish.jpg",
    name:"Bluey",
    diet:"pellets"

};

const fishSeven = {
    species:" Soldier Mandarin fish",
    length:10,
    location:"Honolulu, Hawaii",
    saltwater:true,
    image:"mandarin-fish.jpg",
    name:"Bluey",
    diet:"pellets"

};
const fishEight = {
    species:"Holy Pipefish",
    length:12,
    location:"Great Barrier Reef, Australia",
    saltwater:true,
    image:"pipeFish.jpg",
    name:"Slinky",
    diet:"pellets"

};
const fishNine = {
    species:"Soldier Pipefish",
    length:20,
    location:"Great Barrier Reef, Australia",
    saltwater:true,
    image:"pipeFish.jpg",
    name:"Slinky",
    diet:"pellets"

};
const fishCollection = [fishOne, fishTwo, fishThree, fishFour, fishFive, fishSix, fishSeven, fishEight, fishNine];

//This code should allow us to see the array when we call it.
export const getFish= () => {
    
    return fishCollection;
}