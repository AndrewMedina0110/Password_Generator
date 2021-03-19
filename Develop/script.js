// Assignment Code

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}


//variables
let lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let symbols = ["@","!","~","`","#","$","%","^","&","*","(",")","-","_","=","+","{","}","[","}","|",":",";","<",">",".","?"];
let inputarry = [];



function generatePassword(){
passwordLenght = parseInt (prompt("How many chararters is your password?"));
// this if statement discribes how short or long the password can be.
if(passwordLenght < 8){
  alert("must be more than 8 characters");
  return;
}
else if(passwordLenght > 128){
  alert("must be less than 128 characters");
  return;
}
//These stings are questions that have a confirm click box in order to create the password.
uppercaseLenght = confirm("Do you want any uppercase letters?");
lowercaseLenght = confirm("Do you want anyy lowercase letters?");
numbersLenght = confirm("Do you want any numbers?");
symbolsLenght = confirm("Do you want any symbols?");





//concatenates the arrays of two stings arguments in order to make it true. 

if(uppercaseLenght === true){
  inputarry = inputarry.concat(upper);
}
if(lowercaseLenght === true){
  inputarry = inputarry.concat(lower);
}
if(numbersLenght === true){
  inputarry = inputarry.concat(numbers);
}
if(symbolsLenght === true){
  inputarry = inputarry.concat(symbols);
}
console.log(inputarry);

let paswrd = "";
// the for loop generates the i to equal 0 therefor password is a random number multiplied by the inputarray 

for (let i = 0; i < passwordLenght; i++) {
 let seleccara = Math.floor(Math.random()*inputarry.length);
 seleccara = inputarry[seleccara]; 
 paswrd = paswrd.concat(seleccara);
console.log(paswrd);
}
return paswrd;
}

