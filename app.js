"use strict";

//SECOND GUESSING GAME

// I have the answer key and also another variable correctlyAnswered which acts a boolean to know when to show the correct answers
var answer = [1, 3, 7, 10];
var correctlyAnswered = false;
var userScoreCorrect = 0;
var totalNumberOfQuestions = 0;

// user gets 6 guesses before being told the correct answer
for (var numberOfGuesses = 0; numberOfGuesses < 6; numberOfGuesses++) {
  var userGuess = prompt(
    "Let's start out by playing an easy game.  I'm thinking of 4 numbers between 1-10.  Can you guess one of them?"
  );

  // Taking the user's answer and converting to a number
  userGuess = parseInt(userGuess);

  // Displaying user's guess in the console
  console.log(userGuess);

  //  The if statement checks for the answers in the array and also protects against junk inputs
  if (
    userGuess == answer[0] ||
    userGuess == answer[1] ||
    userGuess == answer[2] ||
    userGuess == answer[3]
  ) {
    alert("Holy smokes!  How in the world did you know that?");
    userScoreCorrect++;
    totalNumberOfQuestions++;
    correctlyAnswered = true;
    break;
  } else if (userGuess > 0) {
    alert("Close, but no cigar.");
    totalNumberOfQuestions++;
  } else if (userGuess === "" || userGuess === null) {
    alert("Don't be lame!  Please choose a number between 1-10");
  } else {
    alert("What are you doing??!!  Please choose a number between 1-10.");
  }
}

// After a correct answer we trigger our boolean variable to correct.  Therefore if that boolean is false we know that the user did choose the correct answer.
if (correctlyAnswered === false) {
  alert(
    "You're not very good at this good.  The correct answers are: " +
      answer[0] +
      ", " +
      answer[1] +
      ", " +
      answer[2] +
      ", " +
      answer[3]
  );
}

guessNumber();


//  1st GUESSING GAME EXERCISE-----------------------------------------------------------------------------------------


//Give the user their final score
alert("You answered " + userScoreCorrect + " correct out of " + totalNumberOfQuestions);

function guessNumber() {
  //  Loop to ask user up to 4 times to guess a number
  for (var numberOfGuesses = 0; numberOfGuesses < 4; numberOfGuesses++) {
    var userGuess = prompt(
      "Ok, the first game was easy.  Let's play again only this time I'm thinking of only 1 number between 1-10.  What number am I thinking of?"
    );
  
    // Taking the user's answer and converting to a number
    userGuess = parseInt(userGuess);
  
    // Displaying user's guess in the console
    console.log(userGuess);
  
    //  The number to guess is 5.  User receives higher or lower based on response.
    if (userGuess == 5) {
      userScoreCorrect++;
      totalNumberOfQuestions++;
      alert("Holy smokes!  How in the world did you know that?");
      break;
    } else if (userGuess == "" || userGuess == null) {
      alert("Please choose a number between 1-10");
    } else if (userGuess > 5) {
      totalNumberOfQuestions++;  
      alert("Nope!  Too high.  Guess a lower number.");
    } else if (userGuess < 5) {
      totalNumberOfQuestions++;
      alert("Nope!  Too low.  Guess a higher number");
    } else {
      alert("Please choose a number between 1-10.");
    }
  }
  
  // If the user does not guess correctly after 4 times it shows the answer.
  if (userGuess != 5) {
    alert("The number I was thinking of was 5!");
  }
  }














//COMMMENTED OUT THE PREVIOUS EXERCISE SO I COULD FOCUS ON THE GUESSING A NUMBER EXERCISE--------------------
// Ask user their name and respond with greeting
/* var guessedCorrectly = 0;
var userName = prompt("Hello!  What is your name?")
alert(`Nice to meet you ${userName}`);

console.log(`The user's name is ${userName}`);

var nameQuestion = prompt("Do you know what my name is?").toUpperCase()

if (nameQuestion == "NO" || nameQuestion == "N") {
    alert("That's OK.  My name is Don.  Nice to meet you.")
} else if (nameQuestion == "YES" || nameQuestion == "Y") {
    guessedCorrectly ++;
    alert("Wow!  I feel so special you know my name!")
} else { 
    alert("Hmmmmm, I don't understand.  Let's move on");
}

console.log(`Does the user know my name?  ${nameQuestion}`)

var favoriteFood = prompt("Do you know what my favorite food is?").toUpperCase()
if (favoriteFood == "NO" || favoriteFood == "N") {
    alert("Well since you don't know.  My favorite food is Tacos")
} else if (favoriteFood == "YES" || favoriteFood == "Y") {
    guessedCorrectly ++;
    alert("Wow!  You know so much about me!")
} else {
    prompt("Hmmmmm, I don't understand.  Let's move on")
}

console.log(`Does the user know my Favorite food?  ${favoriteFood}`)


// Telling the person how many correct guesses
if (guessedCorrectly == 2) {
alert(`Wow!  You really know me.  ${userName} it looks like you guessed correctly ${guessedCorrectly} times.`)
} else {
    alert(`You did OK.  But you can learn more about me`)
}

console.log(`The user guessed correctly ${guessedCorrectly} times.`) */
