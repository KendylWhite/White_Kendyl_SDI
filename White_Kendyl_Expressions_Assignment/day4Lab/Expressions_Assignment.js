
 /*
Kendyl White
SDI Campus
1/13/2015
Expressions Assignment
 */
//alert("Testing to see if it works");

//The volume of a Pyramid
 var volume = ["length" , "width" ,"height"];

//Prompting the user
 var length = prompt("The Giza Pyramid is located in Egypt. It has a volume of 2.6 million cubic meters. You may not have one that big, but we can still find the volume. \nEnter the length:");
 var width = prompt("Next, please enter the width of your pyramid:");
 var height = prompt("Last, but not least, enter the height and you'll have your volume.");

//Using Assignment Operators
 var baseOfPyramid = length * width;
 var preVolume = baseOfPyramid *= height;

//The Final Volume of the Pyramid
 var volumeOfPyramid = preVolume /= 3;
 console.log("The volume of your pyramid with a " + volume[0] + " of " + length + ", a " + volume[1] + " of " + width + ", and a " + volume[2] + " of " + height + " is " + volumeOfPyramid + ". Now apply your cubic unit if you have one.");

//Testing
 //First test, I typed in 6, 6, and 6 and received a volume of 72.
 //Second test, I typed in 3, 6, and 9 and received a volume of 54.
 //Third and final test, I typed in 5, 5, 10 and received a volume of 83.33.
