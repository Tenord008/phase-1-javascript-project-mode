

const pokedex = document.getElementById("list");

console.log(pokedex);

function fetchPokemon(){
 
    const promises = [];
for (let i = 1; i < 151; i++){
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
promises.push(fetch(url)
.then(function(response) {
    return response.json();
}))
Promise.all(promises).then(results => {
    const pokemon = results.map((data) => ({
        name: data.name,
        id: data.id,
        image: data.sprites['front_default'],
        type: data.types.map((type) => type.type.name).join(`, `)
        }));
        displayPokemon(pokemon);
})





const displayPokemon = (pokemon) => {
console.log(pokemon);


const pokemonHTMLString = pokemon.map ( pokeman => 
    
    
    
    
    `
    <li class="card">
<img class="card-image" src="${pokeman.image}"/>
<h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
<p class="card-subtitle">Type: ${pokeman.type}</p>
<button class="like__btn">
   <span id="icon"><i class="far fa-thumbs-up"></i></span>
   <span id="count">0</span> Like
</button>
    </li>
    
`


    )
 
    .join('');

    list.innerHTML = pokemonHTMLString;


};


}}


fetchPokemon()

const likeBtn = document.querySelector(".like__btn");
let likeIcon = document.querySelector("#icon"),
  count = document.querySelector("#count");

let clicked = false;


likeBtn.addEventListener("click", () => {
  if (!clicked) {
    clicked = true;
    likeIcon.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
    count.textContent++;
 }
else {
    clicked = false;
    likeIcon.innerHTML = `<i class="far fa-thumbs-up"></i>`;
    count.textContent--;
  }
});








// const button = document.querySelector('button');
//     button.addEventListener('click', event => {
//         button.textContent = `like count: ${event.detail}`;
       
//         if(button.classList.contains("far")){
//                 button.classList.remove("far");
//               button.classList.add("fas");
//              }
//       });


// object.onclick = toggle(){myScript};

//let btn = document.querySelector("#btn");



// let clicked = false;

// btn.addEventListener("click",() => {
//     let btn = document.querySelector("#btn");
//     if(!clicked) {
//         clicked = true;
//         btn.innerHTML = `<i  id="btn" class="fas fa-heart"></i>`
//     }
//     else {
//         clicked = false;
//         btn.innerHTML = `<i id="btn" class="far fa-heart"></i>`
//     }
// });








    {/* <i  id="btn" class="far fa-heart"></i> */}


//     let btn = document.getElementById('btn');
    
//     // btn.onclick = 
//     function Toggle(){
//         btn.onclick = Toggle
//     if(btn.classList.contains("far")){
//     btn.classList.remove("far");
//     btn.classList.add("fas");
//     }
// }
    

   /* (){
        if (data.types === 'grass'){
        return `<button type="button">grass</button>` 
    }else if {
        return `${data.type}`
       }}};*/

       
