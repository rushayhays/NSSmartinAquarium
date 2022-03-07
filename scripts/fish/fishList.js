//This function "FishList()" is imported into main

import { getFish } from "./fishData.js";
import { Fish } from "./fish.js";
import { getHolyFish, getSoldierFish, getOtherFish } from "./holyFish.js";

// export const FishList = () => {

//     // Get a reference to the location on the DOM you want to display the list of fish
//     const contentElement = document.querySelector(".fishList")
//     // Get the fish array
//     const fishes = getFish()
//     // Declare a variable to hold on to the fish HTML representation
// 	let fishHTMLRepresentation = "";
//     // Loop over the array of fish
// 	for (const oneThingFromTheSea of fishes) {
// 		fishHTMLRepresentation += Fish(oneThingFromTheSea);
// 	}
//     // Set the dom equal to the variable containing the fish html representations
//     contentElement.innerHTML += `
//         ${fishHTMLRepresentation}
//     `
// }



//This is modified to pull out the holy fish first, then the soldiers, then the others
export const FishList = () => {

    // Get a reference to the location on the DOM you want to display the list of fish
    const contentElement = document.querySelector(".fishList")
    // Get the fish array
    const fishes = getFish()
    const holyFish = getHolyFish(fishes);
    const soldierFish = getSoldierFish(fishes);
    const otherFish = getOtherFish(fishes);
    // Declare a variable to hold on to the fish HTML representation
	let fishHTMLRepresentation = "";
    // Loop over the array of fish
	for (const oneHolyThingFromTheSea of holyFish) {
		fishHTMLRepresentation += Fish(oneHolyThingFromTheSea);
	}
    for (const oneSoldierThingFromTheSea of soldierFish) {
		fishHTMLRepresentation += Fish(oneSoldierThingFromTheSea);
	}
    for (const oneOtherThingFromTheSea of otherFish) {
		fishHTMLRepresentation += Fish(oneOtherThingFromTheSea);
	}
    // Set the dom equal to the variable containing the fish html representations
    contentElement.innerHTML += `
        ${fishHTMLRepresentation}
    `
}
