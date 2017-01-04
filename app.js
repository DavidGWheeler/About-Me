'use strict';

// Check if user is ready.
var answer1 = confirm('You\'re about to to make some guesses about Rob Hatfield. Are you ready?');

// Log user response for readiness. No quiz if user clicks 'Cancel'.
if (answer1 === true) {
  console.log('User has confirmed readiness.');
  alert('There are 5 Yes or No questions, so please answer accordingly.');

  var sleepGuess = prompt('Question 1: Do you think Rob has had more than six hours of sleep in the past two days? \(Y\/N\)');
  // Because he sure hasn't.
  console.log('User guessed: ' + sleepGuess);

  var motorcycleGuess = prompt('Question 2: Do you think Rob rides a motorcycle? \(Y\/N\)');
  // I was *this* close!
  console.log('User guessed: ' + motorcycleGuess);

  var montyPythonGuess = prompt('Question 3: Do you agree that three shall be the number thou shalt count, and the number of the counting shall be three? \(Y\/N\)');
  // Five is right out.
  console.log('User guessed: ' + montyPythonGuess);

  var anglophileGuess = prompt('Question 4: Do you think Rob also likes Red Dwarf and Doctor Who? \(Y\/N\)');
  // Warning: possible Anglophile detected.
  console.log('User guessed: ' + anglophileGuess);

  var seriousGuess = prompt('Question 5: Is Rob the sort of person to take himself seriously? \(Y\/N\)');
  // Not sure if serious.
  console.log('User guessed: ' + seriousGuess);

// guessCheck contains user response, then if defined, then if correct
  var guessCheck = [[sleepGuess],
    [motorcycleGuess],
    [montyPythonGuess],
    [anglophileGuess]
    [seriousGuess]];
// set the correct answers to these questions
  var correctAnswers = ['N','N','Y','Y','trick question'];

// Checking all responses in an iterative loop is a lot cleaner
  for (var i = 0; i < 5 ; i++) {
    console.log(guessCheck[i]);
    // check if answer was defined
    if (guessCheck[i,0]) {
      console.log('Question ' + i + ' is answered.' );
      guessCheck[i,1] = true;
      // then check if correct
      if (guessCheck[i,0,0] === correctAnswers[i]) {
        console.log('And is correct.');
        guessCheck[i,2] = true;
      } else {
        console.log('But is incorrect.');
        guessCheck[i,2] = false;
      }
    } else {
      console.log('Question ' + i + ' was not answered.');
      guessCheck[i,1] = false;
    }
  }

} else {
  // No quiz for you!
  console.log('User is NOT prepared.');
}
