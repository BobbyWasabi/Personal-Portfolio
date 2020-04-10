const allPokemon = []

function getPokeData(url) {
    fetch(url).then(function(response) {
        response.json().then(function(pokeData) {
            console.log(pokeData.results)
            const pokeMap = pokeData.results.map(pokemon => {
                return fetch(pokemon.url).then(resData => {
                    resData.json().then(pokeJson => {
                        allPokemon.push(pokeJson)
                    })
                })
            })
        })
    })
}

 
let pokemonGrid = document.querySelector('.pokemonGrid')

getPokeData('https://pokeapi.co/api/v2/pokemon?&limit=25')

console.log(allPokemon)

populatePokeCards(allPokemon)

function populatePokeCards(pokeArray) {
    pokeArray.forEach(pokemon) => {
        let pokeScene = document.createElement('div')
        pokeScene.className = 'scene'
        let pokeCard = document.createElement('div')
        pokeCard.className = 'card'
        pokeCard.addEventListener('click', () =>
        pokeCard.classList.toggle('is-flipped'),
        )
        let pokeFront = document.createElement('div')
        pokeFront.className = 'card_face card-face--back'
        pokeFrontBack.textContent = 'back'

        pokeCard.appendChild(pokeFront)
        pokeCard.appendChild(pokeBack)
        pokeScene.appendChild(pokeCard)
        pokemonGrid.appendChild(pokeCard)
    }
}



    fetch(url).then(function (response) {
        let pokeData = response.json().then(function (data) {
            console.log(data)
            pokemonGrid.textContent =  data.name
        })
    })


console.log(getPokeData('https://pokeapi.co/api/v2/pokemon/1/'))

var card = document.querySelector('.card');
card.addEventListener('click', function() {
    card.classList.toggle('is-flipped');
})