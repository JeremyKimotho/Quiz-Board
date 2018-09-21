// Business Logic 

function sum(input) {

  if (toString.call(input) !== "[object Array]")
    return false;

  var total = 0;
  for (var i = 0; i < input.length; i++) {
    if (isNaN(input[i])) {
      continue;
    }
    total += Number(input[i]);
  }
  return total;
}

// User Logic

var score=[]

function recordMarks(){

$(document).ready(function () {
  $("input#correct1").click(function (event) {
    event.preventDefault();
    var result = score.push(1);
    $("#score").text(result);
  });
});
}

$(document).ready(function () {
  $("input#submit").click(function (event) {
    event.preventDefault();
    var result = sum(score);
    $("#score").text(result);
  });
});