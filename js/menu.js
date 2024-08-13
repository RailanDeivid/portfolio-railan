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



let currentProjectIndex = 0;

function navigate(direction) {
    const projects = document.querySelectorAll('.portfolio-container .projetos');
    const totalProjects = projects.length;

    projects[currentProjectIndex].style.display = 'none'; // Esconde o projeto atual
    currentProjectIndex = (currentProjectIndex + direction + totalProjects) % totalProjects;
    projects[currentProjectIndex].style.display = 'flex'; // Mostra o novo projeto
}

// Inicializa mostrando apenas o primeiro projeto
document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.portfolio-container .projetos');
    projects.forEach((project, index) => {
        project.style.display = index === 0 ? 'flex' : 'none';
    });
});
