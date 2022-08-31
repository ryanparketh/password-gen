// Assignment code here
// create lets for characters that can be used
let lowerCase =['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Z', 'X', 'Y', 'Z'];
let special = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//create limits for length of character 8-128

//create input valitation for limits for characters
if (length > 128){
    alert('Password length cannot be longer than 128 characters');
    return null;
}

if (length < 8){
    alert('Password length cannot be shorter than 8 characters')
    return null;
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