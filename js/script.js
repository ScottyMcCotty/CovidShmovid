
import {Question} from "./question.js"
import {Information} from "./information.js"

function answer1 () {
  console.log("Answer1")
  active_page = active_page.next_1;
  active_page.activate();
}

function answer2 () {
  console.log("Answer2")
  active_page = active_page.next_2;
  active_page.activate();
}

function backToPreviousPage () {
  if (active_page.previous == null) {
    console.log("CAN'T GO BACK FROM THIS PAGE:");
    console.log(active_page);
  } else {
    console.log("Going back");
    active_page = active_page.previous;
    active_page.activate();
  }
}


function main() {
  
  // Add extra buttons and whatnot here
  document.getElementById("answer 1").addEventListener("click", answer1);
  document.getElementById("answer 2").addEventListener("click", answer2);
  document.getElementById("back button").addEventListener("click", backToPreviousPage);

  // Add specific questions here
  let symptomsOrPositive = new Question("Do you have symptoms or tested positive?", "Yes", "No");
  let exposure = new Question("Have you been exposed to COVID-19?", "Yes", "No");
  let positiveOver90Days = new Question("Have you tested positive for COVID-19 in the last 90 days?", "Yes", "No");
  let vaccination = new Question("Are you up to date on COVID-19 vaccinations?", "Yes", "No");

  // Add information pages here
  let tempCalculatorPage =           new Information("Get tested and isolate for 5 full days\n\n\
                                                      Wear a mask around all other\n\n\
                                                      Do not travel for 10 full days\n\n\
                                                      Would you like to be taken to the Calculator tree?");
  let tempNoExposure =               new Information("Great to hear!\n\n\
                                                      Keep staying safe by wearing a mask!");
  let tempNotVaccinatedNotPositive = new Information("Stay home and quarantine for 5 days\n\n\
                                                      After quarantine, watch for symptoms");
  let tempVaccinatedNotPositive =    new Information("Wear a mask for 10 days around others inside your home\n\n\
                                                      Get tested but no need to quarantine unless you develop symptoms");
  let tempBeenPositiveBefore =       new Information("No quarantine unless you develop symptoms\n\n\
                                                      Wear a mask for 10 days around others inside your home");


  // Please note: next_1 is the next page if they choose answer 1,
  //              next_2 is the next page if they choose answer 2
  
  // Build the tree of questions and information here
  symptomsOrPositive.set_next_1(tempCalculatorPage);
  symptomsOrPositive.set_next_2(exposure);

  exposure.set_next_1(positiveOver90Days);
  exposure.set_next_2(tempNoExposure);

  positiveOver90Days.set_next_1(tempBeenPositiveBefore);
  positiveOver90Days.set_next_2(vaccination);

  vaccination.set_next_1(tempVaccinatedNotPositive);
  vaccination.set_next_2(tempNotVaccinatedNotPositive);

  // First page to be displayed:
  active_page = symptomsOrPositive; 
  active_page.activate()

  // console.log(active_page)
}

var active_page = null;

main ();