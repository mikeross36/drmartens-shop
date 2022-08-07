class Boots {
    async getBoots() {
        try {
            const response = await fetch("/data/women-data/boots.json")
            const data = await response.json()
            let boots = data;
            // console.log(boots)
            return boots;
        }
        catch (error) {
            console.log(error)
        }
    };
}

class Shop {
    displayWomeBoots(boots) {
        let result = "";
        boots.forEach(boot => {
            result += `
            <article class="boot">
                <img src=${boot.image} alt="women boot" class="boot__img">
                <span class="boot__name">${boot.name}</span>
                <span class="boot__price">${boot.price}</span>
                <button class="button-light">
                    Add to cart <img src="/app/images/arrow-right.svg" alt="arrow right icon" width="20px" height="20px">
                </button>
            </article>
            `;
        });
        const container = document.querySelector(".women__container")
        if (container) {
            container.insertAdjacentHTML("beforeend", result)
        }
        return boots;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const shop = new Shop()
    const boots = new Boots()

    boots.getBoots().then(boots => {
        shop.displayWomeBoots(boots)
    })
})