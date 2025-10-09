const image_url = "https://cdn.thesimpsonsapi.com/500";
/**
 * Simpsons API
 * https://thesimpsonsapi.com/
 */

maximoPersonaje = 1182;
function obtenerNumeroAleatorio() {
    let characterId = Math.random() * maximoPersonaje;
    return Math.floor(characterId);
}

const fetchCharacter = async (id) => {
    try {
        const response = await fetch(`https://thesimpsonsapi.com/api/characters/${id}`);
       if (!response.ok) {
           throw new Error("Error HTTP : " + response.status);
       }
        const character = await response.json();
        return character;
    } catch (error) {
        console.error("Error al obtener personaje:", error);
    }
   
    
};


//IIFE
(async () => {      
    const character = await fetchCharacter(obtenerNumeroAleatorio());
    const spinnerElement = document.querySelector(".loader");
    spinnerElement.style.display = "none";
    //const characterElement = document.querySelector("#character");
    //characterElement.textContent = JSON.stringify(character, null, 2);
    const idElement = document.querySelector("#character-id");
    idElement.innerHTML = `<p>ID: ${character.id}</p>`;
    const nombreElement = document.querySelector("#character-name");
    nombreElement.innerHTML = `<p>Name: ${character.name}</p>`;
    const ocupacionElement = document.querySelector("#character-occupation");
    ocupacionElement.innerHTML = `<p>Occupation: ${character.occupation}</p>`;
    const imgElement = document.querySelector("#character-image");
    imgElement.src = `${image_url}${character.portrait_path}`;
})();

document.querySelector("#cargar").addEventListener("click", () => {
    cargarPersonajes();
});

const cargarPersonajes = async () => {
    const character = await fetchCharacter(obtenerNumeroAleatorio());
};
