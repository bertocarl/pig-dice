var btnNew,btnHold,btnRoll,scrore1,score0,name0,name1,current0,current1,totalscore,roundscore
// New game button
$(document).ready(function() {
  $(".btnNew").click(function() {
    reset();
// Roll the dice
$(".btnRoll").click(function() {
  roll ();
// Hold the dice
$(".btnHold").click(function() {
  hold ();
function roll ()
