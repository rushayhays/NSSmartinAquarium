//This file will take exports from the other two in order
//to create a final function to export into main js

import { getLocations } from "./locationData.js";
import { locationWriter } from "./location.js";


export const locationLister = () => {

    // Get a reference to the location on the DOM you want to display the list of fish
    const contentElement = document.querySelector(".locationListings")
    // Get the fish array
    const places = getLocations()
    // Declare a variable to hold on to the fish HTML representation
	let locationHTMLRepresentation = "";
    // Loop over the array of fish
	for (const place of places) {
		locationHTMLRepresentation += locationWriter(place);
	}
    // Set the dom equal to the variable containing the fish html representations
    contentElement.innerHTML += `
        ${locationHTMLRepresentation}
    `
}