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



const greetingDiv = document.querySelector('.greeting')

const castList = document.createElement("ul")


let counter = 1


greetingDiv.appendChild(castList)

people.forEach(person => {
    const listItem = document.createElement("li")
    listItem.textContent = person.name
    castList.appendChild(listItem)


    let anchorWrap= document.createElement("a")
    anchorWrap.href = "#"
    let imageItem = document.createElement("img")
    imageItem.src = `https://starwars-visualguide.com/assets/img/characters/${counter}.jpg`
    greetingDiv.appendChild(imageItem)
    //add some way to click/ handle user clicks on the image
    imageItem.addEventListener("click", () =>{
        console.log("It Worked")
        MouseEvent 
    })
    anchorWrap.appendChild(imageItem)
    greetingDiv.appendChild(anchorWrap)
    counter++

})

greetingDiv.appendChild(castList)