import "./style.css";

const one = document.getElementById("formBtnFirst");
one.addEventListener("click", first);

function first() {
  document.getElementById("first").classList = "hidden";
  document.getElementById("second").classList = "block";
}
 

const two = document.getElementById("formBtnSec");
two.addEventListener("click", second);

function second() {
  document.getElementById("second").classList = "hidden";
  document.getElementById("third").classList = "block";
}


const three = document.getElementById("formBtnThird");
three.addEventListener("click", third);

function third() {
  document.getElementById("third").classList = "hidden";
  document.getElementById("fourth").classList = "block";
}
 


const four = document.getElementById("formBtnFour");
four.addEventListener("click", fourth);

function fourth() {
  document.getElementById("fourth").classList = "hidden";
  document.getElementById("fift").classList = "block";
}