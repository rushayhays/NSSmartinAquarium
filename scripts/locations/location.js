//This file takes the info and creates a 
//standard HTML skeleton for it to fit into

export const locationWriter = (locationObj) => {
	return `<article class="location-card">
				<div><img class="location-image" src="images/${locationObj.image}" /></div>
				<div class="locationInfo">
                <h3 class="country-name">${locationObj.country}</h3>
                <p>${locationObj.blurb}</p>
                </div>
        	</article>`
}