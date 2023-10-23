/* Testimonials carousel */
let carousel = document.querySelector(".clients-section .carousel");
let carouselItems = document.querySelectorAll(".clients-section .carousel .card");

let nextClient = () => {
    let currentItem = carousel.querySelector(".active-card");
    let nextItem = currentItem.nextElementSibling;
    currentItem.classList.remove("active-card");

    if (nextItem) {
        nextItem.classList.add("active-card");
    } else {
        carousel.querySelector(".card").classList.add("active-card");
    }

    window.innerWidth < 1024 ?
        carousel.scrollLeft = carousel.querySelector(".active-card").offsetLeft - 35
    :
        carousel.scrollLeft = carousel.querySelector(".active-card").offsetLeft - (0.1 * window.innerWidth)

    
}

setInterval(nextClient, 3000);