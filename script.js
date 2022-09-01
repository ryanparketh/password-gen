// Assignment code here
// create lets for characters that can be used
let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Z', 'X', 'Y', 'Z'];
let special = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let selection = [];

//create prompt for password
let length = parseInt(
    prompt('How many characters would you like your password to be?')
);
//create input valitation for limits for characters
while (length <=8 || length >= 128) {
    window.alert('Password length cannot be shorter then 8 characters and be longer than 128 characters');
    return null;
}

function writePassword(){
let lowercaseChoice = window.confirm ('Click OK to include lowercase characters');
let uppercaseChoice = window.confirm ('Click OK to include uppercase characters');
let specialChoice = window.confirm('Click OK to include special characters');
let numberChoice = window.confirm ('Click OK to include number characters');
}

if (lowercaseChoice){
    selection.concat(lowerCase)
}
if(uppercaseChoice){
    selection.concat(upperCase)
}
if(specialChoice){
    selection.concat(special)
}
if (numberChoice){
    selection.concat(numbers)
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