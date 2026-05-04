/****************************
Name of task:t06_functions
****************************/
console.log("Running t05_Javascript_and_HTML.js")

//Variables
var user = "Finn"
var pocketmoney = 4546;
var age = 15;
var yearborn = 2011;



/**************************** 
Main Code


****************************/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "<p>Added by JavaScript</p>";
OUTPUT.innerHTML += "<p>Hello " + user + "</p>";
OUTPUT.innerHTML += "<p>Second Paragraph line.</p>";
OUTPUT.innerHTML += "<p>Third Paragraph line.</p>";






/****************************
Functions
****************************/


function welcome(){

OUTPUT.innerHTML += "<p>Less code matters</p>"
}
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
welcome()
welcome()

