import { starships } from '/Starwars/data/starships.js'
import { getLastNumber, removeChildren, addStarField, addStarFieldRed } from '/scripts/utils.js'
//import {star}

//Error Report: connection is good for starships, it is being console logged
console.log(starships)
const nav = document.querySelector('.nav')
const navList = document.querySelector('.navList')
console.log(navList)
const shipView = document.querySelector('.main')
console.log(shipView)
const dialog = document.querySelector('.modal')
const closeButton = document.querySelector('.modal-close')
const modalBackground = document.querySelector('.modal-background')

closeButton.addEventListener('click', () => {
    dialog.classList.toggle("is-active")
})

modalBackground.addEventListener('click', () => {
    dialog.classList.toggle("is-active")
})


function populateNav(starships) { 
    starships.forEach(starship => {
        
        let anchorWrap = document.createElement('a')
        anchorWrap.href = '#'
        
        anchorWrap.addEventListener('click', event => {
            let shipName = event.target.textContent
            const foundShip = starships.find(ship => ship.name === shipName)
            populateShipView(foundShip)

            
})
    
    let listItem = document.createElement('li')
    listItem.textContent = starship.name
    anchorWrap.appendChild(listItem)
    navList.appendChild(anchorWrap)
    nav.appendChild(navList)
    })
    
}

function populateShipView(shipData) {
    removeChildren(shipView)
    let shipNum = getLastNumber(shipData.url)
    console.log(shipNum)
    let shipImage = document.createElement('img')
    shipImage.src = `https://starwars-visualguide.com/assets/img/starships/${shipNum}.jpg`
    shipImage.addEventListener('error', event => {
        shipImage.hidden = true
        dialog.classList.toggle("visible");
    })
//shipView.appendChild.toggle("is-active")
shipView.appendChild(shipImage)
}

populateNav(starships)


addStarField(document.querySelector('body'), 1000)
addStarField(shipView, 100)

addStarFieldRed(document.querySelector('body'), 1000)
addStarFieldRed(shipView, 100)

//look up checking image errors with Java Script
