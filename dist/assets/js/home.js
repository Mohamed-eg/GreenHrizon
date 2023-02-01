var home = document.querySelectorAll(".HomeContaner");
var lodingpag = document.querySelector(".lodingpag");
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
const homwloadfn = () => {
  home[0].style.display = "flex";
  home[1].style.display = "block";
  home[2].style.display = "block";
  lodingpag.style.display = "none";
};
window.onload = () => {
  homwloadfn();
};
