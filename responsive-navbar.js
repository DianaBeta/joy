/* Adds responsive navbar */
function myFunction() {
  var x = document.getElementById("my-navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}