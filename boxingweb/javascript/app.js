const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('.star-content')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        target.classList.add('active')

    })
});

const mobileNav = () => {
    const menuBtn = document.querySelector("#menu");
    const nav = document.querySelector(".mobile-nav");

    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("show");
    })
};

mobileNav();
