'use strict';

// Get data from the user

var userName = prompt("Hello!  What is your name?")
alert(`Nice to meet you ${userName}`);


var nameQuestion = prompt("Do you know what my name is?").toUpperCase()

if (nameQuestion == "NO" || nameQuestion == "N") {
    alert("That's OK.  My name is Don.  Nice to meet you.")
} else if (nameQuestion == "YES" || nameQuestion == "Y") {
    alert("Wow!  I feel so special you know my name!")
} else {
    prompt("Please answer the question Yes/No or Y/N")
}