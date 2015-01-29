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
 var price = prompt("Please don't leave blank and only use numbers. \nWhat is the cost of the item:");
}

