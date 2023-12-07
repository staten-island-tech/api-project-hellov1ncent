




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
