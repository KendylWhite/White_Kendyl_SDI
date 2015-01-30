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
function cost(p, d){
 //Equation
 var discountedPrice = p * (d/100);
 //Discounted Price
 var totalPrice = price - discountedPrice;
 //Return the discounted price
 return totalPrice;
}

//Function Call
var returnedCost = cost(price, discount);
//Console.log
console.log("The final cost of an item that costs $" + price + " with a discount of " + discount + "% is $" + returnedCost + ".")

//Tests
//I typed in 50 & 20 and got 40.
//I typed in 30 & 40 and got 18.
//I typed in 2500 & 10 and got 2250.