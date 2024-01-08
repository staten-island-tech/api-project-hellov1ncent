const DOMSelectors = {
    column: document.getElementById("pokemon-container"),
    filterButton: document.getElementById("filterButton"),
};

let pokemonArray = [];

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

function insertCards(arr) {
    DOMSelectors.column.innerHTML = ''; 
    arr.forEach(async (pokemon) => {
        try {
            const response = await fetch(pokemon.url);
            const data = await response.json();

            DOMSelectors.column.insertAdjacentHTML(
                "beforeend",
                `<a href="${data.species.url}" class="card" target="_blank">
                    <h3 class="name no-underline">${data.name}</h3>
                    <img src="${data.sprites.front_default}" class="img" alt="images">
                </a>`
            );
        } catch (error) {
            console.error("Error fetching Pokemon details:", error);
        }
    });
}
function searchPokemon() {
    try {
        const searchTerm = searchInput.value.toLowerCase();
        const matchingPokemon = pokemonArray.filter(pokemon => pokemon.name.includes(searchTerm));
        insertCards(matchingPokemon);
    } catch (error) {
        console.error("Error in searchPokemon:", error);
    }
}

function filterButtonClick() {
    try {
        searchPokemon();
    } catch (error) {
        console.error("Error", error);
    }
}

DOMSelectors.filterButton.addEventListener("click", filterButtonClick);

try {
    fetchData();
} catch (error) {
    console.error("Error", error);
}
