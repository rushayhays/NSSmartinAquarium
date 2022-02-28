//import all JS modules into main, this is the only thing connected to the HTML

// import { getFish } from "./fishData.js";
import { FishList } from "./fish/fishList.js";
import { tipList } from "./tips/tipList.js"

//These two lines are trying to utilize getFish() Independently of FishList(), both must be removed now that 
// getFish() is not be imported

// const allTheFish= getFish();
// console.log(allTheFish);

FishList();
tipList();


//some troubleshooting on tips
// import { getTips } from "./tips/tipData.js";
// const tipparagraphs= getTips();
// console.log(tipparagraphs);
