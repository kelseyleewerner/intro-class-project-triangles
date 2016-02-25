var triangleCheck = function(sideA, sideB, sideC) {
  if ((sideA === sideB) && (sideB === sideC)) {
    return "equilateral";
  }

  else if ((sideA === sideB) || (sideB === sideC) || (sideA === sideC)) {
    return "isosceles";
  }

  else {
    return "not a triangle";
  }
};











$(document).ready(function() {






});
