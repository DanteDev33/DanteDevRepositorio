document.addEventListener("DOMContentLoaded", function () {
    const pokemonInput = document.getElementById("pokemonInput");
    const fetchPokemonButton = document.getElementById("fetchPokemonButton");
    const pokemonDetails = document.getElementById('pokemonDetails');

    fetchPokemonButton.addEventListener("click", function () {
        const pokemonNameOrId = pokemonInput.value.trim().toLowerCase();
        if (pokemonNameOrId === "") {
            window.alert("Por favor, digite o nome ou ID do Pokémon");
            return;
        }

        pokemonDetails.innerHTML = "";
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Pokémon não encontrado");
                }
                return response.json();
            })
            .then(data => {
                const { name, id, types, abilities, sprites } = data;
                const pokemonName = name.charAt(0).toUpperCase() + name.slice(1);
                const pokemonId = id;
                const pokemonAbilities = abilities.map(ability => ability.ability.name).join(", ");
                const pokemonType = types.map(type => type.type.name).join(", ");
                const pokemonImage = sprites.front_default;

                pokemonDetails.innerHTML = `
                    <h2>${pokemonName} (#${pokemonId})</h2>
                    <p class="pScript">Tipo: ${pokemonType}</p>
                    <p class="pScript">Habilidades: ${pokemonAbilities}</p>
                    <img height="250px"src="${pokemonImage}" alt="${pokemonName}">
                `;
            })
            .catch(error => {
                pokemonDetails.innerHTML = `<p>${error.message}</p>`;
            });
    });
});
