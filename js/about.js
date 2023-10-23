/* FAQ */

let faqItems = Array.from(document.querySelectorAll(".faq-item"));

faqItems.forEach(item => {
    item.querySelector(".faq-item-btn").addEventListener("click", () => {
        // Close the others text
        faqItems.forEach(otherItem => {
            item !== otherItem ? otherItem.querySelector(".faq-item-txt").classList.remove("open") : null
        })

        // Open the item text
        item.querySelector(".faq-item-txt").classList.toggle('open');
    })
})