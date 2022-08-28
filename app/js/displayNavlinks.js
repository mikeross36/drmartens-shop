"use strict"

const domElements = () => {
    const navList = document.querySelector(".nav__list")
    const navMenu = document.getElementById("nav-menu")
    const closeMobMenu = () => {
        if (navMenu) {
            navMenu.classList.remove("show")
        }
    };
    return { navList, navMenu, closeMobMenu }
};

let { navList, navMenu, closeMobMenu } = domElements()

class NavLinks {
    getLinks = async () =>{
        try {
            const response = await fetch("/data/nav-data/navlinks.json")
            const links = await response.json()
            return links;
        }
        catch (error) {
            console.error(error)
        }
    }

    displayLinks = links => {
        let result = "";
        links.forEach(link => {
            result += `
                <li class="nav__item">
                    <a href="${link.link}" class="nav__link" onclick="closeMobMenu()">${link.text}</a>
                </li>
            `
        });
        if (navList) navList.insertAdjacentHTML("beforeend", result)
    };
};

(async () => {
    const navLinks = new NavLinks()
    const links = await navLinks.getLinks()

    navLinks.displayLinks(links)
})();
