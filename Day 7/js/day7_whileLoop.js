/*
 *Kendyl White
 *1/20/2015
 *While Loops
 */

//alert("Testing");

//Basic while loop

//The while loop, loops through a block of code as long as a condition is true.

/*
 *var i = 0;
 *while(condition){
    
Code that runs while condtion is true
incremental change to the counting variable -
OR infintie loop!!!
    
 }
 *
 */
var counter = 0; //Initializing counter

while (counter < 20) {
    //Code that will run as long as counter < 20
    console.log(counter + " Somethings just never end");
    
    //Change for the counter variable
    counter++;
    
}


//Do While Loop
//The code will run AT LEAST once before cheking the condition.

var i = 0;

do{
    //This code will run before the condtion is checked
    //It will also run as long as the condtion is ture
    console.log("The number is " + i);
    
    i++;
    
} while (i < 10);





