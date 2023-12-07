<<<<<<< HEAD





const URL = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';

try {
    //requesting a response REST API's
    const response = await fetch(URL);
    if(response.status != 200){
        throw new Error(response.statusText);
    }
    //convert response to JSON
    const data = await response.json();
    console.log(data.content);
} catch (error) {
    console.log(error, "sorry");
}
getData(URL);
=======
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
        console.log(data);
    });
>>>>>>> df11468a892ec9a8698131005f2eef9ff107b5b2
