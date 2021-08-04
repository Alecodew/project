
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const Elmclose = document.querySelector('.menu__close');

hamburger.addEventListener('click',()=> {
    menu.classList.add('active');
});

Elmclose.addEventListener('click',()=> {
    menu.classList.remove('active');
});