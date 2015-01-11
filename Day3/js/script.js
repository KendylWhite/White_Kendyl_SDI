/*
Kendyl White
1/10/2015
Day 3 Coding
 */

// Single lined comment

//This is an alert
//alert("Testing to see if this is connected!");

//Console.log - allows programmers to see information
console.log("This is the console.");


// Declare a variable
// Use the keyword of var
var whatever1;  // Declaration of a variable
whatever1 = 42;  //Definition of a variable

console.log(whatever1);

// Declare and define a variable
var a = 2;
console.log(a);

//Simple math
a = a+3;
console.log(a)

var b;
b = a+3;
console.log(b);
console.log(a);

//Find our age
var yearBorn = 1996;

//age is calculated  by current year minus year born
var currentYear = 2015;

var age = currentYear - yearBorn - 1 ;
console.log(age);

//Math
//+, -, *, /

//Find area of a triangle
// 1/2 * base * height
var base = 8;
var height = 10;

var areaTriangle = .5 * base * height;
console.log(areaTriangle);

// Modulo - %
//Gives remainder
var remainder = 32%10;
console.log(remainder);

//Find if even or odd
// Modulo by 2 % 2
// 1 if it is odd
// 0 if even
var evenOrOdd = 67%2;
console.log(evenOrOdd);

//Assignment
/*
 = Assignment
 ++ Adds 1 to the variable
 -- Subtracts 1 from variable
 += #number Addition Assignment
 -= #number Subtraction Assignment
 /= #number Division Assignment
 *= #number Multiplication Assignment
 */

var counter = 1 ;
counter++; // counter = counter + 1;
console.log(counter);

counter--; // counter = counter - 1;
console.log(counter);

counter +=3; //counter = counter +3 ;
console.log(counter);

counter -= 2; //counter = counter - 2;
console.log(counter);

counter /= 2; //counter = counter / 2;
console.log(counter);

counter *= 4; // counter =counter * 4;
console.log(counter);


//String - is any text variable
// "is used at the begining and the end of the string"
//Used to distinguish between variable name and random text
// single quotes ' double quotes " are both used, BUT must match!

var kermit = "ligh green";

var frogName = "kermit";

console.log(frogName);

//Double quote or single quote?
// can use an escaping character  \ black slash in front of apostrophe

var phrase = 'I don\'t know!';
console.log(phrase);

// Multi-line by using \n - new line character
var phrase2 = "I don't know! \nYou never know!";
console.log(phrase2);

// Boolean
// kind of light switch - either on or off
// true or false - NOT "true" or "false"

var yes = true;

var nope = false;

//This is not a boolean
var wrong = "true";

// Order of Operations
// PEMDAS - Please excuse my  dear aunt sally
// Parenthesis, Exponents, Multiplication, Division, Addition, Subtraction

//Find quiz averages
var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 70;

//Average- add them and divide how many there are
var average = (quiz1 + quiz2 + quiz3) /3;
console.log(average);

//Don NOT overuse parenthesis
// var perimeter = ((length*2) + (width*2));

