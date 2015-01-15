
 /*
Kendyl White
SDI Campus
1/13/2015
Expressions Assignment
 */
//alert("Testing to see if it works");

//The volume of a Pyramid

 var length = prompt("The Giza Pyramid is located in Egypt. It has a volume of 2.6 million cubic meters. You may not have one that big, but we can still find the volume. \nEnter the length:");
 var width = prompt("Next, please enter the width of your pyramid:");
 var height = prompt("Last, but not least, enter the height and you'll have your volume.");

 var volumeOfPyramid = (length * width * height) / 3;
 console.log(volumeOfPyramid);