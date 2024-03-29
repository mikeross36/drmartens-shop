"use strict"

class Shop {
    async getShopBoots() {
        try {
            const response = await fetch("data/shop-data/shop.json")
            const shopBoots = await response.json()

            return shopBoots;
        }
        catch(error) {
            console.log(error)
        }
    }

    displayShopBoots(shopBoots) {
        let result = "";
        shopBoots.forEach(boot => {
            result += `
                <article class="boot">
                    <img src="${boot.image}" alt="sale boot" class="boot__img">
                    <div class="boot__data">
                        <h4 class="boot__name">${boot.name}</h4>
                        <span class="boot__price">${boot.price}</span>
                        <p class="boot__description">
                            The embodiment of iconic <br/> Dr Martens Footwear   
                        </p>
                        <button class="button-light">
                            Add to cart <img src="/app/images/arrow-right.svg" alt="arrow right icon" width="20px" height="20px">
                        </button>
                    </div>
                </article>
            `
        });
        const shopContainer = document.querySelector(".shop__container")
        if (shopContainer) shopContainer.insertAdjacentHTML("beforeend", result)
    }
};

(async () => {
    const shop = new Shop()
    const shopBoots = await shop.getShopBoots()
    shop.displayShopBoots(shopBoots)
})();