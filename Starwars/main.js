import { people } from './data/people.js'
import { getLastNumber, removeChildren} from '../scripts/utils.js'


const greetingDiv = document.querySelector('.gallery')
const maleButton = document.querySelector('#maleButton')
const femalebutton = document.querySelector('#femaleButton')
const otherButton = document.querySelector("#otherButton")

//const castList = document.createElement("ul")

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


maleButton.addEventListener('click', event => {
    populateDOM(people.filter(person => person.gender === 'male'))
})

femaleButton.addEventListener('click', event => {
    populateDOM(people.filter(person => person.gender === 'female'))
})

otherButton.addEventListener('click', event => {
    populateDOM(otherCharacters)
})


/*function getCharNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2
    
    if(url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
}
*/


function populateDOM(characters) {
    removeChildren(gallery)
    characters.forEach(person => {
        //need to extract the number form the person
        let charNum = getLastNumber(person.url)
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

    /*imageItem.addEventListener('error', (event) => {
        log.textContent = log.textContent + `${event.type}: Loading image\n`;
        console.log(event)
    });*/
    //https://swapi.co/api/people/6/
    //greetingDiv.appendChild(imageItem)


    
    imageItem.addEventListener('error', (event) => {

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
    //counter++

})
}

greetingDiv.appendChild(castList)
//getCharNumber("https://swapi.co/api/people/1/")
//url: "https://swapi.co/api/people/10/"