const openMenu = () => {
    const navToggle = document.getElementById("nav-toggle")
    const navMenu = document.getElementById("nav-menu")
    const navSearchForm = document.querySelector(".nav__search-form")

    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show")
        closeSearchForm()
    })

    function closeSearchForm() {
        if (navSearchForm.classList.contains("active-form")) {
            return navSearchForm.classList.remove("active-form")
        }
    }
};

const closeMenu = () => {
    const closeBtn = document.getElementById("nav-close")
    const navMenu = document.getElementById("nav-menu")

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            navMenu.classList.remove("show")
        })
    }
};

window.onscroll = () => {
    const header = document.getElementById("header")
    if (this.scrollY >= 30) {
        header.classList.add("scroll-header")
    }
    else {
        header.classList.remove("scroll-header")
    }
};

(function () {
    openMenu()
    closeMenu()
    toggleSearch()
})();


