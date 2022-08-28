"use strict"

class NewCollection {
    async getItems() {
        try {
            const response = await fetch("/data/new-collection-data/new-data.json")
            const items = await response.json()
            return items;
        }
        catch (error) {
            console.error(error)
        }
    }

    displayItems(items) {
        let element = "";
        items.forEach(item => {
            element += `
                <div class="new__boot-card">
                    <img src="${item.image}" alt="new item boot" class="new__boot-img">
                    <div class="new__boot-overlay">
                        <h4 class="overlay__title">${item.title}</h4>
                        <p class="overlay__description">
                            ${item.desc1} <br/> ${item.desc2}
                        </p>
                        <span class="overlay__price">${item.price}</span>
                        <button class="button">
                            <a href="#">Add to cart</a>
                        </button>
                    </div>
                </div>
            `
        })
        const newBoot = document.querySelector(".new__boot")
        if(newBoot) newBoot.insertAdjacentHTML("beforeend", element)
    }
};

(async () => {
    const collection = new NewCollection()
    const items = await collection.getItems()
    collection.displayItems(items)
})();