// Business Logic 

var answers = ['C', 'B', 'A', 'C', 'B', 'C', 'A', 'A', 'B', 'A', 'D', 'A', 'C', 'D', 'D'],
  tot = answers.length;

function getCheckedValue(radioName) {
  var radios = document.getElementsByName(radioName); 
  for (var y = 0; y < radios.length; y++)
    if (radios[y].checked) return radios[y].value; 
}

function getScore() {
  var score = 0;
  for (var i = 0; i < tot; i++)
    if (getCheckedValue("questions" + i) === answers[i]) score += 1; 
  return score;
}

function getResults() {
  alert("Your score is " + getScore() + "/" + tot);
}


// User Logic
var score=[]

$(document).ready(function () {
  $("#submit").click(function () {
    $("#score-shows").toggle();
    $("#score-hidden").toggle();
  });
});

$(document).ready(function () {
  $("input#submit").click(function (event) {
    event.preventDefault();
      var result = getResults();
      $("#score").text(result);
  })
});





