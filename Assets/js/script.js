// Assignment Code
var generateBtn = document.querySelector("#generate");




function pwLength(){

}

function charType(){

}

function recapParams(){

}
// Write password to the #password input
function writePassword() {
  password = generatePw();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function(event){
  pwLength(); //Prompts user for the length of the password and validates their input. 
  charType(); //Promots the user for numbers, letters, and special characters. Validates input, and populates array with possible characters.
  recapParams(); //Lets the user know the final parameters of their password.
  writePassword(); //Writes password to the screen.
});

