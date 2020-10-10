// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays to randomiz
var specialChar = [
  "!",
  "@",
  "#",
  "$",
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
var lowerCase = [
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
var upperCase = [
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
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

//Takes user input for password criteria and turns result into an object
function setPassOptions() {
  var length = parseInt(
    prompt(
      "How many characters would you like in your password? (Enter a number between 8 and 128)"
    )
  );
  if (isNaN(length)) {
    alert("Must provide a number!");
    return;
  }
  if (length < 8 || length > 128) {
    alert("Must be a number between 8 and 128!");
    return;
  }

  var ifSpecialChar = confirm(
    "Would you like special characters in your password?"
  );

  var ifLowerCase = confirm(
    "Would you like lower case characters in your password?"
  );

  var ifUpperCase = confirm(
    "Would you like upper case characters in your password?"
  );

  var ifNumber = confirm("Would you like numbers in your password?");
  if (!ifSpecialChar && !ifLowerCase && !ifUpperCase && !ifNumber) {
    alert("Must select at least one character type!");
    return;
  }

  // Password Conditions Object & Properties
  var passConditionsObj = {
    length: length,
    ifSpecialChar: ifSpecialChar,
    ifLowerCase: ifLowerCase,
    ifUpperCase: ifUpperCase,
    ifNumber: ifNumber,
  };
  return passConditionsObj;
}

//Randomizes data in an array
function randomizer(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}

function generatePassword() {
  // Turns object(passConditionsObj) into variable
  var options = setPassOptions();
  // Creates blanks array for new password
  var resolve = [];
  //If properties in passConditionsObj are true add to possibleChar array. Else, dont.)
  var possibleChar = [];
  if (options.ifSpecialChar) {
    possibleChar = possibleChar.concat(specialChar);
  }
  if (options.ifLowerCase) {
    possibleChar = possibleChar.concat(lowerCase);
  }
  if (options.ifUpperCase) {
    possibleChar = possibleChar.concat(upperCase);
  }
  if (options.ifNumber) {
    possibleChar = possibleChar.concat(number);
  }
  //Randomize the possibleChar array and push it to the resolve array to create the new password by the length added by user
  for (var i = 0; i < options.length; i++) {
    var possiblePass = randomizer(possibleChar);
    resolve.push(possiblePass);
  }
  //Turns array into string
  return resolve.toString();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
