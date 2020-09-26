var unfolded_navs_count = 0;

function displaySubNav(t) {
  navbar = document.getElementById('navbar');
  subNav = document.getElementById(t);
  if (subNav.style.display === "block") {
    unfolded_navs_count -= 1;
    if (unfolded_navs_count == 0) {
      navbar.classList.remove("random-class");
    }
    subNav.style.display = "none";
  } else {
    unfolded_navs_count += 1;
    navbar.classList.add("random-class");
    subNav.style.display = "block";
  }
}
