
import {Page} from "./page.js"

class Information extends Page
{
  constructor(information_text) {
    super()
    // a page purely for giving information to the user
    this.information_text = information_text;
  }

  activate() {
    console.log("Activating a new Information");
    document.getElementById("button container").hidden = true;
    document.getElementById("question label").innerText = this.information_text;
  }

  static PLACEHOLDER() {
    let placeholder = new Information("Blank Page!\n\n\
                                       This page is a placeholder for future pages\n\n\
                                       Replace with a question or information page");
    return placeholder;
  } 
}

export { Information }