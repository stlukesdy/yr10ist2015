$(document).ready(function () {
  $("#writeButton").click(writeProgram);
  $("#readButton").click(readProgram);
});

var writeProgram = function () {

  var productArray = [];

  productArray[0] = {};
  productArray[0].id = 1;
  productArray[0].name = 'Oven cleaner kit';

  productArray[1] = {};
  productArray[1].id = 2;
  productArray[1].name = 'Dishwasher tablets';

  var productData = [];

  for (var i = 0; i < 2; i = i + 1) {
    productData.push(productArray[i]);
  }

  localStorage.setItem('productData', JSON.stringify(productData));
};

var readProgram = function () {

  var producData2 = JSON.parse(localStorage.getItem('productData'));

  for (var i = 0; i < producData2.length; i = i + 1) {
    console.log(producData2[i].id + " " + producData2[i].name);
  }

};
