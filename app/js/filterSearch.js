function filterSearch() {
    const input = document.getElementById("search-input");
    const filter = input.value.toLowerCase();
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        if (section.id.toString().toLowerCase().indexOf(filter) > -1) {
            section.style.display = "block";
        }
        else {
            section.style.display = "none";
        }
    });
};



