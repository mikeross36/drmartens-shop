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
    const navLinks = [...document.querySelectorAll(".nav__link")]

    if (closeBtn && navLinks) {
        closeBtn.addEventListener("click", () => {
            navMenu.classList.remove("show")
        })
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("show")
            })
        })
    }
}

window.onscroll = () => {
    const header = document.getElementById("header")
    if (this.scrollY >= 30) {
        header.classList.add("scroll-header")
    }
    else {
        header.classList.remove("scroll-header")
    }
};

const toggleCart = () => {
    const cart = document.querySelector(".cart")
    const navShop = document.querySelectorAll(".nav__shop")
    const cartClose = document.querySelector(".cart__close")

    navShop.forEach(btn => {
        btn.addEventListener("click", () => {
            if (cart) cart.classList.add("show-cart")
        })
    })
    
    if (cartClose) {
        cartClose.addEventListener("click", () => {
            cart.classList.remove("show-cart")
        })
    }
};

(function () {
    openMenu()
    closeMenu()
    toggleSearch()
    toggleCart()
})();


