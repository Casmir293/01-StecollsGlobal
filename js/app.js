//  Nav Scroll Animation
window.onscroll = () => {
  const nav = document.querySelector("#scrollId");
  const collapsibleNavbar = document.querySelector("#collapsibleNavbar");
  if (this.scrollY <= 10) {
    nav.classList.remove("scroll");
    collapsibleNavbar.classList.remove("myStrokeScroll");
  } else {
    nav.classList.add("scroll");
    collapsibleNavbar.classList.add("myStrokeScroll");
  }
};

//  Display Year
document.querySelector(".myYear").innerHTML = new Date().getFullYear();
