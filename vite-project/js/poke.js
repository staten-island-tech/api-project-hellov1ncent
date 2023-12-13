/* const URLs = `https://api.disneyapi.dev/character`;
async function getData(URLs) {
    const response = await fetch(URLs);
    const data = await response.json();
}
getData(URLs);
 */
const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
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


