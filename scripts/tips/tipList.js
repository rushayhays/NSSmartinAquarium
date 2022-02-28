//This should take the data from the other two files and turn it into
//an HTML element

//Let's import the stuff
//import { getFish } from "./fishData.js";
import {getTips} from "./tipData.js"
import { bigTip } from "./tip.js"

export const tipList = () => {

    // Get a reference to the location on the DOM you want to display the list of fish
    const contentElement = document.querySelector(".martinTips")
    // Get the fish array
    const tips = getTips()
    // Declare a variable to hold on to the fish HTML representation
	let tipHTMLRepresentation = "";
    // Loop over the array of fish
	for (const item of tips) {
		tipHTMLRepresentation += bigTip(item);
	}
    // Set the dom equal to the variable containing the fish html representations
    contentElement.innerHTML += `
        ${tipHTMLRepresentation}
    `
}