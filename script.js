// Assignment code here
// create lets for characters that can be used
let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Z', 'X', 'Y', 'Z'];
let special = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let selection = [];
var generateBTn;


function generatePassword(){
    let length = parseInt(
        prompt('How many characters would you like your password to be?')
    );
    if(Number.isNaN(length)){
        alert('Password length must be a number');
    }
    if(length < 8){
        alert('Password must contain at least 8 characters');
    }
    if(length > 128){
        alert('Password must contain less then 128 characters');
    }

let lowercaseChoice = window.confirm ('Click OK to include lowercase characters');
let uppercaseChoice = window.confirm ('Click OK to include uppercase characters');
let specialChoice = window.confirm('Click OK to include special characters');
let numberChoice = window.confirm ('Click OK to include number characters');
}

if (lowerCase){
    selection.concat(lowerCase)
}
if(upperCase){
    selection.concat(upperCase)
}
if(special){
    selection.concat(special)
}
if (numbers){
    selection.concat(numbers)
}
function writePassword(){
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);