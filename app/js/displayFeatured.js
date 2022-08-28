"use strict"

class Featured {
    async getItems() {
        try {
            const response = await fetch("/data/featured-data/featured-items.json")
            const items = await response.json()
            return items;
        }
        catch (error) {
            console.error(error)
        }
    }

    displayFeatured(items) {
        let element = "";
        items.forEach(item => {
            element += `
                <article class="boot">
                    <div class="boot__sale">Sale</div>
                    <img src="${item.image}" alt="sale boot" class="boot__img">
                    <span class="boot__name">${item.name}</span>
                    <span class="boot__price">${item.price}</span>
                    <button class="button-light">
                        Add to cart <img src="/app/images/arrow-right.svg" alt="arrow right icon" width="20px" height="20px">
                    </button>
                </article>
            `
        })
        const container = document.querySelector(".featured__container")
        if(container) container.insertAdjacentHTML("beforeend", element)
    }
};

(async () => {
    const featured = new Featured()
    const items = await featured.getItems()
    featured.displayFeatured(items)
})();