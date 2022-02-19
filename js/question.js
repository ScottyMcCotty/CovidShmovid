
import {Page} from "./page.js"
import {Information} from "./information.js"

// this class acts as a Node in our tree
class Question extends Page
{

  // a Question should have:
  // question text
  // answer button 1 text
  // answer button 2 text
  // the previous Page
  // the next Page when answer 1 is pressed
  // the next Page when answer 2 is pressed

  constructor (question_text, answer_1, answer_2) {
    super()
    this.question_text = question_text
    this.answer_button_1_label = answer_1
    this.answer_button_2_label = answer_2

    // using null values here isn't great design...
    // ideally we could have an empty question instance or something
    this.set_next_1(Information.PLACEHOLDER());
    this.set_next_2(Information.PLACEHOLDER());

    // also keep track of the parent Question instance
    this.previous = null
  }

  activate () {
    // when this question gets activated, it needs to change some HTML values
    console.log("Activating a new Question")
    document.getElementById("button container").hidden = false;
    document.getElementById("answer 1").value = this.answer_button_1_label
    document.getElementById("answer 2").value = this.answer_button_2_label
    document.getElementById("question label").innerText = this.question_text
  }

  set_next_1 (reference_to_next_page) {
    this.next_1 = reference_to_next_page;
    reference_to_next_page.previous = this;
  }

  set_next_2 (reference_to_next_page) {
    this.next_2 = reference_to_next_page;
    reference_to_next_page.previous = this;
  }
}

export { Question }