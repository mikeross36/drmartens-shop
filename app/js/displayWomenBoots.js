class Boots {
    async getBoots() {
        try {
            const response = await fetch("/data/women-data/boots.json")
            const boots = await response.json()
            // console.log(boots)
            return boots;
        }
        catch (error) {
            console.log(error)
        }
    };

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
        // return boots;
    }
};

// class womenUI {
//     displayWomeBoots(boots) {
//         let result = "";
//         boots.forEach(boot => {
//             result += `
//                 <article class="women__boot">
//                     <img src="${boot.image}" alt="sale boot" class="women__boot-img">
//                     <div class="women__boot-data">
//                         <h4 class="boot__name">${boot.name}</h4>
//                         <span class="boot__price">${boot.price}</span>
//                         <p class="boot__description">
//                             The embodiment of iconic <br/> Dr Martens Footwear
//                         </p>
//                         <button class="button-light">
//                             Add to cart <img src="/app/images/arrow-right.svg" alt="arrow right icon" width="20px" height="20px">
//                         </button>
//                     </div>
//                 </article>
//             `;
//         });
//         const container = document.querySelector(".women__container")
//         if (container) {
//             container.insertAdjacentHTML("beforeend", result)
//         }
//         return boots;
//     }
// }

(async () => {
    const womenBoots = new Boots()
    const boots = await womenBoots.getBoots()

    womenBoots.displayWomeBoots(boots)
})();

// document.addEventListener("DOMContentLoaded", () => {
//     const womanUi = new womenUI()
//     const boots = new Boots()

//     boots.getBoots().then(boots => {
//         womanUi.displayWomeBoots(boots)
//     })
// })