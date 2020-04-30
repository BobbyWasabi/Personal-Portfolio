async function getAPIData(url) {
    try {
      const response = await fetch(url)
      const data = await response.json()
      return data
    } catch (error) {
      console.error(error)
      
    }
  }
  //https://pokeapi.co/api/v2/evolution-chain/?limit=20&offset=20
/*
  function loadPage(offset, limit) {
    getAPIData(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`).then(async (data) => {
      for (const pokemon of data.results) {
        await getAPIData(pokemon.url).then((pokeData) => {
          populatePokeCard(pokeData)
        })
      }
    })
  }
  */
  let pokemonGrid = document.querySelector('.pokemonGrid')
  let startButton = document.querySelector('#startButton')
  let newButton = document.querySelector('#newButton')
  
  
  startButton.addEventListener('click', () => {
    //loadPage(588, 51)
    randCards(588, 51)
  })
 
  let cardArr = []
  let randObj = {}
  
  function randCards(offset, limit) {
      getAPIData(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`).then(async(data) => {
          for (const pokemon of data.results) {
              await getAPIData(pokemon.url).then((pokeData) => {
                  cardArr = [] //clean array
                  let randObj = {}
                  cardArr.push(pokeData)
                  Object.assign(randObj, cardArr)
                  console.log(randObj)
                  let randCard = randObj[Math.floor(Math.random() * cardArr.length)]
                  populatePokeCard(randCard)
  
              })
          }
      })
  } 

  newButton.addEventListener('click', () => {
    let newCardLocation = addPokemon()
    window.scrollTo({
      top: newCardLocation.top,
      left: newCardLocation.left,
      behavior: 'smooth'
    })
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
      return pokeScene.getBoundingClientRect()
  }
  function imgError(image) {
    image.onerror = "";
    image.src = "/Pokemon/Pokepics/pokeball.gif";
    return true;
}
  function populateCardFront(pokemon) {
    let cardFront = document.createElement('div')
    cardFront.className = 'card__face card__face--front'

    let frontImage = document.createElement('img')
    frontImage.className = "imgClass"

    frontImage.src = `./Pokepics/${getImageFileName(pokemon)}${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}.png`
    frontImage.onerror = function() {
      imgError(frontImage)
  }
    let frontLabel = document.createElement('p')
    frontLabel.textContent = `${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}`
    cardFront.appendChild(frontLabel)
    cardFront.appendChild(frontImage)

    
    return cardFront
  }
  
  function getImageFileName(pokemon) {
    if (pokemon.id < 10) {
      return `00${pokemon.id}`
    } else if (pokemon.id > 9 && pokemon.id < 26) {
      return `0${pokemon.id}`
    } else if (pokemon.id > 722) {
      return `${pokeball}`
    }
    else if (pokemon.id > 699 && pokemon.id < 721) {
      return `${pokemon.id}`
    }
    return `${pokemon.id}`
}


  function populateCardBack(pokemon) {
    let cardBack = document.createElement('div')
    cardBack.className = 'card__face card__face--back'
    let abilityList = document.createElement('ul')
    console.log(pokemon)
    console.log(pokemon.height)
    let height = document.createElement("p")
    height.textContent = "Height: " + pokemon.height
    height.className = "height"
   
    let weight = document.createElement("p")
    weight.textContent = "Weight: " + pokemon.weight
    weight.className = "weight"
    console.log(pokemon.weight)

    let type = document.createElement("p")
    type.textContent = "Type: " + pokemon.type
    type.className = "type"
    console.log(pokemon.type)

    let abilit = document.createElement("p")
    abilit.textContent = "Abilities: "
    pokemon.abilities.forEach(ability => { 
      let abilityName = document.createElement('li')
      abilityName.textContent =  ability.ability.name
      abilityList.appendChild(abilityName)
/*
      pokemon.height.forEach(heightList => {
      let height = document.createElement('li')
      height.textContent = height.height.name
      heightList.appendChild(height)
    })
    */
  })
  //pokemon.height.forEach
    //cardBack.appendChild(name)
    cardBack.appendChild(abilit)
    cardBack.appendChild(abilityList)
    cardBack.appendChild(height)
    cardBack.appendChild(weight)
    //cardBack.appendChild(type)
    return cardBack
  }
  
  class Pokemon {
    constructor(height, weight, name, abilities) {
      this.height = height
      this.weight = weight
      this.name = name
      this.abilities = abilities
      //this.type = type
      this.id = 700
    }
  }
  
  function addPokemon() {
    let Bobbymon = new Pokemon(66, 150, 'Bobbymon',
      [
        {
          ability: {
          name: 'Ability:'
          }
        },
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
          name: 'Code Storm'
          }
        }
    ])
    //populatePokeCard(Bobbymon)
    return populatePokeCard(Bobbymon)
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
