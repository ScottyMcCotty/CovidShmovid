
import {Page} from "./page.js"

// this class acts as a Node in our tree
class Question extends Page
{

  // a Question should have:
  // question text
  // answer button 1 text
  // answer button 2 text
  // the next Question when answer 1 is pressed
  // the next Question when answer 2 is pressed

  constructor (question_text, answer_1, answer_2) {
    super()
    this.question_text = question_text
    this.answer_button_1_label = answer_1
    this.answer_button_2_label = answer_2

    // using null values here isn't great design...
    // ideally we could have an empty question instance or something
    this.next_question_1 = null
    this.next_question_2 = null

    // also keep track of the parent Question instance
    this.previous_question = null
  }

  activate () {
    // when this question gets activated, it needs to change some HTML values
    console.log("Activating a new Question")
    document.getElementById("button container").hidden = false;
    document.getElementById("answer 1").value = this.answer_button_1_label
    document.getElementById("answer 2").value = this.answer_button_2_label
    document.getElementById("question label").innerText = this.question_text
  }
}

export { Question }