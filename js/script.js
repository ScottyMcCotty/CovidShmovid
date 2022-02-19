
import {Question} from "./question.js"
import {Information} from "./information.js"

function answer1() {
  console.log("Answer1")
  active_question = active_question.next_question_1;
  active_question.activate();
}

function answer2() {
  console.log("Answer2")
  active_question = active_question.next_question_2;
  active_question.activate();
}


function main() {
  
  document.getElementById("answer 1").addEventListener("click", answer1);
  document.getElementById("answer 2").addEventListener("click", answer2);

  // init questions
  let symptomsOrPositive = new Question("Do you have symptoms or tested positive?", "Yes", "No");
  let exposure = new Question("Have you been exposed to COVID-19?", "Yes", "No");
  let positiveOver90Days = new Question("Have you tested positive for COVID-19 in the last 90 days?", "Yes", "No");
  let vaccination = new Question("Are you up to date on COVID-19 vaccinations?", "Yes", "No");
  
  // no symptoms
  symptomsOrPositive.next_question_2 = exposure;
  
  // yes exposure 
  exposure.next_question_1 = positiveOver90Days;

  // no test positive
  positiveOver90Days.next_question_2 = vaccination;


  // initial question 
  active_question = symptomsOrPositive; 
  active_question.activate()

  // console.log(active_question)
}

var active_question = null;

main ();