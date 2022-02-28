//This function "FishList()" is imported into main

import { getFish } from "./fishData.js";
import { Fish } from "./fish.js";

export const FishList = () => {

    // Get a reference to the location on the DOM you want to display the list of fish
    const contentElement = document.querySelector(".fishList")
    // Get the fish array
    const fishes = getFish()
    // Declare a variable to hold on to the fish HTML representation
	let fishHTMLRepresentation = "";
    // Loop over the array of fish
	for (const oneThingFromTheSea of fishes) {
		fishHTMLRepresentation += Fish(oneThingFromTheSea);
	}
    // Set the dom equal to the variable containing the fish html representations
    contentElement.innerHTML += `
        ${fishHTMLRepresentation}
    `
}

// export const FishList = () => {


//     const contentElement = document.querySelector(".fishList")
//     const fishes = getFish()



//     contentElement.innerHTML += `
//         All the fish go here!
//     `
// }