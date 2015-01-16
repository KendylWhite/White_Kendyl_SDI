
 /*
Kendyl White
SDI Campus
1/15/2015
Conditionals
 */
//alert("Testing to see if it works");

 //Basic Conditional Statement

 //Create a boolean variable to test
 var oldEnough = true;

 //If the child is old enough, then print to the console, You Can Ride!

 /*
 Basic Structure of if statement

 if(condition to test){
 Code to run if the condition is true
 } else{
 Code to run if the condition is false
 }

  */

 if(oldEnough){
  //Code inside of {} will run if the test is true
  //This code will be skipped if test is false
  console.log("You can ride the coaster!");
 }

 console.log("What comes after the if statement.");

 //Relational Expression

 //If the kid is over 48" tall, then he can ride
 var kidHeight = 47;

 //Create variable for minimum kid height
 var minHeight = 48;

 //Create a variable for a shoe lift
 var shoeLift = 2;
 //Is the child tall enough with shoe lift?

 if(kidHeight + shoeLift > minHeight){

  console.log("You are tall enough to ride!");

 } else{
  //This code will run if the test is false!
  console.log("Sorry, you are too short!");

 }



//What ride can the kid go on based on his height?
//if the kid is 48 + then Space Mountain
//If 40+ then Buzz Lightyear Ride
//Anything short - Winnie The Pooh

 var childHeight = 42;

 if(childHeight >= 48){

  console.log("You can ride Space Mountain. Buzz Lightyear and Winnie The Pooh!");

 } else if(childHeight >= 40){

  console.log("You can ride Buzz Lightyear and Winnie The Pooh!");

 } else{

  console.log("You can only ride Winnie The Pooh!");

 }


 /*
 If, else if, else statement

 if(conditional to test){

 Code to run if conditional is true.

 } else if(condition2 to test) {

 Condition2 will only be testing if conditional is false!

 Code to run if condition2 is true

 } else {

 Code to run if conditional & condition are false

 }


  */



