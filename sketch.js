const container = document.getElementById   ("container");
const reset = document.querySelector('#reset')

let divisoes 
let pixels
function makeRows(rows, cols){
   for (let i = 0; i < cols; i++){
     divisoes = document.createElement('div')
    container.appendChild(divisoes)
    divisoes.style.cssText = 'width: 100%; height: 50px; display:flex; flex-direction: row;'
    for (let j = 0; j < rows; j++){
         pixels = document.createElement('div')
        divisoes.appendChild(pixels)
        pixels.className = 'pintar'
    }
   }
}
makeRows(16, 16)
container.addEventListener('mouseover', (e) =>{
    if(e.target.matches('.pintar')){
        e.target.classList.add('active')
    }
})
reset.addEventListener('click', () =>{
    const pintou = document.querySelectorAll('.active')
    for (let k = 0; k < pintou.length; k++){
        pintou[k].classList.remove('active')
    }
})