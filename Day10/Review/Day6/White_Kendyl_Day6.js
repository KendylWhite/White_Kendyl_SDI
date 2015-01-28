//alert("JavaScript works!");

/*
 *Kendyl White
 *SDI
 *Day 6
 */

////Is my steak done?
//
///*
// *120 and under is undercooked
// *120 - 124 - steak is rare
// *125 - 129 - steak is medium-rare
// *130 - 139 - steak is meduim
// *140 - 149 - steak is medium-well
// *150 - 165 - steak is well done
// *>165 is burnt to a crisp
// */
//
//var steakTemp = 160;
//
//if (steakTemp < 120) {
//    console.log("The steak is not done yet.");
//} else if (steakTemp <= 124) {
//    console.log("Rare steak.");
//} else if (steakTemp <= 129) {
//    console.log("Medium-rare");
//} else if (steakTemp <= 139) {
//    console.log("Medium");
//} else if (steakTemp <= 149) {
//    console.log("Medium-well.");
//} else if (steakTemp <= 165) {
//    console.log("Well Done!");
//} else {
//    console.log("The steak is burnt to a crisp.");
//}
//
////get outside temperature
//var airTemp = parseInt(prompt("What's the temperture outside?", "65"));
//
////create the varibale for the water temperature
//var waterTemp;
//
////conditional to see what we/re doing
//if (airTemp >= 85) {
//    console.log("Let's go to the beach!");
//    waterTemp = parseInt(prompt("What's the temperature of the water?", "75"));
//    
//    if (waterTemp >= 75) {
//        console.log("Let's go in the water!");
//    } else {
//        console.log("Let's build a sandcastle.");
//    }
//    
//} else {
//    console.log("We're going to the movies.");
//}



//round()
//Normal rounding .5 and up

var num1 = 9.54444
console.log(num1);
num1 = Math.round(num1);
console.log(num1);

//floor(x)
//Returns x, rounded down to the nearest integer/ whole number
var num2 = 6.8888;
console.log(num2);
num2 = Math.floor(num2);
console.log(num2);

//ceil(x)
//Retuen x rounded up to the next integer/whole number
var num3 = 4.1111;
console.log(num3);
num3 = Math.ceil(num3);
console.log(num3);

//random()
//Returns a number between 0 and 1
var num4 = Math.round(Math.random()*100);
console.log(num4);

//Random numer between two numbers
//Math.random() * (max-min) + min
var num5 = Math.round(Math.random() * (80 - 50) + 50);
console.log(num5);

var arrOfItems = ["Chips Ahoy", "Oreos", "E.L. Fudge", "Thin Mints"];

var randomCookie = Math.floor(Math.random() * arrOfItems.length);

console.log("My current favorite is " + arrOfItems[randomCookie] + ".");

console.log(Math.PI.toFixed(2));
console.log(Math.SQRT2);









