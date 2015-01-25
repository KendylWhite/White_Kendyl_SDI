/*
 *Kendyl White
 *1/24/2015
 *Multiple Functions
 */
//alert("Testing");

//Prompt the user for width and height
//Calculate both the area and perimeter of a rectangle

//First setup area of ractangle function
function areaRect(w, h){
    //Area of rectangle is width * height
    var area = w * h;
    return area;
}

//Setup perimeter function

function periRect(w, h) {
    //perimeter of a rectangle is 2 * width + 2 * height
    var perimeter = 2 * w + 2 * h;
    //reteurn the perimeter
    return perimeter;
}


//Prompt the user for width and height
var width = prompt("Please enter the width of your ractangle:");
//Validate it
while(width === "" || isNaN(width)){
    //reprompt the user
    width = prompt("Please do not leave blank and only use numbers. \nWhat is the width:");
    
}


var height = prompt("Please enter the height of your rectangle:");
//Validate
while(height === "" || isNaN(height)){
    height = prompt("Please don not levae blank and only use numbers. \nWhat is the height:");
}

//Fucntion call both functions.....ONE at a time
var resultsArea = areaRect(width, height);
var resultsPeri = periRect(width, height);

//Report out to the user
console.log("The area of the rectangle is " + resultsArea + " and the perimeter is " + resultsPeri + ".");

//Combined fucntion to calculate the perimeter and the area
function combinedRect(w, h){
    //Calc area
    var area = w * h;
    
    //calc perimter
    var peri = 2 * w + 2 * h;
    
    //Return BOTH values!
    return [area, peri];

    
}

//Function call
var combinedResults = combinedRect(width, height);

console.log(combinedResults[0]);
console.log(combinedResults[1]);
console.log(combinedResults);



