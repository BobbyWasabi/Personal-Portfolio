function getRandomPosi() {
    let y = document.body.scrollHeight
    let x = document.body.scrollWidth
    let randomY = Math.floor(Math.random() * y)
    let randomX = Math.floor(Math.random() * x)
    return [randomX, randomY]
  } 



  export function addStarFieldRed(element, numStars) {
    element.style.setProperty('background-color', 'black')
    for (let i = 0; i < numStars; i++) {
      let star = document.createElement('div')
      star.style.setProperty('position', 'absolute')
      star.style.setProperty('width', '.5px')
      star.style.setProperty('height', '.5px')
      star.style.setProperty('background-color', 'white')
      star.style.setProperty('background-shadow', '1px 1px 3px red, 0 0 1em blue, 0 0 0.7em red')
      let xy = getRandomPosi2()
      star.style.left = `${xy[0]}px`
      star.style.top = `${xy[1]}px`
      element.appendChild(star)
      console.log(element)
      
    }
    
  }
  
  function getRandomPosi2() {
    let y = document.body.scrollHeight
    let x = document.body.scrollWidth
    let randomY = Math.floor(Math.random() * y)
    let randomX = Math.floor(Math.random() * x)
    return [randomX, randomY]
  } 






export function getLastNumber(url){
    let end = url.lastIndexOf('/')
    let start = end - 2
    if(url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
}
 export function removeChildren(element) {
     while (element.firstChild) {
         element.removeChild(element.firstChild);
     }
 }

 export function addStarField(element, numStars) {
    element.style.setProperty('background-color', 'black')
    for (let i = -1000; i < numStars; i++) {
      let star = document.createElement('div')
      star.style.setProperty('position', 'absolute')
      star.style.setProperty('width', '1px')
      star.style.setProperty('height', '1px')
      star.style.setProperty('background-color', 'grey')
      star.style.setProperty('background-shadow', '1px 1px 3px red, 0 0 1em blue, 0 0 0.7em red')
      let xy = getRandomPosi()
      star.style.left = `${xy[0]}px`
      star.style.top = `${xy[1]}px`
      element.appendChild(star)
      console.log(element)
      
    }
    
  }
  




/*
To Do:

Need to place the image on the top layer...
make box for ships traveling at lightspeed...
*/
