


// Reusable async function to fetch data from the provided url
async function getAPIData(url) {
    try {
      const response = await fetch(url)
      const data = await response.json()
      return data
    } catch (error) {
      console.error(error)
      
    }
  }
  

  function loadPage() {
    getAPIData('https://pokeapi.co/api/v2/pokemon/?&limit=90').then((data) => {
      for (const pokemon of data.results) {
        getAPIData(pokemon.url).then((pokeData) => {
          populatePokeCard(pokeData)
        })
      }
    })
  }
  
  let pokemonGrid = document.querySelector('.pokemonGrid')
  let startButton = document.querySelector('#startButton')
  let newButton = document.querySelector('#newButton')
  
  startButton.addEventListener('click', () => {
    loadPage()
  })
  
  newButton.addEventListener('click', () => {
    addPokemon()
  })
  
  function populatePokeCard(singlePokemon) {
      let pokeScene = document.createElement('div')
      pokeScene.className = 'scene'
      let pokeCard = document.createElement('div')
      pokeCard.className = 'card'
      pokeCard.addEventListener('click', () =>
        pokeCard.classList.toggle('is-flipped'),
      )
      let pokeFront = populateCardFront(singlePokemon)
      let pokeBack = populateCardBack(singlePokemon)
      pokeCard.appendChild(pokeFront)
      pokeCard.appendChild(pokeBack)
      pokeScene.appendChild(pokeCard)
      pokemonGrid.appendChild(pokeScene)
  }
  function populateCardFront(pokemon) {
    let cardFront = document.createElement('div')
    cardFront.className = 'card__face card__face--front'

    let frontImage = document.createElement('img')

    frontImage.src = `./Pokepics/${getImageFileName(pokemon)}${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}.png`
  
    let frontLabel = document.createElement('p')
    frontLabel.textContent = `${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}`
    cardFront.appendChild(frontImage)
    cardFront.appendChild(frontLabel)
    return cardFront
  }
  
  function getImageFileName(pokemon) {
    if (pokemon.id < 10) {
      return `00${pokemon.id}`
    } else if (pokemon.id > 9 && pokemon.id < 100) {
      return `0${pokemon.id}`
    } else if (pokemon.id > 722) {
      return `pokeball`
    }
  }
  
  function populateCardBack(pokemon) {
    let cardBack = document.createElement('div')
    cardBack.className = 'card__face card__face--back'
    let abilityList = document.createElement('ul')
    pokemon.abilities.forEach(ability => {
      let abilityName = document.createElement('li')
      abilityName.textContent = ability.ability.name
      abilityList.appendChild(abilityName)
    })
    cardBack.appendChild(abilityList)
    return cardBack
  }
  
  class Pokemon {
    constructor(height, weight, name, abilities) {
      this.height = height
      this.weight = weight
      this.name = name
      this.abilities = abilities
      this.id = 900
    }
  }
  
  function addPokemon() {
    let Bobbymon = new Pokemon(190, 290, 'Bobbymon',
      [
        {
          ability: {
          name: 'Nerd-out'
          }
        },
        {
          ability: {
          name: 'Solitary curse'
          }
        },
        {
          ability: {
          name: 'Code Stomp'
          }
        }
    ])
    populatePokeCard(Bobbymon)
  }
  //https://i.imgur.com/VexuoSc.gif
  //https://pa1.narvii.com/6289/202bcd044bbb2bf55a9568433169ad82da37c608_00.gif
  // https://github.com/fanzeyi/pokemon.json/blob/master/images/001.png?raw=true




















/*const allPokemon = []

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

//be sure to cache resources and images. 
*/
