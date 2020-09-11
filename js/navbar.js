var prevScrollpos = window.pageYOffset;
navbar = document.getElementById("stickynav");
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";

  } else {
    navbar.style.top = "-120px";
  }
  prevScrollpos = currentScrollPos;
} 