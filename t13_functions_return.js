/****************************
Name of task:t11_data_types
****************************/
console.log("Running t13_functions_return.js")

//Variables




/**************************** 
Main Code


****************************/
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

/****************************
Functions


function start() {
console.log("Hi " + userName)
console.log("As of "+"today "+"you are "+Age+" years old.")
console.log("You were born in "+yearborn)
console.log("In 10 years you will be "+(age+10)+" years old")
console.log("You have "+pocketmoney+ " dollars")
console.log("You spend half of your money, now you have "+(pocketmoney/2))
pocketmoney = pocketmoney/2;
console.log("Then you get $3, now you have "+(pocketmoney+3))

}
****************************/


function getFormInput(){
  const NAME_FIELD = document.getElementById("nameField");
  var userName = NAME_FIELD.value;


  const AGE_FIELD = document.getElementById("ageField");
  var Age = AGE_FIELD.value;
  OUTPUT.innerHTML += "<p>You are  "+Age+" years old</p>";
  
     
  const MONEY_FIELD = document.getElementById("moneyField");
  var pocketMoney = MONEY_FIELD.value;
  OUTPUT.innerHTML += "<p>You have $"+pocketMoney+" dollars.</p>";
  if(pocketMoney>=4){ 
    OUTPUT.innerHTML += "<p>A choclate bar costs 4$<br> You can afford a chocolate bar<p>"
  } else{
  OUTPUT.innerHTML += "<p>A choclate bar costs 4$<br> You can't afford a chocolate bar<p>"
  }  
}

function calculatePay(_hours){

var pay = _hours * 18.80;
pay = pay - (pay * 0.105);
pay = pay - (pay * 0.04);
pay = pay + 10;
return pay;

}



var mondayPay = calculatePay(8);
var tuesdayPay = calculatepPay(6);

OUTPUT.innerHTML += "This Weeks pay:<br>"
OUTPUT.innerHTML += "Monday: $"+mondayPay+"<br>"
OUTPUT.innerHTML += "Monday: $"+tuesdayPay+"<br>"


/****************************
Comment
****************************/



