/* FAQ */

let faqItems = Array.from(document.querySelectorAll(".faq-item"));

faqItems.forEach(item => {
    item.querySelector(".faq-item-btn").addEventListener("click", () => {
        // Close the others text
        faqItems.forEach(otherItem => {
            if (item !== otherItem){
                otherItem.querySelector(".faq-item-txt").classList.remove("open-faq-txt");
                otherItem.querySelector(".faq-item-btn-icon").classList.remove("icon-rotate");
            } 
        })

        // Open the item text
        item.querySelector(".faq-item-txt").classList.toggle('open-faq-txt');
        item.querySelector(".faq-item-btn-icon").classList.toggle('icon-rotate');
    })
})