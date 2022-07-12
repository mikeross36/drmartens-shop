const openMenu = (navToggleId, navMenuId) => {
    const navToggle = document.getElementById(navToggleId)
    const navMenu = document.getElementById(navMenuId)

    if (navToggleId, navMenuId) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.add("show")
        })
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
}

const toggleCart = () => {
    const cart = document.querySelector(".cart")
    const navShop = document.querySelectorAll(".nav__shop")
    const cartClose = document.querySelectorAll(".cart__close")
    
    if (navShop) {
        navShop.forEach(btn => {
            btn.addEventListener("click", () => {
                cart.classList.add("show-cart")
            })
        })
    }

    if (cartClose) {
        cartClose.forEach(btn => {
            btn.addEventListener("click", () => {
                cart.classList.remove("show-cart")
            })
        })
    }
}

(function () {
    openMenu("nav-toggle", "nav-menu")
    closeMenu()
    toggleCart()
})();