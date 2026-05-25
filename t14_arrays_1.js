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
  if (pocketMoney < 4) {

  OUTPUT.innerHTML += "<p>Sorry you CAN'T afford a chocolate bar</p>";

} else {

  OUTPUT.innerHTML += "<p>You CAN afford a chocolate bar</p>";

  let change = calculateChange(pocketMoney, 4);

  OUTPUT.innerHTML += "<p>You will get $" + change + " change</p>";

}

  const CHOCO_FIELD = document.getElementById("chocoField");
  var chocoArray = ["You loath chocolate", "Chocolate is meh", "Chocolate is pretty goo", "Chocolate is Marajuana"];
  var choice = CHOCO_FIELD.value;
  OUTPUT.innerHTML += "You chose: "+chocoArray[choice]+"<br>";

}


function displayProduct(_name, _price){
    OUTPUT.innerHTML += "<p>" + _name + ": $" + _price + "</p>";
}



function getName() {
  var userName = document.getElementById("nameField").value;

  OUTPUT.innerHTML += "<h2>Hello " + userName + "!</h2>";
}

function calculateChange(_money, _price){

  return _money - _price;

}







function Start(){
displayProduct("Chocolate bar", 4);
displayProduct("Chips", 3);
displayProduct("Drink", 2.50);
getName()
for(var i=99; i>=0; i--){
  OUTPUT.innerHTML += (i+" bottles of age appropriate beverages on the wall<br>");
}
}
/****************************
Comment
****************************/
