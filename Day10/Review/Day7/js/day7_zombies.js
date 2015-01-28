/*
 *Kendyl White
 *1/20/2015
 *Zombie Attack
 */
//alert("Beware of Zombies");

//Zombie Attack
//There is a zombie at Full Sail.
//It can bite 4 people a day and turn them into zombies
//The CDC wants to know how many zombies there will be in 8 days

var numZombies = 1; //How many zombies do we have
var numBites = 4; //Number of bites per zombie per day
var days = 8; //Number of days
var dayTakes = 0
/*
for (var i = 1; i <= days; i ++) {
    //How many new zombies get made AND when do they go bite people
    //They get bitten and the next day they can bite
    
    //New zombies made everyday
    var newZombies = numBites * numZombies;
    
    //Update the total number of zombies at the end of the day
    numZombies += newZombies;
    
    //Report at the end of the day
    console.log("There are " + numZombies + " zombies at the end of day #" + i + "!");
    
}
*/


//How many days will it take to reach a million zombies?

while(numZombies <= 1000000){
    
    //New Zombies
    var newZombies = numZombies * numBites;
    
    //How many zimbies we have?
    numZombies += newZombies;
    
    //Add 1 to the total number of days it takes
    dayTakes ++;
    
}

console.log("It will take " + dayTakes + " days to reach 1 million zombies.");




