import "./style.css";

const element = document.getElementById("formBtn");
element.addEventListener("click", first);

function first() {
  document.getElementById("first").classList = "hidden";
  document.getElementById("second").classList = "block";
}
 

