
 /*
Kendyl White
SDI Campus
1/15/2015
Logical Operators
 */

//alert("Testing to see if it works");

 /*
 true && true = true
 true && false = false
 false && true = false
 false && false = false

 true || true = true
 true || false = true
 false || true = true
 false || false = false

 !(true) = false
 !(false) = true
  */

 //if the price of the 3Ds is less than budget lets buy it
//AND if our Paycheck is over 500

 var budget = 300;
 var dsPrice = 169;
 var paycheck = 600;

 if(dsPrice < budget && paycheck > 500){
  console.log("Buy the 3Ds!");

 } else{
  console.log("Do not buy the 3Ds! Because you are broke!");

 }


//Lets buy a smart tv if it less than our budget OR we won the lottery

 var tvPrice = 540;
 var tvBudget= 500;
 var wonLottery= true;

 if(tvPrice < tvBudget || wonLottery){

  console.log("Let's go buy a tv!");

 } else {

  console.log("Stick with your small tv!");
 }
