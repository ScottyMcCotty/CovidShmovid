

/**
 * Abstract page class
 */
class Page {
  constructor() {
    if (this.constructor == Page) {
      throw new Error("You can't have an instance of the abstract Page class");
    }
  }

  activate() {
    // all pages need an activate function
    throw new Error("activate() hasn't been implemented");
  }
}

export { Page }