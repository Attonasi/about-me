'use strict';

//The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no responses, with either .toUpperCase() or .toLowerCase() used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.
var userName = prompt('What is your name?');
console.log('The users name is ' +userName);

var response1 = prompt('Does Collin have any cats?').toLowerCase();

if (response1 === 'yes' || response1 === 'y'){
  alert ('you are incorrect I dont have no stinking cats,');
}else if(response1 ==='no' || response1 === 'n'){
  alert('You are right '+userName+', I have no cats.');
}else{
  alert('yes or no ' + userName + '.');
}

console.log('Does Collin have any cats?  ' +response1);

var response2 = prompt('Does Collin have a job?').toLowerCase();

if (response2 === 'yes' || response2 === 'y'){
  alert ('you are incorrect ' +userName+', Collin does not have a stupid job.');
}else if(response2 ==='no' || response2 === 'n'){
  alert('You are right ' +userName+', I have no job.');
}else{
  alert('yes or no ' + userName + '.');
}

console.log('Does Collin have a job?  ' +response2);

var response3 = prompt('Does Collin have any idea what he is doing?').toLowerCase();

if (response3 === 'yes' || response3 === 'y'){
  alert ('you are incorrect '+userName+', I dont have no idea what is happening');
}else if(response3 ==='no' || response3 === 'n'){
  alert('You are right ' +userName+', I have no clue.');
}else{
  alert('yes or no ' + userName + '.');
}

console.log('Does Collin have any idea what he is doing?  ' +response3);

var response4 = prompt('Is Collin going to get any sleep tonight?').toLowerCase();

if (response4 === 'yes' || response4 === 'y'){
  alert ('You are incorrect ' +userName+ ', I have a 3 year old.');
}else if(response4 ==='no' || response4 === 'n'){
  alert('I should get ear plugs.');
}else{
  alert('yes or no ' + userName + '.');
}

console.log('Is Collin going to get any sleep tonight?  '+response4);

var response5 = prompt('Does Collin like riding the train?').toLowerCase();

if (response5 === 'yes' || response5 === 'y'){
  alert ('You can\'t be serious.');
}else if(response5 ==='no' || response5 === 'n'){
  alert('Commuting is the worst.');
}else{
  alert('yes or no ' + userName + '.');
}

console.log('Does Collin like riding the train?  '+response5);

document.write(response1 +' '+ response2 +' '+ response3+' '+ response4+' '+ response5);
