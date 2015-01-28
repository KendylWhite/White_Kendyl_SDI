/*
 *Kendyl White
 *1/24/2015
 *Functions Assignment
 */
//alert("Testing");

//Gather variables
var baseHeight = parseInt(prompt("If you haven't noticed yet, I really like triangles. \nThis time we're trying to find the volume of a triangular based pyramid. \nFirst we'll need the area of the base, what is the height of the base:"));
while(isNaN(baseHeight) || baseHeight === ""){
    baseHeight = prompt("Please do not leave blank and only use numbers. \nWhat is the height of the base?")
}

var baseBase = parseInt(prompt("Even though it may sound weird, the next thing we need to know is the base of the base:"));
while(baseBase === "" || isNaN(baseBase)){
    baseBase = prompt("Please do not leave blank and only use numbers. \nWhat is the base of the base?")
}

var pyrHeight = parseInt(prompt("The last thing we need is the height of the pyramid:"));
while(pyrHeight === "" || isNaN(pyrHeight)){
    pyrHeight = prompt("Please do not leave blank and only use numbers. \nWhat is the height of the pyramid?")
}

//Create a normal function for volume of a triangular pyramid
function pyramidVolume(b, h, H){
    //Volume = (1/6 * (b * h) * H;

    var base = 1/3 * (baseHeight * baseBase);

    var pyramidVolume = 1/3 * (base * pyrHeight);

    return [baseHeight, baseBase, pyrHeight, base, pyramidVolume]
}

//Function Call
var results = pyramidVolume(baseHeight, baseBase, pyrHeight);
console.log("The volume of your pyramid with a base of " + results[3].toFixed(3) + " and a height of " + results[2].toFixed(3) + " is about " + results[4].toFixed(2) + ".");


//Create an anonymous function for volume of triangular pyramid
var pyramidVolumeAnon = function(b, h, H){
    var volume = (1/3 * (b * h) * H);
    return volume;
};
//Function call after defined of anonymous function
var results2 = pyramidVolumeAnon(baseHeight, baseBase, pyrHeight);
console.log("The results of anonymous pyramid after defined are " + results2 + ".");


//I entered 3, 6, and 9, and got 18.
//I entered 22, 22, and 22 and got 1183.11.
//I entered 6, 16, and 22 and got 234.67.