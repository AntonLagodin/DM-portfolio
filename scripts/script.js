const header = document.querySelector("header");
const btnToggle = document.querySelector(".btn--toggle")
const hamburger = document.querySelector(".hamburger__menu")
const links = document.querySelectorAll(".nav__link");

function  stickyNavbar() {
    header.classList.toggle("scrolled", window.pageYOffset >0);
}

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);

function changeTheme() {
    if(!document.body.classList.contains("darktheme")){
        document.body.classList.add("darktheme");
        return btnToggle.classList.replace("uil-moon", "uil-sun");
    }
    {
        document.body.classList.remove("darktheme");
        btnToggle.classList.replace("uil-sun", "uil-moon");
    }
}

btnToggle.addEventListener("click", () => {
    changeTheme();
});

hamburger.addEventListener("click", () => {
   document.body.classList.toggle("open");
   document.body.classList.toggle("stopScrolling");
});
