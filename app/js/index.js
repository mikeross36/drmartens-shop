const openMenu = (navToggleId, navMenuId) => {
    const navToggle = document.getElementById(navToggleId)
    const navMenu = document.getElementById(navMenuId)
    const navSearchForm = document.querySelector(".nav__search-form")

    if (navToggleId, navMenuId) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.add("show")
            closeSearchForm()
        })
    }

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

const toggleSearch = () => {
    const navSearchForm = document.querySelector(".nav__search-form")
    const navSearch = document.querySelector(".nav__search")
    navSearch.addEventListener("click", () => {
        navSearchForm.classList.toggle("active-form")
    })
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
    const navShop = document.querySelector(".nav__shop")
    const cartNavShop = document.querySelector(".cart_nav_shop")
    const cartClose = document.querySelectorAll(".cart__close")

    if (navShop) {
        navShop.addEventListener("click", () => {
           cart.classList.add("show-cart")
       })
    }

    if (cartNavShop) {
        cartNavShop.addEventListener("click", () => {
            cart.classList.add("show-cart")
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
    toggleSearch()
    toggleCart()
})();