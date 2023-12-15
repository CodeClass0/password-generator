// Assignment Code

//Declare global variables
var generateBtn = document.querySelector("#generate");
var finalPool = []; //This will be what the final character types are stored in as chosen by the user.
var characters = []; //Used for outputting their selections before generating the password.
var passwordLength; 

//this object has all the possible characters, and as I ask teh user what character type they want, I'll pull elements
//from this object to fill out the finalPool array. 
var pool = { 
  upperLetters: ["A","B",'C','D','E','F','G','H','I','J','K','L','M','N','O',
  'P','Q','R','S','T','U','V','W','X','Y','Z'],
  lowerLetters: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
  'p','q','r','s','t','u','v','w','x','y','z'],
  numbers: [1,2,3,4,5,6,7,8,9,0],
  special: ['!','@','#','$','%','^','&','*','-','_'],
};
var passwordArray = []; //Used for holding the output from the loop that randomly chooses elements of final Loop before being written as a string.
var password;



function pwLength(){ //Get and validate user input for pasword length.
  var isValidAnswer = false;

  while (isValidAnswer == false){
    passwordLength = prompt("How many characters should the password be? Select between 8 and 128.");
    if (passwordLength < 8){
      alert("You chose an invalid number! Please select between 8 or 128!" + " " + isValidAnswer);
      passwordLength = null;
    } else if(passwordLength > 128){
      alert("You chose an invalid number! Please select between 8 or 128!");
      passwordLength = null;
    } else if (!isNaN(passwordLength) == false){
      alert("You chose an invalid number! Please select between 8 or 128!");
      passwordLength = null;
    } else{
      isValidAnswer = true;
    }
  }
}

function charType(){ //Get and validate character types from user.
  var hasAtLeastOne = false;

  while (hasAtLeastOne == false){ //This while loop is what will restart the question prompts if a user doesn't choose a type.
    var answer = null; 
  
    //Check if user wants letters.
    answer = prompt("Would you like lowercase letters in your password? y/n");
    if (answer == "y"){
      characters.push("lowercase letters");   //This adds the selection to an array that's used when we recap the choices later.
      
      //This loops through the lowercase letters array of the pool object, and writes each element to the finalPool array.
      for (var i = 0; i < pool.lowerLetters.length; i++){ 
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
      characters.push("uppercase letters");   
      for (var i = 0; i < pool.upperLetters.length; i++){
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

function recapParams(){ //read back the selections made by the user.
  if (characters.length == 4){
    alert("Your password will contain " + passwordLength + " characters, and it will include uppercase and lowercase letters, numbers, and special characters.");
  } else if (characters.length == 3){
    alert("Your password will contain " + passwordLength + " characters, and it will include " + characters[0] + ", " + characters[1]  + " and " +characters[2]+ ".");
  } else if (characters.length == 2){
    alert("Your password will contain " + passwordLength + " characters, and it will include " + characters[0] + " and " + characters[1]);
  } else if(characters.length ==1){
    alert("Your password will contain " + passwordLength + " characters, and it will only include " + characters[0] + ".");
  } 
}


//using passwordLength for the number of iterations through a loop that will randomly select
//one element from the finalPool array, and then write the contents of that array to a single string with .join.
function generatePw(){ 
  var random;

  //I'm using password length for the number of times to loop through and generate a random number up to the length of the finalPool array.
  //That number references an item inside the finalPool array, which is the npushed to the passwordArray. 
  //Once done looping, passwordArray is joined into a string and given back to the writePassword function that called it.
  for (var i=0; i<passwordLength; i++){
    passwordArray.push(finalPool[Math.floor(Math.random()*finalPool.length)]);
  }
  password=passwordArray.join("");
  console.log(password);
  return password;
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

