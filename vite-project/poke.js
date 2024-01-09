const DOMSelectors = {
    column: document.getElementById("pokemon-container"),
    modal: document.getElementById("modal"),
    modalName: document.getElementById("modalName"),
    modalImage: document.getElementById("modalImage"),
    modalDetails: document.getElementById("modalDetails"),
    closeModal: document.getElementById("closeModal"),
    filterButton: document.getElementById("filterButton"),
    searchInput: document.getElementById("searchInput"),
};

let pokemonArray = [];
//fetches data from the api
async function fetchData() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1000");
        const data = await response.json();
        pokemonArray = data.results;

        insertCards(pokemonArray);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
// this function fetches Pokemon data, creates clickable cards for each Pokemon, and inserts them into the specified column.
function insertCards(arr) {
    DOMSelectors.column.innerHTML = ''; 
    arr.forEach(async (pokemon) => {
        try {
            const response = await fetch(pokemon.url);
            const data = await response.json();
            //MAKES A CLICKABLE LINK THAT DOESN'T BRING U TO ANOTHER PAGE BY USING # and creates a new card wehn you click.
            const card = document.createElement("aaaaaaaaaa");
            card.href = "#";
            card.classList.add("card");
            //makes card clickable
            card.addEventListener("click", () => {
                displayModal(data);
            });
            //card format
            card.innerHTML = `
                <h2 class="name">${data.name}</h2>
                <img src="${data.sprites.front_default}" class="img" alt="${data.name}">
            `;
            DOMSelectors.column.appendChild(card);
        } catch (error) {
            console.error("Error fetching Pokemon details:", error);
        }
    });
}
//what displays on the modal.
function displayModal(data) {
    //pokemon name
    DOMSelectors.modalName.textContent = data.name;
    //image
    DOMSelectors.modalImage.src = data.sprites.front_default;
    //info in the modal (height and weight)
    DOMSelectors.modalDetails.textContent = `Height: ${data.height}, Weight: ${data.weight}`;

    DOMSelectors.modal.style.display = "block";
}
//closes the modal.
function closeModal() {
    DOMSelectors.modal.style.display = "none";
}
//search pokemon
function searchPokemon() {
    try {
        const searchTerm = DOMSelectors.searchInput.value.toLowerCase();
        const matchingPokemon = pokemonArray.filter(pokemon => pokemon.name.includes(searchTerm));
        insertCards(matchingPokemon);
    } catch (error) {
        console.error("Error in searchPokemon:", error);
    }
}
//filtering the pokemon
function filterButtonClick() {
    try {
        searchPokemon();
    } catch (error) {
        console.error("Error", error);
    }
}
//filter button
DOMSelectors.filterButton.addEventListener("click", filterButtonClick);
//closing the modal.
DOMSelectors.closeModal.addEventListener("click", closeModal);

try {
    fetchData();
} catch (error) {
    console.error("Error", error);
}
