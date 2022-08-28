"use strict"

const cartElements = () => {
    const container = document.querySelector(".cart__container");
    const cartOverlay = document.querySelector(".cart__overlay");
    const cart = document.querySelector(".cart");
    const navShop = document.querySelectorAll(".nav__shop");
    const cartClose = document.querySelector(".cart__close");

    return { container, navShop, cartOverlay, cart, cartClose };
};

const {container, navShop, cartOverlay, cart, cartClose } = cartElements();

class Cart {
    async getCartItems() {
        try {
            const response = await fetch("/data/cart-data/cart-items.json")
            const items = await response.json()
            return items;
        }
        catch (error) {
            console.error(error)
        }
    }

    displayCartItems(items) {
        let element = "";
        items.forEach(item => {
            element += `
                <article class="cart__card">
                    <div class="cart__box">
                        <img src="${item.image}" alt="cart item" class="cart__img">
                    </div>
                    <div class="cart__details">
                        <h4 class="cart__title">${item.title}</h4>
                        <span class="cart__price">${item.price}</span>
                        <div class="cart__amount">
                            <div class="cart__amont-content">
                                <span class="cart__amount-box">
                                    <img src="/app/images/chevron-down.svg" alt="" width="20px" height="20px">
                                </span>
                                <span class="cart__amount-number">0</span>
                                <span class="cart__amount-box">
                                    <img src="/app/images/chevron-up.svg" alt="" width="20px" height="20px">
                                </span>
                            </div>
                            <img src="/app/images/can-trash.svg" alt="" class="cart__amount-trash" width="25px" height="25px">
                        </div>
                    </div>
                </article>
            `
        })
        if(container) container.insertAdjacentHTML("beforeend", element)
    }

    toggleCart() {
        navShop.forEach(btn => {
            btn.addEventListener("click", () => {
                if(cartOverlay) cartOverlay.classList.add("show-overlay")
                if (cart) cart.classList.add("show-cart")
            })
        })
        
        if (cartClose) {
            cartClose.addEventListener("click", () => {
                cart.classList.remove("show-cart")
                cartOverlay.classList.remove("show-overlay")
            })
        }
    };
};

(async () => {
    const cart = new Cart()
    const items = await cart.getCartItems()
    cart.displayCartItems(items)
    cart.toggleCart()
})();


