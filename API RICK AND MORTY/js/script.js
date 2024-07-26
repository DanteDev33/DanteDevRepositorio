document.addEventListener("DOMContentLoaded", function () {
    const characterInput = document.getElementById("characterInput");
    const fetchCharacterButton = document.getElementById("fetchCharacterButton");
    const characterDetails = document.getElementById('characterDetails');

    fetchCharacterButton.addEventListener("click", function () {
        const characterId = characterInput.value.trim();
        if (!characterId || isNaN(characterId)) {
            window.alert("Por favor, digite um ID válido.");
            return;
        }

        characterDetails.innerHTML = "";
        fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Personagem não encontrado");
                }
                return response.json();
            })
            .then(data => {
                const { name, species, gender, status, image, origin, location } = data;
                const characterName = name;
                const characterSpecies = species;
                const characterGender = gender;
                const characterStatus = status;
                const characterImage = image;
                const characterOrigin = origin.name;
                const characterLocation = location.name;

                characterDetails.innerHTML = `
                    <h2>${characterName}</h2>
                
                   <div class="imgScript">
                 <img src="${characterImage}" alt="${characterName}">
                   </div>
                    <p class="pScript"> <strong>Espécie:</strong> ${characterSpecies}</p>
                    <p class="pScript"><strong>Gênero:</strong> ${characterGender}</p>
                    <p class="pScript"><strong>Status:</strong> ${characterStatus}</p>
                    <p class="pScript"><strong>Origem:</strong> ${characterOrigin}</p>
                    <p class="pScript"><strong>Localização:</strong> ${characterLocation}</p>
                `;
            })
            .catch(error => {
                characterDetails.innerHTML = `<p>${error.message}</p>`;
            });
    });
});
