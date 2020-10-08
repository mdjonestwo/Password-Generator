// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays to randomize 
let specialChar = [
  "!",
  "@",
  "#",
  "4",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "+",
  "_",
  "+",
  "~",
  "?",
];

let lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let number = [
  "1", 
  "2",
  "3", 
  "4",
  "5",
  "6", 
  "7", 
  "8", 
  "9",
  "0"
];

// Questions for user
let lengthOfPass = prompt('How many characters would you like in your password? (Enter a number between 8 and 128)')

let ifSpecialChar = confirm("Would you like special characters in your password?");
let ifLowerCase = confirm("Would you like lower case characters in your password?");
let ifUpperCase = confirm("Would you like upper case characters in your password?")
let ifNumber = confirm("Would you like numbers in your password?");


randomFunc = {
  Loe
}



generatePassword() {

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
