const header = document.querySelector("header");
const btnToggle = document.querySelector(".btn--toggle")

function  stickyNavbar() {
    header.classList.toggle("scrolled", window.pageYOffset >0);
}

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);

function changeTheme() {
    if(!document.body.classList.contains("darktheme")){
        document.body.classList.add("darktheme");
        btnToggle.classList.replace("uil-moon", "uil-sun");
    }
    else {
        document.body.classList.remove("darktheme");
        btnToggle.classList.replace("uil-sun", "uil-moon");
    }
}

btnToggle.addEventListener("click", () => {
    changeTheme();
});