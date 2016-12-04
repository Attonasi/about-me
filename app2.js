'use strict';

//The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no responses, with either .toUpperCase() or .toLowerCase() used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.

var userName = prompt('What is your name?');
console.log('The users name is ' +userName);

var correctAnswer = 0;

var questionsAnswersArray = ['Does Collin have any cats?', 'Does Collin have a job?', 'Does Collin have any idea what he is doing?', 'Is Collin going to get any sleep tonight?', 'Does Collin like riding the train?'];

var correctAnswersArray = [['no', 'n'], ['no', 'n',], ['no', 'n'], ['no', 'n'], ['no', 'n']];

var correctAnswerResponse = ['You are correct '+userName+' I have no smelly insufferable cats.', 'You are incorrect ' +userName+', Collin does not have a stupid job.', 'You are incorrect '+userName+', I dont have no idea what is happening.', 'You are incorrect ' +userName+ ', I have a 3 year old.', 'You are correct, with a 3 year old I should get ear plugs.'];

var wrongAnswerResponse = [userName+' you are incorrect I have no smelly insufferable cats.', 'you are incorrect ' +userName+', Collin does not have a stupid job.', 'you are incorrect '+userName+', I dont have no idea what is happening', 'You are incorrect ' +userName+ ', I have a 3 year old.', 'You can\'t be serious.'];

var response = [];

//question 1

alert('We are going to ask you a series of questions about Collin.');
function questionSeries1(){
  for(var k = 0; k < questionsAnswersArray.length; k++){

    var goodAnswer = true;

    while(goodAnswer){
      response[k] = prompt(questionsAnswersArray[k], 'yes, no, y, n').toLowerCase();

      if(response[k] ==='yes' || response[k] ==='no'|| response[k] ==='n'|| response[k] ==='y'){
        goodAnswer = !goodAnswer;
      }
    }

    if (response[k] === correctAnswersArray[k][0] || response[k] === correctAnswersArray[k][1]){
      alert (correctAnswerResponse[k]);
      correctAnswer+=1;
    }else {
      alert (wrongAnswerResponse[k]);
    }
    console.log(questionsAnswersArray +response[k]);
  }
}
questionSeries1();

//Question 6
function question2(){
  var correctGuessNumber = Math.floor(Math.random()*20+1);

  alert(userName+', you are going to guess a random number between 1 and 20. You have 4 chances to get it right.')

  console.log(correctGuessNumber);

  for (var i=0; i<4; i++) {
    var response6 = 'false';

    while (isNaN(response6)){
      response6 = parseInt(prompt('Guess a number between 1 and 20'));
    }

    console.log(response6);

    if (response6 === correctGuessNumber) {
      alert('You guessed '+correctGuessNumber+' correctly on try number ' +(i+1)+'.');
      i=10;
      correctAnswer+=1;
    }else if (response6 > correctGuessNumber){
      alert(response6 +' is too high! That was guess number '+(i+1)+'.');
    }else {
      alert(response6 +' is too low! That was guess number '+(i+1)+'.');
    }
    if (i===3){
      alert('You failed to guess the correct answer. The correct answer was '+correctGuessNumber+'.');
    }
  }
}
question2();

//Question 7

function question3(){
  alert(userName+ ', you are going to guess a country that Collin has been to. There are many right answers. You have 6 triest to get it right.');
  var countriesIHaveBeenTo = ['britain', 'germany', 'denmark', 'france', 'japan', 'thailand', 'kuwait', 'saudi arabia', 'iraq', 'afghanistan', 'hong kong'];
  var counter = 0;

  while (counter <6) {

    var locationGuess = prompt('Guess a country Collin has been to! This is guess number '+(counter+1)+'.').toLowerCase();

    console.log(locationGuess);

    for(var j = 0; j < countriesIHaveBeenTo.length; j++){
      if (locationGuess === countriesIHaveBeenTo[j]){
        alert('Yes, Collin has been to that country! That was guess number ' +(counter+1)+'.');
        correctAnswer+=1;
        j=10;
        counter = 10;
      }
    }
    counter+=1;
    console.log(counter);
  }
}
question3();

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
