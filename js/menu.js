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
    const projects = document.querySelectorAll('.portfolio-container-wrapper .projetos');
    const totalProjects = projects.length;

    projects[currentProjectIndex].style.display = 'none';
    currentProjectIndex = (currentProjectIndex + direction + totalProjects) % totalProjects;
    projects[currentProjectIndex].style.display = 'flex';
}

// Inicializa o carrossel apenas na página que tem o wrapper
document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.portfolio-container-wrapper');
    if (wrapper) {
        const projects = wrapper.querySelectorAll('.projetos');
        projects.forEach((project, index) => {
            project.style.display = index === 0 ? 'flex' : 'none';
        });
    }

    // Adiciona linha de destaque abaixo dos títulos de seção
    document.querySelectorAll('section h2').forEach(h2 => {
        const accent = document.createElement('span');
        accent.className = 'heading-accent';
        h2.insertAdjacentElement('afterend', accent);
    });

    // Fade-in ao rolar a página
    const fadeEls = document.querySelectorAll('.fade-in');
    if (fadeEls.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        fadeEls.forEach(el => observer.observe(el));
    }
});
