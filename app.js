'use strict';
//Category Arrays
var sportsQuestions = [];
var entertainmentQuestions = [];
var feminismQuestions = [];

//Question Constructor Below This Line
function Question(question, right, wrongOne, wrongTwo, wrongThree, category) {
  this.question = question;
  this.right = right,
  this.wrongOne = wrongOne;
  this.wrongTwo = wrongTwo;
  this.wrongThree = wrongThree;
  this.category = category;
}

//Sports Questions Below This Line
var sportOne = new Question('When did The University of Kansas last win the NCAA National Championship?', '2008', '2012', '1994', '1956', 'sports');
sportsQuestions.push(sportOne);

var sportTwo = new Question('As of June 20, 2016, how many days has it been since the Flyers won the Stanley Cup?', '15,000 days', '25,000 days', '24 days', '3,000 days', 'sports');
sportsQuestions.push(sportTwo);

var sportThree = new Question('What record number of beers did MLB Hall of Famer Wade Boggs drink in a single day?', '107', '64', '78', '33', 'sports');
sportsQuestions.push(sportThree);

var sportFour = new Question('When was the first celebratory champagne bottle pop after a motor race?', 'The 1967 24 Hours of Le Mans', 'The 1958 Monaco Grand Prix', 'The 1987 Sonoma Motor Classic Festival', 'The 1974 Monterey Motor Classic', 'sports');
sportsQuestions.push(sportFour);

var sportFive = new Question('Who is the last non-quarterback to win NFL MVP?', 'Adrian Peterson', 'Ray Lewis', 'LaDainian Tomlinson', 'Shaun Alexander', 'sports');
sportsQuestions.push(sportFive);

//Entertainment Questions Below This Line
var entertainOne = new Question('When asked what he had done with his life to merit an invitation to the Whitehouse, to which First Lady did Miles Davis respond: “Well, I’ve changed the course of music five or six times. What have you done except f**k the president?”', 'Nancy Reagan', 'Barbara Bush', 'Jackie Kennedy', 'Betty Ford', 'entertainment');
entertainmentQuestions.push(entertainOne);

var entertainTwo = new Question('In the film Pineapple Express, which Star Wars creature is referenced by James Franco during his captivity?', 'Rancor', 'Tauntaun', 'Jawa', 'Wookie', 'entertainment');
entertainmentQuestions.push(entertainTwo);

var entertainThree = new Question('Who wrote the poetry spoken in Beyonce\'s Lemonade film', 'Warsan Shire', 'Roxane Gay', 'Chiminanda Ngozi Adichi', 'bell hooks', 'entertainment');
entertainmentQuestions.push(entertainThree);

var entertainFour = new Question('In what year was Wu-Tang member Raekwon’s gold-selling “Only Built for Cuban Linx” released?', '1995', '1994', '1996', '1997', 'entertainment');
entertainmentQuestions.push(entertainFour);

var entertainFive = new Question('Which Hip-Hop artist has acted in films alongside Edward Norton, Jack Black, and Bruce Willis?', 'Mos Def', 'Ludacris', 'Queen Latifah', 'Ice Cube', 'entertainment');
entertainmentQuestions.push(entertainFive);

//Feminism Questions Below This Line
var femOne = new Question('The Equal Rights Amendment was first introduced to Congress in 1923 and intended to guarantee equal rights for women. In what year was this Amendment ratified?', 'It has not yet been ratified', '1977', '1979', '1982', 'feminism');
feminismQuestions.push(femOne);

var femTwo = new Question('Who are the current female Supreme Court members?', 'Justice Sonya Sotomayor, Justice Ruth Bader Ginsburg, Justice Elena Kagan', 'Justice Notorious R.B.G., Justice Notorious B.I.G., Justice Antonin Scalia', 'Justice Sandra Day O’Connor, Justice Sonya Sotomayor, Justice Ruth Bader Ginsburg', 'Justice Michelle Obama, Justice Condoleeza Rice, Justice Hillary Clinton', 'feminism');
feminismQuestions.push(femTwo);

var femThree = new Question('Who was the first woman to win the Nobel Prize for Science(first for Physics, then years later in Chemistry)?', 'Marie Curie', 'Ada Lovelace', 'Rachel Carson', 'Sally Ride', 'feminism');
feminismQuestions.push(femThree);

var femFour = new Question('What is Intersectional Feminism?', 'The view that women experience oppression in varying degrees of intensity.', 'Feminism for cats', 'Black Lives Matter', 'feminism');
feminismQuestions.push(femFour);

var femFive = new Question('Which feminist author famously wrote, “Caring for myself is not self-indulgence, it is self-preservation, and that is an act of political warfare.” ?', 'Audre Lorde', 'Angela Davis', 'Gloria Steinem', 'Alice Walker', 'feminism');
feminismQuestions.push(femFive);

// LOGIC
//Add sports questions to the DOM - for this test, we're only using sports question #1
var questionsAppend = document.getElementById('questions');
questionsAppend.textContent = sportOne.question;

//Event listeners for 'Sports' questions; can be used for all category questions
var answerDiv = document.getElementById('answers');
answerDiv.addEventListener('click', clickHandler);

//Randomizing order of possible answers NOT COMPLETE
var displayPossible = [];

for(var key in sportOne) {
  if(sportOne[key] === sportOne.right){
    displayPossible.push(sportOne[key]);
  }
  if(sportOne[key] === sportOne.wrongOne) {
    displayPossible.push(sportOne[key]);
  }
  if(sportOne[key] === sportOne.wrongTwo) {
    displayPossible.push(sportOne[key]);
  }
  if(sportOne[key] === sportOne.wrongThree) {
    displayPossible.push(sportOne[key]);
    console.log(displayPossible);
  }
}

var randomNum = 0;

function numGen() {
  randomNum = Math.random();
}
//End Randomizing order of possible answers

var a1 = document.getElementById('answer1');
a1.textContent = sportOne.right;

var a2 = document.getElementById('answer2');
a2.textContent = sportOne.wrongOne;

var a3 = document.getElementById('answer3');
a3.textContent = sportOne.wrongTwo;

var a4 = document.getElementById('answer4');
a4.textContent = sportOne.wrongThree;

//Event handler for above listeners
function clickHandler(event) {
  var clickedAnswer = event.target.textContent;
  console.log('clickedAnswer = ', clickedAnswer);

  if (clickedAnswer === a1.textContent) {
    alert('Congrats! You got it right!');
    console.log('Item clicked: ', clickedAnswer);
  } else if (clickedAnswer === a2.textContent || clickedAnswer === a3.textContent || clickedAnswer === a4.textContent) {
    alert('Sorry, that\'s not the right answer');
    console.log('Item clicked: ', clickedAnswer);
  } else {
    alert('Please choose an answer.');
  }
}
