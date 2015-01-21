
 /*
Kendyl White
SDI Campus
1/17/2015
Conditionals Assignment
 */
//alert("Testing to see if it works");

//Walt Disney World
//Calculating people in the parks
 var magicKingdom = parseInt(prompt("Welcome to Walt Disney World! To help you have the best experience, let's find out how many people are in the main theme parks. How many people are at Magic Kingdom?"));
 var epcot = parseInt(prompt("How many people are at Epcot?"));
 var animalKingdom = parseInt(prompt("How many people are at Animal Kingdom"));
 var magicAndEp = magicKingdom + epcot
 var disneyTotal = magicAndEp + animalKingdom
 
 //Determining where to go
 if (magicKingdom < 600) {
    console.log("Let's go to Magic Kingdom! It only has " + magicKingdom + " people inside.");
 } else if (magicKingdom >= 600 && epcot < 500){
    console.log("Magic Kingdom is too busy. It has " + magicKingdom + " people. Let's go to Epcot!")
 } else if (epcot >= 500 && animalKingdom < 400 ) {
    console.log("Both Magic Kingdom and Epcot are too busy. It has a combined " + magicAndEp + " people. Let's go to Animal Kingdom!");
 } else {
    console.log("Our favorite parks are too busy. There's a total of " + disneyTotal + " people in them. Let's go home and try again another day.");
 }
 
 //Activities
 var age = parseInt(prompt("How old are you?"));
 var activity;

 //If the guest is 12 and under - kid rides 
 //If guest is from 13 to 54 - adult rides
 //If the guest is 55 or older - just watch the fireworks

 var activity = (age <= 12 ) ? "You can only ride kid rides." : (age < 55) ? "You can do whatever you want! Enjoy Disney World!" : "Just have fun and watch the fireworks at the end of the day.";

console.log(activity);
 