//
//
// function roll() {
//   var dic1 = document.getElementById('dice1');
//
//   var d1 = Math.floor(Math.random() * 6 +1);
//
//   dice1.innerHtml = d1;
//
//   var score = d1;
//
// }
function roll() {
  var dic1 = document.getElementById('dice1');

  var d1 =Math.floor(Math.random() * 6 +1);

  var status = document.getElementById('status');

  var score = d1;

  dice1.innerHTML = d1;

  status.innerHTML = " You rolled  "   +score+  ".";

  if (d1 == 1) {
    status.innerHTML += "  Sorry!  your turn is over!";
  }
}
