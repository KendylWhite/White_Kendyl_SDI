/*
 *Kendyl White
 *1/22/2015
 *Scope
 */
//alert("Testing");

//Variable Scope
//Variables inside & iutside of a function

//Try not to use the same variable names
//HOWEVER on large files this is going to be impossible


//Variables created inside of functions can ONLY be seen inside of those functions

//Create a varible for width in our MAIN code
var width = 5; //Scoped outside of the function - main code

//Create a function that calculates the perimeter or a rectangle
function calcPeri(){
    
    var width = 10; //Scoped to the function calcPeri
    console.log("Inside of the functuon the value of width is " + width + ".");
    
    var height = 20;
    var perimeter = width * 2 + height * 2;
    console.log("Inside of function the perimter is " + perimeter + ".");
    
    
}

console.log("Before call " + width);

calcPeri();

console.log("After call " + width);


//WILL NOT WORK!
//Can not access a varibale declared inside of a funcyion from your main code.
console.log("After call the perimeter is " + perimeter);