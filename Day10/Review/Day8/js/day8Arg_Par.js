/*
 *Kendyl White
 *1/22/2015
 *Arguments and Paremeters
 */
//alert("Testing");

//Arguements - Goes in the function call
//Parameters - Goes in the function defintion.

//must have the same number of arguments and parameters... usually

//Create a function to calculate the area of a rectangle
function calcArea(w, h) { //Parameters go here
    
    //var width = 10;
    //var height = 20;
    //var area = width * height;
    
    var area = w * h;
    console.log("The area is " + area + ".");
    
}

//Function call
calcArea(10, 20);
calcArea(5, 4);


//Calcuate Dog Years
//Put in human years, get out gog years

function dogYears(humanAge){ //humanAge Parameter
    //dog year = human * 7
    var dogAge = humanAge * 7;
    console.log("Dog age is " + dogAge + ".");
    
}

//Fucntion call with argument
dogYears(18);

dogYears(22);

var userAge = parseInt(prompt("How old are you?"));
dogYears(Number(userAge));