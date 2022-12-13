let btn14 = document.querySelector('#btn14')
let btn14Max = document.querySelector('#btn14Max')
let blac = document.querySelector('.blac')
let img = document.querySelector('#img')
btn14.onclick = ()=>{
    btn14.style.border = '3px solid #0071e3'
    blac.classList.toggle('none')
    btn14Max.style.border = '1px solid gray'
    blac.classList.add('none')
    img.src = 'img/iphone-14-finish-select-202209-6-1inch-blue.jfif'
}   

btn14Max.onclick = ()=>{
    btn14Max.style.border = '3px solid #0071e3'
    blac.classList.toggle('none')
    btn14.style.border = '1px solid gray'
    img.src="img/iphone-14-finish-select-202209-6-7inch-blue (1).jfif"
    blac.classList.add('none')

}
let color1 = document.querySelector('#color1')
let color2 = document.querySelector('#color2')
let color3 = document.querySelector('#color3')
let color4 = document.querySelector('#color4')
let color5 = document.querySelector('#color5')

let color = document.querySelector('#color')

color1.onmouseenter = ()=>{
    color.innerHTML='Blue'
}
color1.onclick = ()=>{
    img.src = 'img/iphone-14-finish-select-202209-6-1inch-blue.jfif'
}
color2.onmouseenter = ()=>{
    color.innerHTML='Purple'
    
}
color2.onclick = ()=>{
    img.src = 'img/Purple.jfif'
}
color3.onmouseenter = ()=>{
    color.innerHTML='Midnight'
}
color3.onclick = ()=>{
    img.src = 'img/Midnight.jfif'
}
color4.onmouseenter = ()=>{
    color.innerHTML='Starlight'
}
color4.onclick = ()=>{
    img.src = 'img/Starlight.jfif'
}
color5.onmouseenter = ()=>{
    color.innerHTML='(PRODUCT)RED'
}
color5.onclick = ()=>{
    img.src = 'img/red.jfif'
}