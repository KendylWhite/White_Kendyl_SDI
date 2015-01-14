/*
Kendyl White
1/10/2015
Day 3 Lab
 */

//Slice of pie part 1
var slicesPerPizza = 8;
var peopleAtTheParty = 10;
var pizzasOrdered = 4;

//multiply slices per pizza * pizzas ordered / people at the party
var numberOfSlicesPerPerson = slicesPerPizza * pizzasOrdered / peopleAtTheParty
console.log("Each person ate " + numberOfSlicesPerPerson + " slices of pizza at the party.");


//Slice of pie part II
var totalSlices = slicesPerPizza * pizzasOrdered;
var sparkySlices = totalSlices % peopleAtTheParty
console.log("Sparky	got " + sparkySlices + " slices of pizza.");


//Average shopping bill
var week1 = 106;
var week2 = 30;
var week3 = 66;
var week4 = 22;
var week5 = 96;

//Total amount spent and average per week spent on groceries
var totalGroceryPrice = week1 + week2 + week3 + week4 + week5
var averageGroceryPrice = totalGroceryPrice/5
console.log("You have spent a total of $" + totalGroceryPrice + " on groceries over 5 weeks. That is an average of $" + averageGroceryPrice + " per week.");