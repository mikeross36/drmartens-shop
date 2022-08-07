class ShopBoots {
    async getShopBoots() {
        try {
            const response = await fetch("data/shop-data/shop.json")
            const data = await response.json()
            const shopBoots = data;
            // console.log(shopBoots)

            return shopBoots;
        }
        catch(error) {
            console.log(error)
        }
    }
};

class UI {
    displayShopBoots(shopBoots) {
        let result = "";
        shopBoots.forEach(boot => {
            result += `
            <article class="boot">
                    <img src="${boot.image}" alt="sale boot" class="boot__img">
                    <span class="boot__name">${boot.name}</span>
                    <span class="boot__price">${boot.price}</span>
                    <button class="button-light">
                        Add to cart <img src="/app/images/arrow-right.svg" alt="arrow right icon" width="20px" height="20px">
                    </button>
                </article>
            `
        });
        const shopContainer = document.querySelector(".shop__container")
        if (shopContainer) {
            shopContainer.insertAdjacentHTML("beforeend", result)
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const boots = new ShopBoots()
    const ui = new UI()

    boots.getShopBoots().then(boots => {
        ui.displayShopBoots(boots)
    })
})