const pokeContainer = document.getElementById('card-geral-poke');
const pokemonsCount = 150;

const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}

const main_types = Object.keys(colors);

//percorrer pokemons
const fetchPokemons = async () => {
    for (let i = 1; i <= pokemonsCount; i++) {
        await getPokemon(i);
    }
}

//fazendo requisicao
const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const resp = await fetch(url);
    const data = await resp.json();
    createPokemonCard(data);
}

const createPokemonCard = (poke) => {
    const card = document.createElement('div');
    card.classList.add('card-cor');

    const name = poke.name[0].toUpperCase() + poke.name.slice(1);
    const id = poke.id.toString().padStart(3, '0');

    const poke_types = poke.types.map(type => type.type.name);
    const type = main_types.find(type => poke_types.indexOf(type) > -1);
    const color = colors[type];

    card.style.backgroundColor = color;

    const pokemonsInnerHTML = 
    `
    <div class="col card-geral-pokedex">
        <div class="card">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png" class="card-img-top" alt="${name}">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">Tipo: ${type}.</p>
            </div>
        </div>
    </div>
    `

    card.innerHTML = pokemonsInnerHTML;
    pokeContainer.appendChild(card);
}

fetchPokemons();