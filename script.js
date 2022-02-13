


function question1answer1()
{
  document.getElementById("first question container").hidden = true
  document.getElementById("second question container").hidden = false
}

function question1answer2()
{
  document.getElementById("first question container").hidden = true
  document.getElementById("third question container").hidden = false
}

function question2answer1()
{
  // document.getElementById("first question container").hidden = true
  // document.getElementById("third question container").hidden = false
  console.log("That's pretty recent... you should keep isolating")
}

function question2answer2()
{
  // document.getElementById("first question container").hidden = true
  // document.getElementById("third question container").hidden = false
  console.log("Good enough! Go forth and spread germs, you nasty COVID factory")
}

function question3answer1()
{
  // document.getElementById("first question container").hidden = true
  // document.getElementById("third question container").hidden = false
  console.log("You should choose healthier friends")
}

function question3answer2()
{
  // document.getElementById("first question container").hidden = true
  // document.getElementById("third question container").hidden = false
  console.log("Then what are you looking at these guidelines for?")
}

function goBack()
{
  // console.log("Trying to go back to previous question, but that's not correctly implemented yet!")
  if(document.getElementById("first question container").hidden == false)
  {
    console.log("There's no reason to press that")
  }
  else
  {
    document.getElementById("first question container").hidden = false
    document.getElementById("second question container").hidden = true
    document.getElementById("third question container").hidden = true
  }
}



/**
 * Entry point into the application
 * This function gets run once when the html is loaded
 */
function main()
{
  
}

// run main function
main()