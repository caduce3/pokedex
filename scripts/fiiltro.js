const searchInput = document.getElementById('valorDoFiltro');
searchInput.addEventListener('input', function() {
  filterPokemonsName();
});

//FILTRO POR NOME
const filterPokemonsName = () => {
    const filter = searchInput.value.toLowerCase();
    const cards = document.getElementsByClassName('card-cor');
    
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      const name = card.querySelector('.card-title').textContent.toLowerCase();
      
      if (name.includes(filter)) {
        card.style.display = 'block'; // Exibe o card do Pokémon
      } else {
        card.style.display = 'none'; // Oculta o card do Pokémon
      }
    }
  };

const searchInputTipo = document.getElementById('valorDoFiltroTipo');
searchInputTipo.addEventListener('input', function() {
  filterPokemonsTipo();
});

  const filterPokemonsTipo = () => {
    const filter = searchInputTipo.value.toLowerCase();
    const cards = document.getElementsByClassName('card-cor');
    
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      const name = card.querySelector('#tipo').textContent.toLowerCase();
      
      if (name.includes(filter)) {
        card.style.display = 'block'; // Exibe o card do Pokémon
      } else {
        card.style.display = 'none'; // Oculta o card do Pokémon
      }
    }
  };
  