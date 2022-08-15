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
                <article class="women__boot">
                    <img src="${boot.image}" alt="sale boot" class="women__boot-img">
                    <div class="women__boot-data">
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