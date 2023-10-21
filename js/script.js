/* Menu button */
const navBtn = document.querySelector(".nav-btn-svg");
const navBox = document.querySelector(".navbar-box");

// button event
navBtn.addEventListener('click', () => {
    navBox.classList.toggle("open");
})

// Document event
document.addEventListener("click", (event) => {
    if (!navBox.contains(event.target) && event.target !== navBtn) {
      navBox.classList.remove("open");
    }
});