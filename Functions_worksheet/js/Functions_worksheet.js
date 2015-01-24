/*
 *Kendyl White
 *1/22/2015
 *Functions Worksheet
 */
//alert("Testing");

//Circumference
//Calculate the circfumference of a circle
function calcCirc(radius) {
    
    var circ = Math.PI * (radius * radius);
    console.log("The circumference of a circle with a radius of " + radius + " is rounded to be " + circ.toFixed(2) + ".");
    
//Return
    return circ
    
}

//Function call
calcCirc(6);
calcCirc(3);

var userCirc = parseInt(prompt("Let's find the circumference of your circle! \nPlease enter the radius of your cirlce:"));
calcCirc(userCirc);

//Sting!
//Calculate the number of stings it takes to kill an animal
function calcStings(pounds) {
    
    var stings = 8.67 * pounds;
    console.log("It takes " + stings + " stings to kill this animal.")
    
//Return
    return stings

}

//Funtion call
calcStings(22);

var userStings = parseInt(prompt("I'm pretty sure you care about your animal's safety and bees are everywhere. It takes about 8.67 stings per pound to kill an animal. \nHow much does your pet weigh?"));
calcStings(userStings);
