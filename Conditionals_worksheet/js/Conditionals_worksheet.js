
 /*
Kendyl White
SDI Campus
1/15/2015
Conditionals Worksheet
 */
//alert("Testing to see if it works");

//Last Chance for Gas!
//Can the driver make it without filling up?
 var gasEfficiency = 25;
 var gaugeReading = 1/2;
 var tankCapacity = 20;

 var gallonsLeft = gasEfficiency * tankCapacity * gaugeReading;

 if (gallonsLeft >= 200){
  console.log("Yes, you can make it without stopping for gas!");
 } else {
  console.log("You only have " + gallonsLeft + " gallons of gas left in your tank, better get gas now while you can!");
 }

//Grade Letter Calculator
 //Grading system
 // A+ - 95 - 100
 // A - 90 - 94
 // B+ - 85 - 89
 // B - 80 - 84
 // C+ - 76 - 79
 // C - 73 - 75
 // D - 70 - 72
 // F - 0 - 69

 var studentGrade = 96;

 if (studentGrade >= 95 && studentGrade <= 100){
  console.log("You have earned a " + studentGrade + "%, which means you have earned an A+ in the class!");
 } else if (studentGrade >= 90 && studentGrade <= 94){
  console.log("You have earned a " + studentGrade + "%, which means you have earned an A in the class!")
 } else if (studentGrade >= 85 && studentGrade <= 89){
  console.log("You have earned a " + studentGrade + "%, which means you have earned a B+ in the class!")
 } else if (studentGrade >= 80 && studentGrade <= 84){
  console.log("You have earned a " + studentGrade + "%, which means you have earned a B in the class!")
 } else if (studentGrade >= 76 && studentGrade <= 79){
  console.log("You have earned a " + studentGrade + "%, which means you have earned a C+ in the class!")
 } else if (studentGrade >= 73 && studentGrade <= 75){
  console.log("You have earned a " + studentGrade + "%, which means you have earned a C in the class!")
 } else if (studentGrade >= 70 && studentGrade <= 72){
  console.log("You have earned a " + studentGrade + "%, which means you have earned a D in the class!")
 }else if (studentGrade >= 0 && studentGrade <= 69){
  console.log("You have earned a " + studentGrade + "%, which means you have earned an F in the class!")
 }

 //Movie Ticker Price
 var age = 18;
 var time = 4;

 