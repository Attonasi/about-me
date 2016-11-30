'use strict';

//The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no responses, with either .toUpperCase() or .toLowerCase() used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.
var userName = prompt('What is your name?');
console.log('The users name is ' +userName);

var correctAnswer = 0;

//question 1

alert('We are going to ask you a series of questions about Collin');

var response1 = prompt('Does Collin have any cats?').toLowerCase();

if (response1 === 'yes' || response1 === 'y'){
  alert ('you are incorrect I dont have no stinking cats,');
}else if(response1 ==='no' || response1 === 'n'){
  alert('You are right '+userName+', I have no cats.');
}else{
  alert('yes or no ' + userName + '.');
}

console.log('Does Collin have any cats?  ' +response1);

//question 2
var response2 = prompt('Does Collin have a job?').toLowerCase();

if (response2 === 'yes' || response2 === 'y'){
  alert ('you are incorrect ' +userName+', Collin does not have a stupid job.');
}else if(response2 ==='no' || response2 === 'n'){
  alert('You are right ' +userName+', I have no job.');
}else{
  alert('yes or no ' + userName + '.');
}

console.log('Does Collin have a job?  ' +response2);

//question 3

var response3 = prompt('Does Collin have any idea what he is doing?').toLowerCase();

if (response3 === 'yes' || response3 === 'y'){
  alert ('you are incorrect '+userName+', I dont have no idea what is happening');
}else if(response3 ==='no' || response3 === 'n'){
  alert('You are right ' +userName+', I have no clue.');
}else{
  alert('yes or no ' + userName + '.');
}

console.log('Does Collin have any idea what he is doing?  ' +response3);

//question 4

var response4 = prompt('Is Collin going to get any sleep tonight?').toLowerCase();

if (response4 === 'yes' || response4 === 'y'){
  alert ('You are incorrect ' +userName+ ', I have a 3 year old.');
}else if(response4 ==='no' || response4 === 'n'){
  alert('You are correct, I should get ear plugs.');
}else{
  alert('yes or no ' + userName + '.');
}

console.log('Is Collin going to get any sleep tonight?  '+response4);

//question 5

var response5 = prompt('Does Collin like riding the train?').toLowerCase();

if (response5 === 'yes' || response5 === 'y'){
  alert ('You can\'t be serious.');
}else if(response5 ==='no' || response5 === 'n'){
  alert('Commuting is the worst.');
}else{
  alert('yes or no ' + userName + '.');
}

console.log('Does Collin like riding the train?  '+response5);

// Question 6
var correctGuessNumber = Math.floor(Math.random()*20+1);

alert(userName+', you are going to guess a random number between 1 and 20. You have 4 chances to get it right.')

console.log(correctGuessNumber);

for (var i=0; i<4; i++) {
  var response6 = parseInt(prompt('Guess a number between 1 and 20'));
  console.log(response6);

  if (response6 === correctGuessNumber) {
    alert('You guessed '+correctGuessNumber+' correctly on try number ' +(i+1)+'.');
    i=10;
    correctAnswer++;
  }else if (response6 > correctGuessNumber){
    alert(response6 +' is too high! That was guess number '+(i+1)+'.');
  }else {
    alert(response6 +' is too low! That was guess number '+(i+1)+'.');
  }
  if (i===3){
    alert('You failed to guess the correct answer. The correct answer was '+correctGuessNumber+'.')
  }
}

// Question 7
alert(userName+ ', you are going to guess a country that Collin has been to. There are many right answers. You have 6 triest to get it right.')
var countriesIHaveBeenTo = ['britain', 'germany', 'denmark', 'france', 'japan', 'thailand', 'kuwait', 'saudi arabia', 'iraq', 'afghanistan', 'hong kong'];
var counter = 0;

while (counter <6) {

  var locationGuess = prompt('Guess a country Collin has been to! This is guess number '+(counter+1)+'.').toLowerCase();

  console.log(locationGuess);

  for(var j = 0; j < countriesIHaveBeenTo.length; j++){
    if (locationGuess === countriesIHaveBeenTo[i]){
      alert('Yes, Collin has been to that country! That was guess number ' +counter+'.');
      correctAnswer++;
      j=10;
      counter = 10;
    }
  }
  counter++;
  console.log(counter);

}

if (correctAnswer === 7){
  alert('You got all 7 correct '+userName+'. I think you may a stalker');
}
if (correctAnswer === 6){
  alert('You got 6 correct '+userName+'. You did very well.');
}
if (correctAnswer === 5 || correctAnswer === 4){
  alert('You got '+correctAnswer+' correct '+userName+'. That was a mediocre effort.');
}
if (correctAnswer < 4){
  alert('You got '+correctAnswer+' correct '+userName+'. I appreciate the effort');
}


console.log(correctAnswer);
//document.write(response1 +' '+ response2 +' '+ response3+' '+ response4+' '+ response5);
