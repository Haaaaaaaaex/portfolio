
//navigation script
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top <offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }

    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}


//toggle navigation script

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

ScrollReveal({
    reset:true,
    distance: '80px',
    duration: 2000,
    delay: 50
});

ScrollReveal().reveal('.home-content, .heading', { origin:'top' });

ScrollReveal().reveal('.home-content h1, .profile-img', { origin:'left' });



ScrollReveal().reveal('.profile-heading, .profile-content', { origin:'right'});

ScrollReveal().reveal('.skills-heading, .experience-heading, .projects-heading, .contact-heading', { origin:'top' });
ScrollReveal().reveal('.skills-container, .form, .home-img', { origin:'bottom' });


const typed = new Typed('.multiple-text', {

    strings: [' an Android Developer',' a Front End Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
}

);


