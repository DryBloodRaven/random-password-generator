// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

function generatePassword() {
  // Generate password length. need to validate that it is between 8 and 128
  passwordLength = window.prompt("How many characters would you like you password to contain?", "8");
  // Validate response
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Invalid character length. Please choose a number between 8 and 128. Thank you.");
    return generatePassword();
  }
  if (Number.isNaN(passwordLength)) {
    window.alert("Invalid format. Please choose a number between 8 and 128. Thank you.");
    return generatePassword();
  }

  // Select character parameters
  var specialConfirm = window.confirm("Click OK to confirm including special characters.");

  var numberConfirm = window.confirm("Click OK to confirm including numeric characters.");

  var lowerConfirm = window.confirm("Click OK to confirm including lowercase characters.");

  var upperConfirm = window.confirm("Click OK to confirm including uppercase characters.");

  // Validate that at least 1 character parameter was selected
  if (!specialConfirm && !numberConfirm && !lowerConfirm && !upperConfirm) {
    window.alert("Invlaid selection. You must include at least 1 character type");
    return generatePassword();
  }
}


generatePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);