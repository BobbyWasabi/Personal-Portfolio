import { senators } from '../Starwars/data/senators.js'
console.log(senators[0]["results"][0]["members"])
const senatorDiv = document.querySelector('.senators')
console.log(senators)
//function getSimplifiedSen (senatorArray) {
    //return senatorArray.map(senator => {
    function getSimplifiedSenators(senatorArray) {
        return senatorArray.map(senator => {
            let middleName = senator.middle_name ? ` ${senator.middle_name} ` : ` `
            return {
                id: senator.id,
                name: `${senator.first_name}${middleName}${senator.last_name}`,
                imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-200px.jpeg`,
                seniority: parseInt(senator.seniority, 10),
                missedVotesPct: senator.missed_votes_pct,
                party: senator.party,
                loyaltyPct: senator.votes_with_party_pct

        }
        })
    }
    console.log(getSimplifiedSenators(senators[0]["results"][0]["members"]))
    function populateSenatorDiv(simpleSenators) {
        console.log(simpleSenators)
        simpleSenators.forEach(senator => {
            let senFigure = document.createElement('figure')
            let figImg = document.createElement('img')
            let figCaption = document.createElement('figcaption')
                
            figImg.src = senator.imgURL
            figCaption.textContent = senator.name
    
            senFigure.appendChild(figImg)
            senFigure.appendChild(figCaption)
            senatorDiv.appendChild(senFigure)
        })
    }
//    return {
//        id: senator.id,
//        name: `${senator.first_name}${$middleName}${senator.last_name} `,


const filterSenators = (prop, value) => {
    return senators[0]["results"][0]["members"].filter(senator => {
        return senator[prop] === value
    })
}
const republicans = filterSenators('party', 'R')
console.log(republicans)
const democrats = filterSenators('party', 'D')

const mostSeniority = getSimplifiedSenators(senators[0]["results"][0]["members"]).reduce((acc, senator) => acc.seniority > senator.seniority ? acc : senator)
//const mostSeniority = 
const missedVotes = getSimplifiedSenators(senators[0]["results"][0]["members"]).reduce((acc, senator) => acc.missedVotesPct > senator.missedVotesPct ? acc : senator)

let loyalArray = []

const mostLoyal = getSimplifiedSenators(republicans).reduce((acc, senator) => {
    if (senator.loyaltyPct === 100) {
        loyalArray.push(senator)
    }
    return acc.loyaltyPct > senator.loyaltyPct ? acc : senator
})

console.log(loyalArray)

populateSenatorDiv(getSimplifiedSenators(senators[0]["results"][0]["members"]))
/*
import { senators } from '../Starwars/data/senators.js'
console.log(senators)

const senatorDiv = document.querySelector('.senators')

function populateSenatorDiv() {
    senators.forEach(senator => {
        
        let middleName = senator.middle_name ? ` ${senator.middle_name} ` : ` `

        let senFigure = document.createElement('figure')
        let figImg = document.createElement('img')
        let figCaption = document.createElement('figcaption')

        figImg.src = `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-200px.jpeg`
        figCaption.textContent = `${senator.first_name}${middleName}${senator.last_name}`

        senFigure.appendChild(figImg)
        senFigure.appendChild(figCaption)
        senatorDiv.appendChild(senFigure)
    })
    main.appendChild(senatorDiv)
}

const filterSenators = (prop, value) => {
    return senators.filter(senator => {
        return senator[prop] === value
    })
}

console.log(filterSenators('party', 'R'))
console.log(filterSenators('party', 'D'))
console.log(filterSenators('party', 'ID'))

const senatorNames = senators.map(senator => {
    let middleName = senator.middle_name ? ` ${senator.middle_name} ` : ` `
    return {
        id: senator.id,
        name: `${senator.first_name}${middleName}${senator.last_name}`,
        imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-200px.jpeg`
    }
})

//https://www.govtrack.us/static/legislator-photos/300002-200px.jpeg

populateSenatorDiv()
*/