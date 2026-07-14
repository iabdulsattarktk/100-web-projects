// sab category divs select kro
const categories = document.querySelectorAll(".category");

// nav ke sary links select kro
const navlinks = document.querySelectorAll("nav ul li a");

// har nav link pe click event lagao
navlinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    // active class pehly sab links se hatao
    navlinks.forEach((navLink) => navLink.classList.remove('active'));

    // sirf clicked link pe active class lagao
    this.classList.add('active');
  });
});
