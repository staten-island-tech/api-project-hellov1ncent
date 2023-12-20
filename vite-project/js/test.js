const DOMSelectors= {
    column: document.querySelector(".column"),
    searchBtn: document.querySelector('.search-btn'),
}




function clearfields(){
    DOMSelectors.column.innerHTML="";
}
function insertCards(arr){
    arr.forEach((api) => {
        DOMSelectors.column.insertAdjacentHTML(
            "beforeend",
            `<div class="card">
                <h3 class = "name">${api.name}</h3>
                <h4>Level: ${api.url}</h4> 
            </div>`
        )
    });
}
const URLs = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`;
async function getData(URLs) {
try {
    const response = await fetch(URLs);
    if(response.status !=200) {
        throw new Error (response.statusText);
    }
    const data = await response.json();
    insertCards(data);
} catch (error) {
    console.log(error, "There was an error 🤓");
    document.querySelector("h1").textContent = "Error 🤓🤓🤓"
}
}
insertCards(api.data)
getData(URLs);
async function search(URLs){
    try {
        const response = await fetch(URLs);
        const data = await response.json();
        DOMSelectors.search.addEventListener('click', function() {
            let input = DOMSelectors.input.value;
            let newArr = data.filter((data) => data.name.toLowerCase() === input);
            clearfields();
            if (newArr[length] != 1) {
                insertCards(newArr);
              } else {
                document.querySelector("h1").textContent = "Error 🤓🤓🤓"
              }
        });
    } catch (error) {}
}
search(URLs);