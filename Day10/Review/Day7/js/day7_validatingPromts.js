/*
 *Kedyl White
 *1/20/2015
 *Validating Prompts
 */
//alert("Testing");

var userInput = prompt("Please type in your name:");

//Validating a prompt with a conditional.
if (userInput === "") {
    //User did not type anything in
    userInput = prompt("Please do not leave blank, Type in your name:");
}

//Instead use a while loop!
//Check the input multiples as many as it takes

var firstName = prompt("Please type in your first name:");

while(firstName === ""){
    //The user typed in nothing
    //Reprompt for frst name
    firstName = prompt("Please type in your first name and DO NOT leave blank:");
    
}


//Test to see if it is a number
//isNaN() - tests what is inside of (). Is it not a number?
//Numbers return false
//Everything else retrurns true

console.log(isNaN("Monkey")); //Returns true
console.log(isNaN(7)); //Returns false

//Lets ask the user their age
var age = prompt("Please enter yout age:");

//Validate that the user typed in a number
while (isNaN(age) || age === "") {
    //This code runs anytime that the age is not a number
    //Report the user for a number
    age = prompt("Only use numbhers, please enter your age:");
    
}



var choice = prompt("Please type in yes or no:");

//Convert to lower case
choice = choice.toLowerCase();

while (choice != "yes" && choice != "no") {
    
    choice = prompt("Please type in yes or no!");
}














