$(document).ready(function () {
  $("#runButton").click(program);
});

var program = function () {
  var amount = $("#amountInput").val();
  amount = parseInt(amount);

  var discount = '';

  if (amount > 25) {
    if (amount >= 80) {
      discount = '30%';
    } else {
      discount = '20%';
    }
  } else {
    discount = '10%';
  }

  $("#outputP").html(discount);
  console.log("The result is " + discount);
};
