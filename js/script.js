let header = document.querySelector(".header-section");
let navBtn = document.querySelector(".header-btn.nav-btn");
let navBar = document.querySelector(".navbar-box");
let overlay = document.querySelector(".overlay");

/* Mobile menu */

// button event
navBtn.addEventListener('click', () => {
    if (navBar.classList.toggle("open")) {
        overlay.style.top = header.offsetHeight + "px";
        searchModal.style.display = "none";
        overlay.style.display = "block";
    } else
        overlay.style.display = "none";
})

/* Search modal */
let searchBtn = document.querySelector("#search-btn");
let searchModal = document.querySelector(".search-modal");
let modalCloseBtns = Array.from(document.querySelectorAll(".modal .btn-close"));

// search button
searchBtn.addEventListener("click", () => {
    searchModal.style.display = "flex";
    overlay.style.top = "0";
    overlay.style.display = "block";
})

// close buttons
let closeModal = (closeBtn) => {
    overlay.style.display = 'none';
    closeBtn.parentNode.parentNode.style.display = "none";
}

modalCloseBtns.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
        closeModal(closeBtn);
    })
})

/* Read More Modal */
let readModal = document.querySelector(".read-more-modal");
let readButtons = Array.from(document.querySelectorAll(".read-more-btn"));
readButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        overlay.style.display = 'block';
        readModal.style.display = "block";
    })
})

// out modals click
overlay.addEventListener("click", (event) => {
    searchModal.style.display = "none";
    readModal.style.display = "none";
    overlay.style.top = "0";
    navBar.classList.remove("open");
    overlay.style.display = "none";
});