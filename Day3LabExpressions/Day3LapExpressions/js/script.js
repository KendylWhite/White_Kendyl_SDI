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


