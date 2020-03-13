import { starships } from '../data/starships.js'
import {star}
import { addStarField } from './utils.js'

const nav = document.querySelector('.nav')

const navList = document.querySelector('navList')

function populateNav(starships){ 
    starships.forEach(starship => {

        let anchorWrap = document.createElement('a')
        anchorWrap.href = '#'
        anchorWrap.addEventListener('click', event => {
            console.log(event)
        })
        
        anchorWrap.textContent = starship.name

        /*let listItem = document.createElement('li')
        listItem.textContent = starship.name */
        
        //anchorWrap.appendChild(listItem)
        navList.appendChild(anchorWrap)
        nav.appendChild(navList)
})
    shipView.appendChild(shipView)
}

populateNav(starships)

addStarField(shipView, 100)
