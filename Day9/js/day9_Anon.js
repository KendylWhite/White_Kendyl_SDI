/*
 *Kendyl White
 *1/24/2015
 *Anonymous Functions
 */
//alert("Testing");

//Anonymous Functions
//Widely used in JS and jQuery
//Importnat in Object Oriented Program
//Can be used interchangably with normal fucntion, if done right

//Very quick and easy
//Save on memory


/*
 Basic structure of anon fucntion
 var fucntionName = function(parameters){
    Code to run games here.
 }
 */

//Function call BEFORE the normal fucntion is defined
var results2 = (6, 7);
console.log("Before the fucntion results2 is " + results2 + ".");

//Function call before the anon function is defined
/*
THIS DOES NOT WORK!
FUNCTION CALL HAS TO COME AFTER ANON FUCNTION DEFINTION!
var results4 = triAreaAnon(7, 8);
console.log(results2 +" does not work this way.")

//Create a NORMAL fucntion for area of a triangle
function triArea(b, h){
    //Area = 1/2 * b * h;
    var area = .5 * b * h;
    return area;
    
}

//Funtion Call
var results1 = triArea(5, 6);
console.log(results1);


//Create an anonymous function that calculates the area of a triangle
var triAreaAnon = function(b, h){
    var area = .5 * b * h;
    return area;
};


//Function call after defined of anon function
var results3 = triAreaAnon(4, 5);
console.log("Results of anonymous fucntion after defined is " + results3 + ".");
