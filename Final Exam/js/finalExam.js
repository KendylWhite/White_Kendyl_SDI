/*
Kendyl White
SDI Campus
1/29/2015
Final Exam WPF
 */
//alert("Testing to see if it works");

//Create a file thar calculates a discounted sales price
//Prompt the user the cost of the item.
var price = prompt("I see that you're trying to buy something and you want the discounted price. \nWhat is the cost of the item:");
while(price === "" || isNaN(price)){
 var price = prompt("Please do not leave blank and only use numbers. \nWhat is the cost of the item:");
}

//Prompt the user the discount %.
var discount = prompt("Now that we have the price, what is the discount %? \nThis number should be between 0 and 100:");
while(discount === "" || isNaN(discount)){
 var discount = prompt("Please do not leave blank and only use numbers. \nWhat is the discount %? This number should be between 0 and 100:");
}

//Create a function that will calculate the discounted cost of a product.
//Use the cost and discount as parameters
function calcCost(p, d){
 //Equation
 var discountedPrice = p * (d/100);
 //Discounted Price
 var totalPrice = price - discountedPrice;
 //Return the discounted price
 return totalPrice;
}
