# Password-Generator Challenge Assignment

## Overview
This page is a simple password generator which will generate a password for the user after the user clicks on the **Generate Password** button and responds to a series of prompts.

## Password Prompts
* #### How many characters prompt:
 
This is the initial prompt when the user clicks the **Generate Password** button. The prompt asks the user "How many characters would you like your password to contain?" and the user must input a number between 8 and 128. If the user inputs anything outside of that range an alert window will display "Password must be between 8 and 128 characters, please try again" and the generate password function will restart and the window prompt will again ask the user to input a number.

* #### Password include Upper Case Letters/Lower Case Letters/Special Characters/Numbers prompt

After choosing how many characters the user wants for the password, the next prompt is a `.window` prompt that asks the user "Would you like the password to contain Upper Case letters? Click Ok to Confirm or Cancel to abstain". If the user clicks "Ok" the `if (UppercaseSelect)` function will run and then it will add the upper case letters array into the empty `passwordIncludes = []` variable by running `passwordIncludes.push(...alphaUp);`. With `alphaUp` array containing all possible Upper case letters. And if they click "Cancel" the password will not contain any upper case letters. This similar `if` statement will run for `if (LowercaseSelect)` `if (specialCharacterSelect)` and `if (numberSelect)` in succession. All allowing the user to select if they want any of the afore mentioned conditons to be added to the users password or not, then pushing those conditions into the `passwordIncludes` array. If the user does not select any characters (Upper case/Lower case Lettes, Special Characters or numbers) an alert window will alert the user with a message: "You must select characters for the password, please select an option." Then will run `return generatePassword()` and will restart the function until the user selects a character option.

* #### For Loop to Generate the Random Password

Finally once the user has inputed all of the characters that they want to be included in the random password, the `for` loop will generate a random password with the input provided. The for loop will loop through the password length by running `(i = 0; i < passwordLength; i++)`. Then by creating the variable inside the loop `var randomIndex = Math.floor(Math.random() * passwordIncludes.length);` we add random characters to the password. Then by adding `var randomCharacter = passwordIncludes[randomIndex]` We have our randomly generated password and then push the password to the generator with `finalPassword.push(randomCharacter)` and finally `return finalPassword.join('')` to have the password run with out any spaces between characters.
