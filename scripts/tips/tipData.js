//This file will contain all the tips as strings in an array



const tipOne = "Properly condition your water. Use biological agents or supplements that clear out tap water properties such as minerals and chemical additives.";



const tipTwo = "Maintain pH balance and other chemical levels. You can monitor the pH levels of your tank by purchasing a pH test kit. Saltwater fish thrive well in pH levels between 7.6 and 8.4. You will also need to regularly check your tank for the right levels of nitrate, nitrite, and ammone.";

const tipThree =  "Avoid overfeeding your fish. This one is a cardinal rule in maintaining an aquarium. Overfeeding your fish can cause a variety of problems Maintain a consistent feeding schedule and provide an appropriate amount of food."; 

const tipList= [tipOne,tipTwo,tipThree];



export const getTips= () => {
    return tipList;
}