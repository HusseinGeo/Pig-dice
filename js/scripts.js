

functionrollDice(); {
  var die1 = document.getElementById('die1');
  var status = document.getElementById('status');
  var d1 = Math.floor(Math.random()*6) + 1;


die1.innerHtml = die1
status.innerHtml = 'You rolled' + d1 + '.'

if (die1 === 1) {
  status.innerHtml = "Sorry! Next player's turn!"

  }
};
