
 /*
Kendyl White
SDI Campus
1/27/2015
Pizza
 */
//alert("Testing to see if it works");

 //Calculate how much pizza cost per sq in and how much per sclice

 //Prompt the user
 //radius of pizza
 //cost of pizza
 //# of slice per pizza

 var pizzaRadius = prompt("What is the radius od your pizza?");
 //Validate prompt
 while(pizzaRadius === "" || isNaN(pizzaRadius)){
  //reprompt the user
  pizzaRadius = prompt("Please do not leave blank and only use numbers. \nWhat is the radius of your pizza?")
 }

 //do while validation
 do{
  //prompt the user
  var pizzaCost = prompt("How much does your pizza cost in total?");

 }while(pizzaCost === "" || isNaN(pizzaCost))

 var pizzaSlices = prompt("How many slices are in your pizza?");

 while(pizzaSlices === "" || isNaN(pizzaSlices)){
  pizzaSlices = ("Please do not leave blank and only use numbers. \nHow many slices are in your pizza?");
 }


 //Function call that starts the lordFunction
 var results = lordFunction(pizzaRadius, pizzaCost, pizzaSlices);

 //console log
 console.log("Your pizza per square inch costs $" + results[0] + " and that comes out to $" + results[1] + " total.")


 //Create a function that will start the other functions

 function lordFunction(radius, cost, slices){

  //Calculate the area
  var area = pizzaArea(radius);

  //Calculate the cost per area
  var areaCost = pizzaSqInCost(cost, area);

  //Calculate the price per slice
  var slicePrice = pricePerSlice(cost, area)

  //return area cost and slice per price
  return[areaCost, slices];


 }



 //Create a function that calculates the area of the pizza
 function pizzaArea(r){
  //area PI * r* r
  var area = Math.PI * r * r;
  return area;
 }


 //Create a function that calculates the price per sq in of pizza
 function pizzaSqInCost(price, area){
  //price / area
  var costPerIn = price / area;
  //Round to 2 decimal places
  costPerIn = costPerIn.toFixed(2);
  return costPerIn;
 }


 //Function that calculates the price per slice
 function pricePerSlice(price, slice){
  //price / slice
  var  costPerSlice = price / slice;
  costPerSlice = costPerSlice.toFixed(2);
  return costPerSlice;
 }