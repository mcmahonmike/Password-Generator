// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphaUp = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var alphaLow = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var specialCharacters = ['!', '\"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', "/", ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', "`", "{", '|', "}", "~"];
var numberArray = ['0', '0', '1', '1', '2', '2', '3', '3', '4', '4', '5', '5', '6', '6', '7', '7', '8', '8', '9', '9', ]

// Write password to the #password input
function generatePassword() {

let passwordLength
var passwordIncludes = []

 
  var passwordLengthPrompt = prompt('How many characters would you like your password to contain?')
 
  var passwordLengthResponse = passwordLengthPrompt.valueOf()
  
  if (passwordLengthResponse < 8 || passwordLengthResponse > 128) {
    //If password incorrect length, show alert
    alert('Password must be between 8 and 128 characters, please try again');
    //Then restart
    return generatePassword();
  } else {   
    passwordLength = passwordLengthPrompt.valueOf()
    
    var UppercaseSelect = confirm('Would you like the password to contain upper case letters? Click Ok to Confirm or Cancel to abstain.')
   
    if (UppercaseSelect) {
      passwordIncludes.concat(alphaUp);     
    }

    var LowercaseSelect = confirm ('Would you like the password to contain lower case letters? Click Ok to Confirm or Cancel to abstain')
  
    if (LowercaseSelect) {
      passwordIncludes.concat(alphaLow);
    }
    
    var specialCharacterSelect = confirm ('Would you like the password to contain special characters? Click Ok to confirm or Cancel to abstain')
    
    if (specialCharacterSelect) {
     passwordIncludes.concat(specialCharacters);
    }

    var numberSelect = confirm ('Would you like the password to contain numbers? Click OK to confirm or Cancel to abstain.')

    if (numberSelect){
      passwordIncludes.concat(numberArray);
    }
 
    var characterContains = UppercaseSelect + LowercaseSelect + specialCharacterSelect + numberSelect

    if (characterContains === 0) {
      alert('You must select characters for the password, please select an option.')
      return generatePassword();
    }
     console.log(passwordIncludes)
  }

 // for (i = 0; i < passwordLength; i++) {
    //var addItem = function (){}
 // var characterLength = math.floor(math.random() * passwordIncludes.length)

  //}

  
}
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
