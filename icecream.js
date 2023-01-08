let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement > 20) {
    mybutton.style.display = "block";
  } else {
    document.style.display = "none";
  }
}
function topFunction() {
  document.documentElement.scrollTop = 0;
}