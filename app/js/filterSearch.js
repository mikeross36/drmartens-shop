const toggleSearch = () => {
    const navSearchForm = document.querySelector(".nav__search-form")
    const navSearch = document.querySelector(".nav__search")
    const closeSearch = document.querySelector(".close-search")
	const input = document.getElementById("search-input");

	if(navSearchForm) {
		navSearch.addEventListener("click", () => {
        navSearchForm.classList.toggle("active-form")
    })
		closeSearch.addEventListener("click", () => {
			navSearchForm.classList.remove("active-form")
			input.value = "";
		})
	}
}

function filterSearch() {
    const input = document.getElementById("search-input");
    const searchTerm = input.value.toLowerCase();
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {   
        if (searchTerm && section.id.toString().toLowerCase().indexOf(searchTerm) > -1) {
            document.getElementById(section.id).scrollIntoView()
        } 
    })
};



