const nav = document.getElementById("costemNav");
function hidenav() {
  if (
    document.body.scrollTop > nav.clientHeight ||
    document.documentElement.scrollTop > nav.clientHeight
  ) {
    nav.classList.add("hidenav");
  } else {
    nav.classList.remove("hidenav");
  }
}
window.onscroll = function () {
  hidenav();
};
