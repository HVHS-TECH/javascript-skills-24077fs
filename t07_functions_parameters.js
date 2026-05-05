/****************************
Name of task:t07_functions_parameters
****************************/
console.log("Running t07_functions_parameters.js")

//Variables
var user = "Finn"
var pocketmoney = 4546;
var age = 15;
var yearborn = 2011;



/**************************** 
Main Code


****************************/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");







/****************************
Functions
****************************/






/****************************
Comment
****************************/
console.log("Hi " + user)
console.log("As of "+"today "+"you are "+age+" years old.")
console.log("You were born in "+yearborn)
console.log("In 10 years you will be "+(age+10)+" years old")
console.log("You have "+pocketmoney+ " dollars")
console.log("You spend half of your money, now you have "+(pocketmoney/2))
pocketmoney = pocketmoney/2;
console.log("Then you get $3, now you have "+(pocketmoney+3))



function displayProduct(_name, _price){

OUTPUT.innerHTML += "<p>" + _name+": " + "$"+ _price+"</p>";
}

displayProduct("Chocolate Bar", "4")

displayProduct("Chips", "3")

displayProduct("Drink", "2.50")

