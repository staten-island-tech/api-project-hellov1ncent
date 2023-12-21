const DOMSelectors = {
    column: document.getElementById("pokemon-container"),
};

async function fetchData() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
        const data = await response.json();
        const pokemonArray = data.results;

        insertCards(pokemonArray);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
