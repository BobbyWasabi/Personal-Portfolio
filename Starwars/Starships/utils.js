export function getlastnumber(url){
    let end = url.lastIndexOf(
}









export function addStarField(element, numStars){
element.style.setProperty('background-color', 'black')
for (let i=0; i< numStars; i++) {
let star = document.createElement('div')
star.style.setProperty('position', 'absolute')
star.style.setProperty('width', '2px')
star.style.setProperty('height', '2px')
star.style.setProperty('background-color', 'white')
let xy = getRandomPosition()
star.style.top = `${xy[0]}px`
star.style.top = `${xy[1]}px`
element.appendChild(star)
}   

}
funciton getRandomPosition() {
    let y = window.outerHeight
    let x = window.innerWidth
    let randomY = Math.floor(Math.random() *y)
    let randomX = Math.floor(Math.random()*x)
    return [randomX, randomY]
}