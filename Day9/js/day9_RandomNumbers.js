/*
 *Kendyl White
 *1/24/2015
 *Random Numbers
 */
//alert("Testing");

//Create varibales for min and max value
var min = prompt("Please enter a min value:");

//Validate min prompt
while(isNaN(min) || min === ""){
    //Reprompt the user for correct information
    min = prompt("Please do not leave blank and only use numbers. \nWhat is the min value?")
}

var max = prompt("Please enter a max value:");

//Validtae max prompt
while(isNaN(max) || max === "" || Number(max) <= Number(min)){
    //Reprompt the user for correct information
    
    if (isNaN(max)) {
        max = prompt("Please only use numbers. \n What is the max value:");
    } else if (max === "") {
        max = prompt("Please do not leave blank. \nWhat is the max value:");
    } else{
        max = prompt("Max value must be greater than min value. \nWhat is the max value?");
    }
    max = prompt("Please do not leave blank and only use numbers. \nWhat is the max value?")
}

//Create function
function randomizer(mn, mx) {
    
    //generate our random number
    var randomNum = Math.round(Math.random() * (mx - mn) + Number(mn));
    
    //Return that random number to our main code
    return randomNum;

}

//Function call BUT create a variable to catch the return value
var ranNum = randomizer(min, max);
console.log("Your random number between " + min + " and " + max + " is " + ranNum + ".");


//15 random numbers between our min and max
//Create for loop
for(var i = 0; i < 15; i ++){
    console.log(randomizer(min, max));
    
}
