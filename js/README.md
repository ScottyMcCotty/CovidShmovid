# README

Wow, kudos to you for taking the time to open this readme. It contains so much juicy informatin and helpful documentation, I'm (covid) positive that it's worth your time.

## Structure

The old structure can be seen in `oldscript.js`, where a bunch of stupid ugly functions needed to be created to act as the transitions between every possible state.
The functions had to change what was visible, and they would have had to change all sorts of other stuff, which would have been a nasty mess.

Instead, we've got this nice object oriented structure!

### [page.js](https://github.com/ScottyMcCotty/CovidShmovid/blob/main/js/page.js)

Who doesn't love an abstract class? Well, I guess I should say pseudo-abstract because it's not technically abstract. That's why the constructor and methods throw errors.
The `Page` class itself should never be instantiated. It represents the fact that clicking through the buttons in the tree will lead to different "pages".
Only one page should be shown at a time, and when a particular page gets activated, it has a handy `activate()` function.

### [information.js](https://github.com/ScottyMcCotty/CovidShmovid/blob/main/js/information.js)

Implements Page. This is an information page that's just meant to say things, and *not* display any buttons or allow unusual user input.
When transitioning, the `Information` is responsible for hiding the previous question and displaying the necessary information.

Information acts as a leaf in the tree.

### [question.js](https://github.com/ScottyMcCotty/CovidShmovid/blob/main/js/question.js)

Implements Page. This is a page for showing questions that have exactly two answers. Should the class name before more specific? Only if we're planning on having questions
which have more than two possible answers. When transitioning, the `Question` is responsible for showing what needs to be shown and asking what needs to be asked.

Question acts as nodes in the tree.