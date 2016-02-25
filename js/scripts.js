var triangleCheck = function(sideA, sideB, sideC) {
  if ((sideA === sideB) && (sideB === sideC)) {
    return "an equilateral";
  }

  else if ((sideA === sideB) || (sideB === sideC) || (sideA === sideC)) {
    return "an isosceles";
  }

  else if ((sideA + sideB > sideC) && (sideB + sideC > sideA) && (sideA + sideC > sideB)) {
    return "a scalene";
  }

  else {
    return "not a";
  }
};




$(document).ready(function() {
  $("form#triangleForm").submit(function(event) {
    var sideA = parseInt($("input#sideA").val());
    var sideB = parseInt($("input#sideB").val());
    var sideC = parseInt($("input#sideC").val());
    var result = triangleCheck(sideA, sideB, sideC);

    $(".triangleType").text(result);


    $("#result").show();
    event.preventDefault();
  });
});
