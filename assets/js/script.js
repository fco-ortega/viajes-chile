/* Esta funcion cambia de color el navbar cunado el usuario hace scroll down */

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  let navbar = document.querySelector('.navbar');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    navbar.classList.remove("bg-transparent");
    navbar.classList.add("bg-dark");
  } else {
    navbar.classList.remove("bg-dark");
    navbar.classList.add("bg-transparent");
  }
}