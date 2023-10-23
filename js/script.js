let header = document.querySelector(".header-section");
let navBtn = document.querySelector(".header-btn.nav-btn");
let navBar = document.querySelector(".navbar-box");
let overlay = document.querySelector(".overlay");

/* Mobile menu */

// button event
navBtn.addEventListener('click', () => {
    if (navBar.classList.toggle("open")){
        overlay.style.top = header.offsetHeight + "px";
        searchModal.style.display = "none";
        overlay.style.display = "block";
    }else
        overlay.style.display = "none";
})


/* Search */
let searchBtn = document.querySelector("#search-btn");
let searchModal = document.querySelector(".search-modal");
let closeBtn = document.querySelector(".btn-close");

// search button
searchBtn.addEventListener("click", () => {
    searchModal.style.display = "flex";
    overlay.style.top = "0";
    overlay.style.display = "block";
})

// close button
closeBtn.addEventListener('click', () => {
    overlay.style.display = "none";
    searchModal.style.display = "none";
})

// Document event
document.addEventListener("click", (event) => {
    if (navBar.classList.contains("open") && !navBar.contains(event.target) && !navBtn.contains(event.target)) {
        overlay.style.display = "none";
        overlay.style.top = "0";
        navBar.classList.remove("open");
    }

    if (searchBtn.contains(event.target)){
        overlay.style.display = "block";
    }

    if (event.target == overlay){
        searchModal.style.display = "none";
        overlay.style.display = "none";
    }
});

/* Read More Modal */


