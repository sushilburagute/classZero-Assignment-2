const readlineSync = require('readline-sync');
const chalk = require('chalk');

// General Console Logs
console.log(chalk.bgYellow("Mock Javascript Enticing Exam(JEE) Mains 2020 CLI QUIZ \n\n\n"));
console.log(chalk.bgYellow("Rules \n"));
console.log(chalk.yellow("-- To complete the test, 15 minutes will be allotted.\n-- Every correct answer will reward you with +4 marks and deduct -1 for a wrong answer.\n-- Unattempted questions do not have any deduction. \n\n\n"));

// User Declaration
console.log(chalk.bgYellow("The exam commences! \n"));
var userName = readlineSync.question(chalk.bgRed("Enter your JEE rollNumber  "));
console.log(chalk.red("Welcome " + userName +" Javascript Enticing Exam"));
console.log(chalk.grey("\n-------------------------------------------------\n") )


var score = 0;

// Questions Object
const quizQuestions = [{
  question: "1. How do you call a function named 'myFunction'?\n",
  options: "A: myFunction() \nB: call function myFunction() \nC: call myFuntion()\n",
  answer: "A",
},{
  question: "2. Which of these are not a comparison operator?\n",
  options: "A: < \nB: > \nC: = \nD: != \n",
  answer: "C",
},{
  question: "3. To check whether three variables are all equal, we would use:\n",
  options: "A: A=B=C \nB: (A==B) && (B==C) \nC: (A=B) && (B=C) \nD: (A==B) & (B==C) \n",
  answer: "B",
}, {
  question: "4. What's the correct way to write a Javascript Array?\n",
  options: "A: var arr = ['red', 'blue'] \nB: var arr = ('red', 'blue') \nC: var arr = {'red', 'blue'} \n",
  answer: "A",
},{
  question: "5. How does a while loop start?\n",
  options: "A: while(i<=10) \nB: while i=1 to 10 \nC: while(i<=10; i++)\n",
  answer: "A",
},{
  question: "6. How do you add comments in JS?\n",
  options: "A: 'comment' \nB: //comment \nC: <!--Comment--> \n",
  answer: "B",
},{
  question: "7. What is the HTML tag under which one can write the JavaScript code?\n",
  options: "A: <javascript> \nB: <scripted> \nC: <script> \nD: <js> \n",
  answer: "C",
},{
  question: "8. What is the correct syntax for referring to an external script called “component.js”?\n ",
  options: "A: <script src=”component.js”> \nB:  <script href=”component.js”> \nC: <script ref=”component.js”> \nD: <script name=”component.js”> \n",
  answer: "A",
},{
  question: "9. Which of the following is not a reserved word in JavaScript?\n",
  options: "A: interface \nB:  throws \nC: program \nD: short \n",
  answer: "C",
},{
  question: "10. Where is the correct place to insert a JavaScript?\n",
  options: "A: Head section \nB: Body section \nC: Head as well as Body \nD: None \n",
  answer: "B",
},{
  question: "11. Is a variable named 'apple' same as 'Apple' in javascript?\n",
  options: "A: Yes \nB: No \nC: Only when we use 'strict' \nD: None \n",
  answer: "B",
},{
  question: "12. In JavaScript, we do not have datatypes like integer and float. What is the function that can be used to check if the number is an integer or not?\n",
  options: "A: Integer(value) \nB: ifInteger(value) \nC: isInteger(value) \nD: ifinteger(value) \n",
  answer: "C",
},
]

//  Core Quiz Function
function ask(question, answer, options){
  var userAnswer = readlineSync.question(chalk.bgBlue(question,options,"Your Answer:  "));

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.bgGreen("That's the right answer! ✨"));
    score = score + 4;
  } else {
    console.log(chalk.bgRed("Sorry, that's the wrong answer. The correct answer is: " + answer));
    score = score - 1 ;
  }

  console.log(chalk.blue(userName + ", Your score is: " + score));
  console.log(chalk.grey("\n-------------------------------------------------\n\n\n") );
}

// loop to throw question

for(var i = 0; i<quizQuestions.length; i++) {
  var currentQuestion = quizQuestions[i];
  ask(currentQuestion.question, currentQuestion.answer, currentQuestion.options);
}

// final score
console.log(chalk.bgYellow("Hey! You've scored:" + score ));
