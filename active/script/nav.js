var unfolded_navs_count = 0;

function displaySubNav(t) {
  navbar = document.getElementById('navbar');
  subNav = document.getElementById(t + '-sub-nav');
  navCaret = document.getElementById(t + '-nav-caret');
  if (subNav.style.display === "block") {
    unfolded_navs_count -= 1;
    if (unfolded_navs_count == 0) {
      navbar.classList.remove("sub-navbar-unfold");
      navCaret.classList.remove("fa-caret-down");
      navCaret.classList.add("fa-caret-right");
    }
    subNav.style.display = "none";
  } else {
    unfolded_navs_count += 1;
    navbar.classList.add("sub-navbar-unfold");
    subNav.style.display = "block";
    navCaret.classList.remove("fa-caret-right");
    navCaret.classList.add("fa-caret-down");
  }
}
