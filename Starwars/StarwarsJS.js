import { films } from '../Starwars/data/films.js'
import { people } from '../Starwars/data/people.js'
import { planets } from '../Starwars/data/planets.js'
import { starships } from '../Starwars/data/starships.js'

// console.log("Starwars page code stuff")
// console.log(document.title)//root of everything that is in console
// //console.log(document.children)
// console.log(document.querySelector(".greeting"))//gives you every item with a class of greeting.
// const greetingDiv = document.querySelector(".greeting")
// console.log(greetingDiv.textContent)//allows input not in page
// greetingDiv.textContent='I just inserted text into a DOM element using my mad programming skills'
// console.log(films)
// greetingsDiv.textContent = films[0].opening_crawl
// console.log(people)
// greetingDiv.textContent = people[0].name



const greetingDiv = document.querySelector('.gallery')
const maleButton = document.querySelector('#maleButton')
const femalebutton = document.querySelector('#femaleButton')
const otherButton = document.querySelector("#otherButton")

const castList = document.createElement("ul")

//const maleCharacters = people.filter(person => person.gender === "male")

//const femaleCharacters = people.filter(person => person.gender === "female")

const otherCharacters = people.filter(person => {
    if (
        person.gender === 'hermaphrodite' ||
        person.gender === 'n/a' ||
        person.gender === 'none'
    
) {
  return person
}
})


//console.log(otherCharacters.length)

maleButton.addEventListener('click', event => {

    populateDOM(people.filter(person => person.gender === 'male'))
})

femaleButton.addEventListener('click', event => {

    populateDOM(people.filter(person => person.gender === 'female'))
})
otherButton.addEventListener('click', event => {
    populateDOM(otherCharacters)
})
//url: "https://swapi.co/api/people/10/"

function getCharNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2
    
    if(url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
}

//getCharNumber("https://swapi.co/api/people/1/")

function populateDOM(characters) {
    //removeChildren(gallery)
    characters.forEach(person => {
        //need to extract the number form the person
        let charNum = getCharNumber(person.url)
        let anchorWrap = document.createElement('a')
        anchorWrap.href = '#'


//greetingDiv.appendChild(castList)

//people.forEach(person => {
   // const listItem = document.createElement("li")
 //   listItem.textContent = person.name
 //   castList.appendChild(listItem)

//function.populateDOM

    let imageItem = document.createElement("img")
    imageItem.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
    //https://swapi.co/api/people/6/
    //greetingDiv.appendChild(imageItem)
    
    imageItem.addEventListener('error', event => {

    //add some way to click/ handle user clicks on the image

    imageItem.hidden = true
    //imageItem.src = "...imges/uvu-logo.jpeg"}
    })
    imageItem.addEventListener('click', (event) => {
        console.log(event)
        //MouseEvent 
    })
    anchorWrap.appendChild(imageItem)
    gallery.appendChild(anchorWrap)
    counter++

})
}

greetingDiv.appendChild(castList)
