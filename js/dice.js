// var [scrore1,score0,current0,current1,totalscore,rndscore]=0
// New game button
$(document).ready(function() {
  $(".btnNew").click(function() {
    reset();
// Roll the dice
$(document).ready(function() {
$("#btnRoll").click(function() {

  var current = 0;
  var rollDice = Math.floor(Math.random() * 6)+1;

  if(rollDice === 1) {
    alert("You just rolled a 1. pass dice to next player")
  } else {
    current+=rollDice;

  }
  $('#current0').text(current + rollDice);
});
});
// Hold the dice
$(".btnHold").click(function() {
  hold ();
