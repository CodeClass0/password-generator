// Assignment Code
var generateBtn = document.querySelector("#generate");
var finalPool = [];
var characters = [];
var passwordLength;
var pool = {
  upperLetters: ["A","B",'C','D','E','F','G','H','I','J','K','L','M','N','O',
  'P','Q','R','S','T','U','V','W','X','Y','Z'],
  lowerLetters: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
  'p','q','r','s','t','u','v','w','x','y','z'],
  numbers: [1,2,3,4,5,6,7,8,9,0],
  special: ['!','@','#','$','%','^','&','*','-','_'],
};
var passwordArray = [];
var password;



function pwLength(){

}

function charType(){
  var hasAtLeastOne = false;

  while (hasAtLeastOne == false){ //This while loop is what will restart the question prompts if a user doesn't choose a type.
    var answer = null; 
  
    //Check if user wants letters.
    answer = prompt("Would you like lowercase letters in your password? y/n");
    if (answer == "y"){
      characters.push("lowercase letters");   //This adds the selection to an array that's called when we recap the choices later.
      for (var i = 0; i < pool.lowerLetters.length; i++){ //here we add the content from the letters array within the pool object to the final pool.
        finalPool.push(pool.lowerLetters[i]);
      }
      hasAtLeastOne = true;
      alert("You chose 'y'! Lowercase letters will be included in your password.");
    } else if (answer == "n"){
      alert("You chose 'n'! No lowercase letters will be included in your password.");
    }
    while (answer !== 'y' && answer !== 'n' && answer !== null){
      alert("Please enter 'y' or 'n' only!");
      answer = prompt("Would you like lowercase letters in your password? y/n");
    }

    var answer = null; 
    //Check if user wants letters.
    answer = prompt("Would you like uppercase letters in your password? y/n");
    if (answer == "y"){
      characters.push("uppercase letters");   //This adds the selection to an array that's called when we recap the choices later.
      for (var i = 0; i < pool.upperLetters.length; i++){ //here we add the content from the letters array within the pool object to the final pool.
        finalPool.push(pool.upperLetters[i]);
      }
      hasAtLeastOne = true;
      alert("You chose 'y'! Uppercase letters will be included in your password.");
    } else if (answer == "n"){
      alert("You chose 'n'! No uppercase letters will be included in your password.");
    }
    while (answer !== 'y' && answer !== 'n' && answer !== null){
      alert("Please enter 'y' or 'n' only!");
      answer = prompt("Would you like uppercase letters in your password? y/n");
    }
    //Check if user wants numbers.
    answer=null;
    answer = prompt("Would you like numbers in your password? y/n");
    if (answer == "y"){
      characters.push("numbers");
      for (var i = 0; i < pool.numbers.length; i++){
        finalPool.push(pool.numbers[i]);
      }
      hasAtLeastOne = true;
      alert("You chose 'y'! Numbers will be included in your password.");
    } else if (answer == "n"){
      alert("You chose 'n'! No Numbers will be included in your password.");
    }
    while (answer !== 'y' && answer !== 'n' && answer !== null){
      alert("Please enter 'y' or 'n' only!");
      answer = prompt("Would you like Numbers in your password? y/n");
    }

    //Check if user wants special characters
    answer=null;
    answer = prompt("Would you like special characters (!,@,#,$,%,^,&,*) in your password? y/n");
    if (answer == "y"){
      characters.push("special");
      for (var i = 0; i < pool.special.length; i++){
        finalPool.push(pool.special[i]);
      }
      hasAtLeastOne = true;
      alert("You chose 'y'! Special characters will be included in your password.");
    } else if (answer == "n"){
      alert("You chose 'n'! No special characters will be included in your password.");
    }
    while (answer !== 'y' && answer !== 'n' && answer !== null){
      alert("Please enter 'y' or 'n' only!");
      answer = prompt("Would you like special characters (!,@,#,$,%,^,&,*) in your password? y/n");
    }

    //If user still hasn't selected a type, they're alerted and the prompts restart.
    if (hasAtLeastOne == false){
      alert("You must choose at least one character type!");
    }
  }
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

