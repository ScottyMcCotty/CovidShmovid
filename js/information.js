
import {Page} from "./page.js"

class Information extends Page
{
  constructor() {
    super()
    // a page purely for giving information to the user
  }

  activate() {
    console.log("Information trying to activate()");
  }
}

export { Information }