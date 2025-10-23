const image_url = "https://cdn.thesimpsonsapi.com/500";

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
    const spinnerElement = document.querySelector(".loader");
    spinnerElement.style.display = "block";
    
    //const character = await fetchCharacter(obtenerNumeroAleatorio());
    // const [c1,c2,c3,c4,c5,c6] = await Promise.all([
    //     fetchCharacter(obtenerNumeroAleatorio()),
    //     fetchCharacter(obtenerNumeroAleatorio()),
    //     fetchCharacter(obtenerNumeroAleatorio()),
    //     fetchCharacter(obtenerNumeroAleatorio()),
    //     fetchCharacter(obtenerNumeroAleatorio()),
    //     fetchCharacter(obtenerNumeroAleatorio())
    // ]);

    const characters = await Promise.all([
        fetchCharacter(obtenerNumeroAleatorio()),
        fetchCharacter(obtenerNumeroAleatorio()),
        fetchCharacter(obtenerNumeroAleatorio()),
        fetchCharacter(obtenerNumeroAleatorio()),
        fetchCharacter(obtenerNumeroAleatorio()),
        fetchCharacter(obtenerNumeroAleatorio())
    ]);

    await new Promise(resolve => setTimeout(resolve, 2000));

    spinnerElement.style.display = "none";

    // 'character' es el objeto (c1, c2, etc.)
    // 'index' es la posición (0, 1, 2, 3, 4, 5)
    characters.forEach((character, index) => {
        // Sumamos 1 al index para que coincida con los IDs (1, 2, 3...)
        const num = index + 1; 

        document.querySelector(`#character-id${num}`).innerHTML = `<p>ID: ${character.id}</p>`;
        document.querySelector(`#character-name${num}`).innerHTML = `<p>Name: ${character.name}</p>`;
        document.querySelector(`#character-occupation${num}`).innerHTML = `<p>Occupation: ${character.occupation}</p>`;
        document.querySelector(`#character-image${num}`).src = `${image_url}${character.portrait_path}`;
    });
    
    
    // const idElement1 = document.querySelector("#character-id1");
    // idElement1.innerHTML = `<p>ID: ${c1.id}</p>`;
    // const nombreElement1 = document.querySelector("#character-name1");
    // nombreElement1.innerHTML = `<p>Name: ${c1.name}</p>`;
    // const ocupacionElement1 = document.querySelector("#character-occupation1");
    // ocupacionElement1.innerHTML = `<p>Occupation: ${c1.occupation}</p>`;
    // const imgElement1 = document.querySelector("#character-image1");
    // imgElement1.src = `${image_url}${c1.portrait_path}`;

    // const idElement2 = document.querySelector("#character-id2");
    // idElement2.innerHTML = `<p>ID: ${c2.id}</p>`;
    // const nombreElement2 = document.querySelector("#character-name2");
    // nombreElement2.innerHTML = `<p>Name: ${c2.name}</p>`;
    // const ocupacionElement2 = document.querySelector("#character-occupation2");
    // ocupacionElement2.innerHTML = `<p>Occupation: ${c2.occupation}</p>`;
    // const imgElement2 = document.querySelector("#character-image2");
    // imgElement2.src = `${image_url}${c2.portrait_path}`;

    // const idElement3 = document.querySelector("#character-id3");
    // idElement3.innerHTML = `<p>ID: ${c3.id}</p>`;
    // const nombreElement3 = document.querySelector("#character-name3");
    // nombreElement3.innerHTML = `<p>Name: ${c3.name}</p>`;
    // const ocupacionElement3 = document.querySelector("#character-occupation3");
    // ocupacionElement3.innerHTML = `<p>Occupation: ${c3.occupation}</p>`;
    // const imgElement3 = document.querySelector("#character-image3");
    // imgElement3.src = `${image_url}${c3.portrait_path}`;

    // const idElement4 = document.querySelector("#character-id4");
    // idElement4.innerHTML = `<p>ID: ${c4.id}</p>`;
    // const nombreElement4 = document.querySelector("#character-name4");
    // nombreElement4.innerHTML = `<p>Name: ${c4.name}</p>`;
    // const ocupacionElement4 = document.querySelector("#character-occupation4");
    // ocupacionElement4.innerHTML = `<p>Occupation: ${c4.occupation}</p>`;
    // const imgElement4 = document.querySelector("#character-image4");
    // imgElement4.src = `${image_url}${c4.portrait_path}`;

    // const idElement5 = document.querySelector("#character-id5");
    // idElement5.innerHTML = `<p>ID: ${c5.id}</p>`;
    // const nombreElement5 = document.querySelector("#character-name5");
    // nombreElement5.innerHTML = `<p>Name: ${c5.name}</p>`;
    // const ocupacionElement5 = document.querySelector("#character-occupation5");
    // ocupacionElement5.innerHTML = `<p>Occupation: ${c5.occupation}</p>`;
    // const imgElement5 = document.querySelector("#character-image5");
    // imgElement5.src = `${image_url}${c5.portrait_path}`;

    // const idElement6 = document.querySelector("#character-id6");
    // idElement6.innerHTML = `<p>ID: ${c6.id}</p>`;
    // const nombreElement6 = document.querySelector("#character-name6");
    // nombreElement6.innerHTML = `<p>Name: ${c6.name}</p>`;
    // const ocupacionElement6 = document.querySelector("#character-occupation6");
    // ocupacionElement6.innerHTML = `<p>Occupation: ${c6.occupation}</p>`;
    // const imgElement6 = document.querySelector("#character-image6");
    // imgElement6.src = `${image_url}${c6.portrait_path}`;
})();


document.querySelector("#cargar").addEventListener("click", () => {
    location.reload();
});


