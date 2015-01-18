
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