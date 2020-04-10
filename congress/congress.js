import { senators } from '../Starwars/data/senators.js'
console.log(senators)
const senatorDiv = document.querySelector('senators')

//function getSimplifiedSen (senatorArray) {
    //return senatorArray.map(senator => {
function populateSenatorDiv() {
    senators.forEach(senator => {
        let middleName = senator.middle_name ? ` ${senator.middle_name} ` : ` `

        let senFigure = document.createElement('figure')
        let figImg = document.createElement('img')
        let figCaption = document.createElement('figcaption')

        figImg.src = `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-200px.jpeg`
        figCaption.textContent = `${senator.first_name}${middleName}${senator.last_name}`

    //   figImg.src = senator.imgURL
    //   figCaption.textContent = senator.name
        
        senFigure.appendChild(figImg)
        senFigure.appendChild(figCaption)
        senatorDiv.appendChild(senFigure)
        })
    main.appendChild(senatorDiv)
}
//    return {
//        id: senator.id,
//        name: `${senator.first_name}${$middleName}${senator.last_name} `,
        
        //seniority : parseInt(senator.seniority, 10
   //}
//})

function populateSenatorDiv(justSenatorNames) {justSenatorNames.forEach(senator => {
    console.log(justSenatorNames)
    justSenatorNames.forEach(senator => {


})

})

const filterSenators = (prop, value) => {
    return senators.filter(senator => {
        return senator[prop] === value
})
}

const republicans = filterSenators('party', 'R')

const mostSeniority = getSimplifiedSenators(republicans).reduce(
    (acc, senator) => {
        return (acc.seniority || 0) > senior.seniority ? acc : senator
    }
)

console.log(mostSeniority)
populateSenatorDiv(getSimplifiedSenators(republicans))}
