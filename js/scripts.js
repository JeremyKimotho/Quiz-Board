// Business Logic 

function sum(input) {

  if (toString.call(input) !== "[object Array]")
    return false;

  var total = 0;
  for (var i = 0; i < total.length; i++) {
    if (isNaN(input[i])) {
      continue;
    }
    total += Number(input[i]);
  }
  return total;
}

// User Logic

$(document).ready(function () {
  $("#submit").click(function () {
    $("#score-shows").toggle();
    $("#score-hidden").toggle();
  });
});

var score=[0]

$(document).ready(function(){
  $("#correct1").change(function () { 
      if ($(this).is(":checked")) { 
        return score.push(1) 
      }else{
        return score.push(0)
      }
    })
}

,$(document).ready(function () {
  $("#correct2").change(function () { 
      if ($(this).is(":checked")) { 
        return score.push(1) 
      }else {
        return score.push(0)
      }
    })
}

,$(document).ready(function () {
  $("input#submit").click(function (event) {
    event.preventDefault();
      var result = sum(score);
      $("#score").text(result);
  })
})))