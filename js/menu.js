let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')
let body = document.querySelector('body')

btnMenu.addEventListener('click', ()=> {
    menu.classList.add('abrir-menu')
    body.classList.toggle('no-overflow')
})


menu.addEventListener('click', ()=> {
    menu.classList.remove('abrir-menu')
    body.classList.toggle('no-overflow')
    
})

overlay.addEventListener('click', ()=> {
    menu.classList.remove('abrir-menu')
    body.classList.toggle('no-overflow')
})



