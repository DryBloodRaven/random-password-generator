// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


function generatePassword() {
  // Generate password length. need to validate that it is between 8 and 128
  var passwordLength = window.prompt("How many characters would you like your password to contain?","8");
  console.log("passwordLength", passwordLength, typeof passwordLength);

  // confrim use of special characters.
  var specialChar = window.confirm("Click OK to confirm including special characters.");
  console.log("specialChar", specialChar, typeof specialChar);

  // confrim use of numeric characters.
  var numberChar = window.confirm("Click OK to confirm including numeric characters.");
  console.log("numberChar", numberChar, typeof numberChar);

  // confirm use of lowercase characters.
  var lowerChar = window.confirm("Click OK to confirm including lowercase characters.");
  console.log("lowerChar", lowerChar, typeof lowerChar);

  //  confrim use of uppercase characters.
  var upperChar = window.confirm("Click OK to confirm including uppercase characters.");
  console.log("upperChar", upperChar, typeof upperChar);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);