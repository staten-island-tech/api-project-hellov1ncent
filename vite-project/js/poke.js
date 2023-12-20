/* const URLs = `https://api.disneyapi.dev/character`;
async function getData(URLs) {
    const response = await fetch(URLs);
    const data = await response.json();
}
getData(URLs);
 */
/* const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
async function getData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error("Error", error);
    }
}
getData(URL)
    .then(data => {
        console.log(data)
        data.results.forEach((name)=>console.log(name))
    });


function insertCards(arr){
    arr.forEach((data)=>{
        DOMSelectors.column.insertAdjacentHTML(
            "beforeend",
            `<div class = "card">
            <h3 class="name">${data.name}</h3>
            <img src ="${data.url}" class ="img">
            </div>`
        )
    })
}
insertCards(arr.data);

 */


  async function getData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  document.addEventListener('DOMContentLoaded', async () => {
    try {
      const pokemonList = await getData('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');

      await Promise.all(pokemonList.results.map(async (pokemon) => {
        const pokemonData = await getData(pokemon.url);
        const card = createPokemonCard(pokemonData);
        document.body.appendChild(card);
      }));
    } catch (error) {
      console.error('Error:', error);
    }
  });

  function createPokemonCard(pokemon) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'pokemon-card';

    return cardDiv;
  }

