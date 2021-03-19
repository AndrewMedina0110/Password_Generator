// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseletters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercaseletters = ["A","B","C"]
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var symbols = ["@","!",]


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
let characters = parseInt(
  prompt("How many characters in your password?")
console.log(characters))

if(characters < 8){
  alert("must be more than 8 characters");
}
else if(characters > 128){
  alert("must be less than 128 characters");
}

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//concat the array