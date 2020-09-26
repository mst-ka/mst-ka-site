function displaySubNav(t) {
  var x = document.getElementById(t);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
