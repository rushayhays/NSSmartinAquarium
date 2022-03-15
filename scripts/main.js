//import all JS modules into main, this is the only thing connected to the HTML

// import { getFish } from "./fishData.js";
import { FishList } from "./fish/fishList.js";
import { tipList } from "./tips/tipList.js"
import { locationLister} from "./locations/locationList.js"

//These two lines are trying to utilize getFish() Independently of FishList(), both must be removed now that 
// getFish() is not be imported

// const allTheFish= getFish();
// console.log(allTheFish);

FishList();
tipList();
locationLister();

import { getFishes, getLocations, getTips } from "./data/dataManager.js";

console.log(getFishes())
console.log(getLocations())
console.log(getTips())
