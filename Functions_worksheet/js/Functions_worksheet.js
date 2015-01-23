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
    
}

//Function call
calcCirc(6);
calcCirc(3);

var userCirc = parseInt(prompt("Let's find the circumference of your circle! \nPlease enter the radius of your cirlce:"));
calcCirc(userCirc);