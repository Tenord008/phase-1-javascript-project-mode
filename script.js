    const pokedex = document.getElementById("list");

    console.log(pokedex);

    function fetchPokemon() {
      for (let i = 1; i < 20; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        fetch(url)
          .then(function (response) {
            return response.json();
          })
          .then(result => {
            const pokemon = {
              name: result.name,
              id: result.id,
              image: result.sprites['front_default'],
              type: result.types.map((type) => type.type.name).join(`, `)
            };
            displayPokemon(pokemon);
            // likeWait();

          })
      }
    }



    const displayPokemon = (pokemon) => {
      //console.log(pokemon);
      const listElement = document.createElement('li')
      listElement.classList.add('card')

      const pokemonHTMLString = `
        <img class="card-image" src="${pokemon.image}"/>
        <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
        <p class="card-subtitle">Type: ${pokemon.type}</p>
        
        <button onclick=like(event) class="like__btn">
        <span id="icon"><i class="far fa-thumbs-up"></i></span>
        <span id="theCount">0</span> 
        Like
        </button>`;
      listElement.innerHTML = pokemonHTMLString;
      pokedex.append(listElement)

      // document.getElementById("like__btn").addEventListener("click", like);
      // likeWait;
    };

    fetchPokemon()


    // document.getElementsByClassName("like__btn").addEventListener("click")
    // alert("i click");

    function like(event) {
      // window.addEventListener('DOMContentLoaded', (displayPokemon) => {

      //await displayPokemon;

      const button = event.target
        console.log(button.tagName)
      if (button.tagName == "BUTTON") {
        const count = button.querySelector("#theCount").innerText
        button.querySelector("#theCount").innerText = parseInt(count) + 1
        if (button.classList.contains("far")) {
          button.classList.remove("far");
          button.classList.add("fas");
        }
      }
    };
