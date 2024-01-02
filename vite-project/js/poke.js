const DOMSelectors = {
    column: document.getElementById("pokemon-container"),
};

async function fetchData() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
        const data = await response.json();
        const pokemonArray = data.results;

        await insertCards(pokemonArray);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

async function insertCards(arr) {
    for (const pokemon of arr) {
        try {
            const response = await fetch(pokemon.url);
            const data = await response.json();

            DOMSelectors.column.insertAdjacentHTML(
                "beforeend",
                `<div class="card">
                    <h3 class="name">${data.name}</h3>
                    <img src="${data.sprites.front_default}" class="img">
                </div>`
            );
        } catch (error) {
            console.error("Error fetching Pokemon details:", error);
        }
    }
}

function searchPokemon() {
    const searchInput = document.getElementById("searchInput");
    const searchTerm = searchInput.value.toLowerCase();

}

fetchData();