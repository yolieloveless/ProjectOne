# Project 1 - Peer Code Review Checklist

### Developer: Yolie Loveless
### Reviewer: Daniel Scott
---

## Minimum Requirements

### Features
- [X] Game has at least the minimum set of features required to play.
- [X] All minimum features are working.
- [X] As applicable, does the game handle "winning", "losing" and "ties"?

### Code Style & Best Practices
- [ ] No "dead" code (code that is commented out code or is never executed) exists.
    _There were a few instances of dead code on lines 64 and 65_
- [X] There are separate CSS & JS files put in appropriate sub-folders.

#### JavaScript
- [X] Function names accurately express their purpose (usually verbs).
- [X] Variable names are clear and expressive (usually nouns).
- [X] Identifiers used for variables and functions (except constructors) use camel-casing.
- [X] Constructor functions use upper-camel-casing.
- [X] JavaScript code blocks, nested functions, etc., are consistently indented using 2 or 4 spaces per level of indentation.
- [X] Vertical white spacing is consistent.
- [ ] Use of single vs. double quotes for strings is consistent (lean toward single quotes).
    _There were a few small instances of single and double quotes in your JavaScript file_
- [X] No leftover logging to the console.

#### HTML Markup
- [X] The HTML is properly indented according to its nesting level.
- [X] Lower-case is used for all tag names, attributes, classes & ids.
- [X] Kebob-casing is used for names of classes, ids, and custom attributes (if any).
- [ ] No spaces exist between HTML attributes, the equal sign and the value.
    _There was a space between the attribute name and equal sign on line 26_
- [X] HTML attributes use double quotes.
- [X] Inline styling is not used.

#### CSS
- [X] The CSS is properly indented.
- [X] Vertical white space is consistent.
- [X] There is an opening curly brace after the selector(s) and a closing brace on the last line by itself.
- [X] CSS properties contain a space after, but not before, the : character.

### Documentation & Deployment
- [X] Game is deployed online (GH Pages).
- [X] Repo contains a _readme.md_
- [ ] _readme_ has a _Description_ section for the game.
    _readme has not "Description" section_
- [X] _readme_ has a _Technologies Used_ section.
- [X] _readme_ has a _Getting Started_ section which includes a link to the deployed game.
- [ ] _readme_ has an _Next Steps_ section to explain unsolved problems and future plans.
    _readme has no "Next Steps" section_
## Other Conventions & Best Practices

### Files
- [X] File names are lowercased and use either snake or kebob-casing.

### JavaScript
- [X] Functions rarely contain more than 10 lines and do so for good reason.
- [X] Code is DRY by ensuring there are not sections of similar code.  Repetitive code is put into more general purpose functions defined with parameters as necessary to differentiate their behavior.
- [ ] The main script file is commented into major sections for:
	- Application-wide Variables & cached DOM Element Variables
	- Constants (all upper-case identifier is used by convention)
	- Event Listeners
	- Functions
    _The code in your JavaScript file was well organized, but didn't contain the commented sections as listed above_
- [ ] Application-wide scoped variables are declared at the top of the main script file.
    _Your JavaScript file does have application scoped variables but they are not listed at the top of your main script file_
- [ ] An _initialize_ or similar function is used to "reset" the variables of the game to their starting state.  Variables are not also being initialized when defined.
    _Your JavaScript file doesn't contain an initialize or reset function_

### HTML
- [X] HTML passes [w3c validation](https://validator.w3.org/)

### CSS
- [X] CSS is kept DRY by breaking out common CSS properties into separate classes.

### Final Remarks

Congratulations on completing your first project in the SEI program Yolie! I'm happy to inform you that your project has reached MVP and has met the minimum requirements for a pass. I liked your choice in color and images for this game. I also like the "Everyone's a Winner" theme as well. I also noticed that points are earned each time the spin button is pressed, regardless if a match is made. I assume this was intentional though since your game is titled "Everyone's a Winner". Some areas of growth here would be to add more context to your project's readme file such as sections that describe future plans/features for your project. Also, I was curious about the onclick attribute you added in the spin button inside of your HTML. We normally select our elements from inside the JavaScript file to add event listeners and such. Also, as a final suggestion, we would love to see our students comment out sections in their JavaScript file to provide a space for their application/game state variables, functions, constants, event listeners ... etc. All in all, we appreciate all the hard work you put into building this game and I look forward to seeing your next project!