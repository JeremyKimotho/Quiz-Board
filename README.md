# Javascript Quiz
#### {This website tests user on Javascript, jQuery, Bootstrap, and debugging}, {22/09/18}
#### By **{Jeremy Kimotho}**
## Description
{The website has radio buttons for 15 separate questions. A user may only select one radio button per question totalling 15 selected buttons. It then 'marks' the user by checking the value of the radio button they selected, against an array called answers that contains the answers.}
## BDD
* The first thing the website needed was an easy-to-follow layout, and this was achieved using a card. To make it more visually appealing it also has a shadow around the card.
* The aim was multiple questions and this was most easily achieved using radio buttons, which required a form so the question section is forme from a form tag inside of the card bootstrap class and the radio buttons under an ordered list.
* The page needed to fade out so jQuery effects were used to switch what the user was able to view before and after submitting their answers.
* The user needed to be able to select multiple radio buttons, and this is achieved by giving them different names from 0-14. The reason they begin from 0 is because the loop function that 'marks' the finished quiz starts with i=0.
* The form is marked and knows when the user is finished because the functions that mark and display the score are ony triggered when the submit button is clicked.
* Finally the user is given words of encouragement and congratulation once they've completed the form.
## Known Bugs
{No known bugs are present}
## Technologies Used
{The website is built using html, css, and javascript.}
## Requirements
{The website has elements of jQuery and bootstrap and requires those two libraries to function correctly.}
## Live Link
{ https://jeremykimotho.github.io/Quiz-Board/ }
