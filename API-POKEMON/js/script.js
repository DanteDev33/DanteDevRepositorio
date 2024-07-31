document.addEventListener("DOMContentLoaded", function () { 
    const pokemonInput = document.getElementById("pokemonInput"); // INPUT / CAMPO DE TEXTO 
    const fetchPokemonButton = document.getElementById("fetchPokemonButton"); // BUTTON / BOTÃO
    const pokemonDetails = document.getElementById('pokemonDetails'); // MENSAGEM DE RETORNO

    fetchPokemonButton.addEventListener("click", function () { //
        const pokemonNameOrId = pokemonInput.value.trim().toLowerCase(); // trim -> remove espaços em branco no início e no final da string,  toLowerCase -> converte a string para minúsculas
        if (pokemonNameOrId === "") {
            window.alert("Por favor, digite o nome ou ID do Pokémon");
            return;
        }

        pokemonDetails.innerHTML = "";

        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`) // FETCH -> Uma chamada 
            .then(response => { // then -> método que retorna uma "Promise" que resolve a chamada
                if (!response.ok) {
                    throw new Error("Pokémon não encontrado"); // throw -> lança uma exceção / Força o erro. Vai ir direto para o catch.
                }
                return response.json(); // Retorna o conteúdo da resposta como JSON 
            })
            .then(data => { 

                const { name, id, types, abilities, sprites, weight, height, moves } = data; // Abistração -> Atribuições de propriedades de objetos

                const pokemonName = name.charAt(0).toUpperCase() + name.slice(1);
                const pokemonId = id;
                const pokemonAbilities = abilities.map(item => item.ability.name).join(", "); // map -> Mapea o array e retorna um novo array
                const pokemonType = types.map(item => item.type.name).join(", ");
                const pokemonImage = sprites.front_default;
                const pokemonMoves = moves.map(item => item.move.name).join(", ");
                /* let movesArray = [];
                for (let i = 0; i < 10; i++) { // for ( inicio; condição; voltar)
                    movesArray.push(moves[i].move.name);
                } */

                pokemonDetails.innerHTML = `
                    <h2>${pokemonName} (#${pokemonId})</h2>
                    <p class="pScript">Tipo: ${pokemonType}</p>
                    <p class="pScript">Habilidades: ${pokemonAbilities}</p>
                    <p class="pScript">Altura: ${height} cm</p>
                    <p class="pScript">Peso: ${weight} kg</p>
                    <p class="pScript">Movimentos: ${pokemonMoves}</p>
                    <img height="250px"src="${pokemonImage}" alt="${pokemonName}">
                `;
            })
            .catch(error => { // catch -> captura o erro do then caso de erro
                pokemonDetails.innerHTML = `<p>${error.message}</p>`;
            });
    });
});
